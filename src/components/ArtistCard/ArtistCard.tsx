import { IArtist } from "../../store/API/searchApi";
import { SArtistCard } from "./ArtistCard.styled";

const ArtistCard: React.FC<{ artist: IArtist }> = ({ artist }) => {
  return (
    <SArtistCard>
      <img className="ArtistImage" src={artist.image_url} alt={artist.name} />
      <h3 className="ArtistName">{artist.name}</h3>
      <a className="ArtistText" href={artist.url} target="_blank" rel="noopener noreferrer">
        Visit Artist
      </a>
    </SArtistCard>
  );
};

export default ArtistCard;







