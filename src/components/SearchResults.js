import TrackList from "./TrackList";

export default function SearchResults({ results, onAdd }) {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        {results.length > 0 ? (
          <TrackList tracks={results} onAction={onAdd} actionLabel="Add" />
        ) : (
          <p>No results found. Try searching for something else!</p>
        )}
      </div>
    );
  }
  
