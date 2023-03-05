import axios from "axios";
import React, { useEffect, useState } from "react";
import '../Playlist/Playlist.css'
import './Search.css'



export default function Playlist() {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tracks, setTracks] = useState<any[]>([]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const options = {
      method: "GET",
      url: "https://shazam.p.rapidapi.com/search",
      params: { term: searchQuery, locale: "en-US", offset: "0", limit: "5" },
      headers: {
        "x-rapidapi-key": "eac5cd5013msh66b82799083f4a5p18b699jsn7ca350372cba",
        "x-rapidapi-host": "shazam.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setTracks(response.data.tracks.hits);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  

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


  const addfav = (track: any) => {
    const savedTracks = localStorage.getItem("favoriteTracks");
    const parsedSavedTracks = savedTracks ? JSON.parse(savedTracks) : [];
    const newSavedTracks = [...parsedSavedTracks, track];
    localStorage.setItem("favoriteTracks", JSON.stringify(newSavedTracks));
  };
  const displaySavedTracks = () => {
    const savedTracks = localStorage.getItem("favoriteTracks");
    if (savedTracks) {
      console.log(JSON.parse(savedTracks));
    } else {
      console.log("No saved tracks found.");
    }
  };

  return (
    <div className="screen_container search_container">
      <h2 className="hed">Name the song, I'll get it</h2>
      <div className="search_bar">
        <input
          className="txtquery"
          type="text" placeholder="🎸🎶Type Your fav song and then click the btn 🎵🎵"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>

      

      </div>
      <div className="playlist-body">
        {tracks.map((track, index) => (
          <div className="playlist-card" key={track.track.key}>
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
            <button
              className="btn"
              onClick={() => addfav(track)}
              
            >
              💓fav
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
