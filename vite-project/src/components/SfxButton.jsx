import React, { useState } from 'react';

const SFXButton = ({ 
  src = '/sfx/cool-interface-click.wav', 
  children = 'Click Me 🔊', 
  volume = 1 
}) => {
  const [currentVolume, setCurrentVolume] = useState(volume);

  const playSound = () => {
    const audio = new Audio(src);
    audio.volume = currentVolume; // Adjust volume here
    audio.play();
  };

  // Handle volume change (can be tied to an input slider or other control)
  const handleVolumeChange = (e) => {
    setCurrentVolume(e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={playSound}
        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
      >
        {children}
      </button>
      
      {/* Volume control slider */}
      <div className="mt-2">
        <label htmlFor="volume" className="text-white">Volume</label>
        <input
          type="range"
          id="volume"
          min="0"
          max="1"
          step="0.01"
          value={currentVolume}
          onChange={handleVolumeChange}
          className="mt-1"
        />
      </div>
    </div>
  );
};

export default SFXButton;
