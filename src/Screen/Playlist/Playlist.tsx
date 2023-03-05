
import './Playlist.css'
import axios from "axios";
import React, { useEffect, useState } from "react";


export default function Playlist() {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tracks, setTracks] = useState<any[]>([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
      params: {key: '484129036', locale: 'en-US'},
      headers: {
        'X-RapidAPI-Key': 'eac5cd5013msh66b82799083f4a5p18b699jsn7ca350372cba',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setTracks(response.data.tracks);
      })
      .catch(function (error) {
        console.error(error);
      });
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
      
    
      {tracks.map((track) => (
        <div className="playlist-card" key={track.key}>
          <h5 className="playlist-text">{track.title}</h5>
          <img className="playlist-image" src={track.images.coverart} alt={track.title} />
          <button className="btn" onClick={() => handlePlay(track.hub.actions[1].uri)}>
            Play
          </button>
          <button className="btn" onClick={() => handleStop()} disabled={!isPlaying}>
            Stop
          </button>
        </div>
      ))}
    </div>
    
     
  );
  
}