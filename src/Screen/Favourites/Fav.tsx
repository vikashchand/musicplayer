import React, { useEffect, useState } from 'react'
import '../Playlist/Playlist.css'


export default function Fav() {

  const [savedTracks, setSavedTracks] = useState<any[]>([]);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const displaySavedTracks = () => {
    const savedTracks = localStorage.getItem("favoriteTracks");
    if (savedTracks) {
      const parsedSavedTracks = JSON.parse(savedTracks);
      setSavedTracks(parsedSavedTracks);
    } else {
      console.log("No saved tracks found.");
    }
  };

  useEffect(() => {
    displaySavedTracks();
  }, []);





  const handlePlay = (previewUrl: string) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    const newAudio = new Audio(previewUrl);
    setAudio(newAudio);
    setIsPlaying(true);
    newAudio.play();
  };

  const handleStop = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  };
    






  return (


    <div className="playlist-body">
    
    

     
        {savedTracks.map((track, index) => (
         

<div className="playlist-card" key={track.track.subtitle}>
            <img
              className="playlist-image"
              src={track.track.images.coverart}
              alt={track.track.title}
            />
            <p className="playlist-text">{track.track.subtitle}</p>
            <button
              className="btn"
              onClick={() => handlePlay(track.track.hub.actions[1].uri)}
              disabled={isPlaying}

            
            >
              Play
            </button>
            
            <button
              className="btn"
              onClick={() => handleStop()}
              disabled={!isPlaying}
            >
              Stop
            </button>



           
          </div>
        ))}
     
    
    
    
    </div>
  )
}
