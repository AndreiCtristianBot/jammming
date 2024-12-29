import TrackList from "./TrackList";

export default function Playlist({ name, tracks, onRemove, onNameChange, onSave }) {
    return (
      <div className="Playlist">
        <label>
          Enter your playlist name:
          <input value={name} onChange={(e) => onNameChange(e.target.value)} />
          {tracks.length > 0 ? (
            <TrackList tracks={tracks} onAction={onRemove} actionLabel="Remove" />
          ) : (
            <div>
              <br></br>
              <p>Your playlist is empty. Start adding some songs!</p>
            </div>
          )}
          <br></br>
          <br></br>
        </label>
        <button onClick={onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
  