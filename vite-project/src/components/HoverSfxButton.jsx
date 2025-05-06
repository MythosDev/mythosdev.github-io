import React, { useRef, useState, useEffect } from 'react';

const HoverSFXButton = ({ isFastMode = true }) => {
  const audioRef = useRef(new Audio('/sfx/cool-interface-click.wav')); // Preload audio once
  const [canPlay, setCanPlay] = useState(true);

  useEffect(() => {
    // Reset the audio when fast mode is toggled externally
    if (isFastMode) {
      setCanPlay(true); // Allow immediate play when fast mode is on
    }
  }, [isFastMode]);

  const handleMouseEnter = () => {
    const audio = audioRef.current;

    if (isFastMode) {
      audio.currentTime = 0; // Always restart the sound
      audio.play();
    } else if (canPlay) {
      audio.currentTime = 0; // rewind in case it was mid-play
      audio.play();
      setCanPlay(false);
      audio.onended = () => {
        setCanPlay(true);
      };
    }
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition"
    >
      Hover Me Once 🔈
    </button>
  );
};

export default HoverSFXButton;
