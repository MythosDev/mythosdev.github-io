import React, { useRef, useEffect, useState } from 'react';

const vertexShaderSrc = `
attribute vec2 a_position;
varying vec2 v_uv;

void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0, 1);
}
`;

const fragmentShaderSrc = `
precision mediump float;

uniform sampler2D u_image;
uniform vec2 u_mouse;
uniform float u_radius;
uniform float u_pixelSize;
uniform vec2 u_resolution;

varying vec2 v_uv;

void main() {
    vec2 uv = v_uv;
    vec2 mouse = u_mouse / u_resolution;

    vec2 offset = uv - mouse;
    float dist = length(offset);

    float t = smoothstep(0.0, u_radius, dist);

    vec2 pixelatedUV = mouse + floor(offset / u_pixelSize) * u_pixelSize;

    uv = mix(pixelatedUV, uv, t);

    gl_FragColor = texture2D(u_image, uv);
}
`;

function PixelateImageShader({ imageSrc, radius = 0.2, pixelSize = 0.02 }) {
    const canvasRef = useRef(null);
    const [mouse, setMouse] = useState([0, 0]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const gl = canvas.getContext('webgl');
        if (!gl) return;

        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = imageSrc;

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

            const vs = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(vs, vertexShaderSrc);
            gl.compileShader(vs);
            if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
                console.error('Vertex shader error:', gl.getShaderInfoLog(vs));
            }

            const fs = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(fs, fragmentShaderSrc);
            gl.compileShader(fs);
            if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
                console.error('Fragment shader error:', gl.getShaderInfoLog(fs));
            }

            const program = gl.createProgram();
            gl.attachShader(program, vs);
            gl.attachShader(program, fs);
            gl.linkProgram(program);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                console.error('Shader program link error:', gl.getProgramInfoLog(program));
            }

            gl.useProgram(program);

            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                -1, -1, 1, -1, -1, 1,
                -1, 1, 1, -1, 1, 1
            ]), gl.STATIC_DRAW);

            const positionLocation = gl.getAttribLocation(program, 'a_position');
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            const texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);

            const mouseLocation = gl.getUniformLocation(program, 'u_mouse');
            const radiusLocation = gl.getUniformLocation(program, 'u_radius');
            const pixelSizeLocation = gl.getUniformLocation(program, 'u_pixelSize');
            const resLocation = gl.getUniformLocation(program, 'u_resolution');

            function render() {
                gl.clear(gl.COLOR_BUFFER_BIT);
                gl.uniform2f(mouseLocation, ...mouse);
                gl.uniform1f(radiusLocation, radius);
                gl.uniform1f(pixelSizeLocation, pixelSize);
                gl.uniform2f(resLocation, canvas.width, canvas.height);
                gl.drawArrays(gl.TRIANGLES, 0, 6);
            }

            render();

            canvas.addEventListener('mousemove', (e) => {
                const rect = canvas.getBoundingClientRect();
                setMouse([
                    e.clientX - rect.left,
                    canvas.height - (e.clientY - rect.top)
                ]);
            });

            const animationLoop = () => {
                render();
                requestAnimationFrame(animationLoop);
            };
            animationLoop();
        };
    }, [imageSrc, mouse, radius, pixelSize]);

    return <canvas ref={canvasRef} />;
}

export default PixelateImageShader;
