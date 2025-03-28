import React, { useState, useRef, useEffect } from "react";
import audio from "../../assets/atalAudio2.mp3";
import { IoPause, FiPlay } from "../../assets/logos/index";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Auto play after 10 seconds on mount
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
    }, 10000); // Delay of 10 seconds (you can adjust this as needed)

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="audio-player d-flex justify-content-center align-items-center position-fixed end-0 bottom-0 m-4 mb-5 z-3 bg-dark p-2 rounded bg-opacity-50">
      <audio ref={audioRef} src={audio} />
      <div className="controls">
        <button
          className="audio-button text-white border-0 p-2 rounded cursor-pointer"
          style={{ backgroundColor: "#f68633" }}
          onClick={toggleAudio}
        >
          {isPlaying ? <IoPause /> : <FiPlay />}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
