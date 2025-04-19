
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleFavorite } from "../../store/slices/FavoritesSlice";
import { useState } from "react";
import { Toast } from "../UI/Toast/Toast";
import { SSongList } from "./SongList.styled";
import { Title } from "../UI/Title/Title";

interface ISongDetails {
  id: number;
  title: string;
  full_title: string;
  song_art_image_url: string;
  primary_artist: {
    name: string;
  };
  url: string;
  release_date?: string;
  description?: {
    plain: string;
  };
  stats?: {
    pageviews: number;
  };
  album?: {
    name: string;
    cover_art_url: string;
  };
  featured_artists?: Array<{
    name: string;
  }>;
}

interface SongListProps {
  song: ISongDetails;
  index: number;
}

export const SongList = ({ song, index }: SongListProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.songs);
  const isFavorite = favorites.some((fav) => fav.id === song.id);

  const [showToast, setShowToast] = useState(false);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleFavorite(song));

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  };

  return (
    <SSongList href={song.url} target="_blank" rel="noopener noreferrer">
      <span className="SongNumber">{index + 1}</span>

      <img
        src={
          song.song_art_image_url ||
          "https://assets.genius.com/images/default_cover_image.png"
        }
        alt={song.title}
      />

      <div className="info">
        <Title titleText={song.title} titleType="h3"/>
        <p>Artist: {song.primary_artist.name}</p>
        {song.release_date && <p>Release date: {song.release_date}</p>}

        {song.stats?.pageviews && (
          <p>
            👁 {Intl.NumberFormat("en").format(song.stats.pageviews)} views
          </p>
        )}
      </div>

      <div className="heart" onClick={handleToggleFavorite}>
        {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
      </div>

      {showToast && <Toast message={isFavorite ? "Added to favorites" : "Removed from favorites"} />}
    </SSongList>
  );
};



