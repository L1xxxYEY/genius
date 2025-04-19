import { Title } from "../../components/UI/Title/Title";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleFavorite } from "../../store/slices/FavoritesSlice";
import { FaTimes } from "react-icons/fa";
import { SFavouritePage, SFavouritePageWrapper } from "./FavoritesPage.styled";

export const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.songs);

  const handleRemove = (e: React.MouseEvent, songId: number) => {
    e.preventDefault();
    const songToRemove = favorites.find((s) => s.id === songId);
    if (songToRemove) {
      dispatch(toggleFavorite(songToRemove));
    }
  };

  return (
    <SFavouritePageWrapper>
      <Title titleText="Favorite songs" titleType="h2" />
      {favorites.length === 0 ? (
        <p>You have no favorite songs...</p>
      ) : (
        favorites.map((song, index) => (
          <SFavouritePage
            key={song.id}
            href={song.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="index">{index + 1}</span>
            <img src={song.song_art_image_url} alt={song.title} />
            <div className="info">
              <h3>{song.title}</h3>
              <p>Artist: {song.primary_artist.name}</p>
            </div>
            <div
              className="remove"
              onClick={(e) => handleRemove(e, song.id)}
              title="Remove from favorites"
            >
              <FaTimes />
            </div>
          </SFavouritePage>
        ))
      )}
    </SFavouritePageWrapper>
  );
};
