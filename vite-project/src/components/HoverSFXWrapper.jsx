import React, { useRef, useState, useEffect } from 'react';

const HoverSFXWrapper = ({ children, isFastMode }) => {
  const audioRef = useRef(new Audio('/sfx/cool-interface-click.wav'));
  const [canPlay, setCanPlay] = useState(true);

  useEffect(() => {
    // If fast mode is enabled, always allow immediate play
    if (isFastMode) {
      setCanPlay(true);
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
    <div onMouseEnter={handleMouseEnter}>
      {children}
    </div>
  );
};

HoverSFXWrapper.defaultProps = {
  isFastMode: true, // Ensure fast mode is the default
};

export default HoverSFXWrapper;
