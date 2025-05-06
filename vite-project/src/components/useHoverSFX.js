import { useEffect, useRef, useState } from 'react';

const useHoverSFX = (selector = 'a', audioPath = '/sfx/cool-interface-click.wav', isFastMode = true) => {
  const containerRef = useRef(null);
  const audioRef = useRef(new Audio(audioPath));
  const [canPlay, setCanPlay] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);

    const handleMouseEnter = () => {
      const audio = audioRef.current;

      if (isFastMode) {
        // In fast mode, always play sound immediately
        audio.currentTime = 0;
        audio.play();
      } else if (canPlay) {
        // In regular mode, wait for the sound to end
        audio.currentTime = 0;
        audio.play();
        setCanPlay(false);

        audio.onended = () => setCanPlay(true);
      }
    };

    elements.forEach((el) => el.addEventListener('mouseenter', handleMouseEnter));

    return () => {
      elements.forEach((el) => el.removeEventListener('mouseenter', handleMouseEnter));
    };
  }, [canPlay, selector, isFastMode]);

  return containerRef;
};

export default useHoverSFX;
