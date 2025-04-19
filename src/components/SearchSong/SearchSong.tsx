import { useState } from "react";
import { useSearchSongsQuery } from "../../store/API/searchApi";
import { SSongSearch } from "./SearchSong.styled";
import { Title } from "../UI/Title/Title";

const SongSearch = () => {
  const [query, setQuery] = useState("");
  const {
    data: songs,
    error,
    isLoading,
  } = useSearchSongsQuery(query, {
    skip: !query.trim(),
  });

  return (
    <SSongSearch>
      <input
        className="SearchInput"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Lyrics & More"
      />

      <div className="Results">
        {isLoading && <p>Loading songs...</p>}
        {error && <p>Something went wrong...</p>}
        {songs?.length === 0 && !isLoading && !error && (
          <p className="InfoText">No songs found.</p>
        )}

        {songs?.map((song) => (
          <a
            className="SongCard"
            key={song.id}
            href={song.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Title titleText={song.full_title} titleType="h3" />
            <p>by {song.primary_artist.name}</p>
          </a>
        ))}
      </div>
    </SSongSearch>
  );
};

export default SongSearch;
