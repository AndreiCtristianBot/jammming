import TrackList from "./TrackList";

export default function Playlist({ name, tracks, onRemove, onNameChange, onSave }) {
    return (
      <div className="Playlist">
        <input value={name} onChange={(e) => onNameChange(e.target.value)} />
        {tracks.length > 0 ? (
          <TrackList tracks={tracks} onAction={onRemove} actionLabel="Remove" />
        ) : (
          <p>Your playlist is empty. Start adding some songs!</p>
        )}
        <button onClick={onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
  