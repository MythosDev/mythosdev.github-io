import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player/youtube';

const videos = [
    {
      id: 1,
      videoUrl: 'https://www.youtube.com/watch?v=2GWZIW69rqY&ab_channel=garrettholtz',
      thumbnailUrl: '/SpaceBanner.webp',
    },
    {
      id: 2,
      videoUrl: 'https://www.youtube.com/watch?v=GDv8Iei3h4Y&ab_channel=AlexBrooksFilms',
      thumbnailUrl: '/Banner.jpeg',
    },
    {
      id: 3,
      videoUrl: 'https://www.youtube.com/watch?v=9W8Qls_gpQI&ab_channel=nthnmtz',
      thumbnailUrl: '/GhibliBanner.webp',
    },
  ];


const VideoPlayer = () => {
    const [selectedVideoId, setSelectedVideoId] = useState(null);

    const handleClick = (id) => {
      setSelectedVideoId(prev => (prev === id ? null : id));
    };
  
    return (
      <div className="w-full">
        {videos.map(({ id, videoUrl, thumbnailUrl }) => {
          const isSelected = selectedVideoId === id;
          return (
            <div
              key={id}
              onClick={() => handleClick(id)}
              className={`transition-all duration-500 ease-in-out overflow-hidden bg-black relative cursor-pointer w-full ${
                isSelected ? 'h-[80vh]' : 'h-[30vh]'
              }`}
            >
              {!isSelected ? (
                <>
                  <img
                    src={thumbnailUrl}
                    alt="Video Thumbnail"
                    className="object-cover w-full h-full transform transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </>
              ) : (
                <ReactPlayer
                  url={videoUrl}
                  playing
                  controls={true}
                  width="100%"
                  height="100%"
                  className="absolute top-0 left-0"
                />
              )}
            </div>
          );
        })}
      </div>
    );
  };
    

export default VideoPlayer;
