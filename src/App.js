import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import "./App.css";

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");

  const searchSpotify = (term) => {
    console.log(`Searching Spotify for: ${term}`);
    const newResults = Array.from({ length: Math.floor(Math.random() * 19) || 0}, (_, i=Math.floor(Math.random())) => ({
      id: `${Math.floor(Math.random() * 10000) + i}`,
      name: `Song ${Math.random().toString(36).substr(2, 5)} for "${term}"`,
      artist: `Artist ${Math.floor(Math.random() * 100) + 1}`,
      album: `Album ${Math.floor(Math.random() * 100) + 1}`,
    }));
    setSearchResults(newResults);
  };

  const addToPlaylist = (track) => {
    if (!playlist.find((savedTrack) => savedTrack.id === track.id)) {
      setPlaylist((prev) => [...prev, track]);
    }
  };

  const removeFromPlaylist = (track) => {
    setPlaylist((prev) => prev.filter((savedTrack) => savedTrack.id !== track.id));
  };

  const savePlaylist = () => {
    if (playlist.length === 0) {
      alert("Your playlist is empty!");
      return;
    }
  
    // Obține numele melodiilor
    const songNames = playlist.map(track => ("+") + track.name.split(' for ')[0] + "\n" + track.artist + "\n" + track.album).join(";\n");
    console.log(`Saving playlist: ${playlistName}`);
    alert(`Playlist "${playlistName}" saved with ${playlist.length} songs:\n${songNames}`);
    
    setPlaylist([]);
    setPlaylistName("New Playlist");
  };
  

  return (
    <div>
      <header>
      <br />
      <h1>Jammming</h1>
      <br />
      <SearchBar onSearch={searchSpotify} />
      </header>
      <main>
      <br />
      <div className="App-playlist">
        <SearchResults results={searchResults} onAdd={addToPlaylist} />
        <br />
        <Playlist
          name={playlistName}
          for={playlistName}
          tracks={playlist}
          onRemove={removeFromPlaylist}
          onNameChange={setPlaylistName}
          onSave={savePlaylist}
        />
        <br />
      </div>
      </main>
      <footer>
        &#169; {new Date().getFullYear()}, Bot Cristian Andrei.
      </footer>
    </div>
  );
}