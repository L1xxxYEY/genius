import { NewsCard } from "../UI/NewsCard/NewsCard";
import { SNewsMainCard } from "./NewsMainCard.styled";

export const NewsMainCard = () => {
  return (
    <SNewsMainCard>
            <NewsCard
              category="News"
              title="On “Caramel,” The Paradoxes Of Fame & The Of Remaining "
              author="Kevin Loo"
              date="Apr. 14, 2025"
              image="/img/dj.jpg"
            />
            <NewsCard
              category="Video"
              title="Watch Maasho’s New Video “eyesoRe” Now Check out the Genius"
              author="ButterflyHoney"
              date="Apr. 13, 2025"
              image="/img/maasho.jpg"
            />
            <NewsCard
              category="News"
              title="Lana Del Rey Kickstarts Her Next Era With New Song “Henry, come on”"
              author="Ken Partridge"
              date="Apr. 11, 2025"
              image="/img/lana.jpg"
            />
            <NewsCard
              category="News"
              title="Read All The Lyrics To Ken Carson’s New Album ‘More Chaos’"
              author="Ken Partridge"
              date="Apr. 11, 2025"
              image="/img/carson.jpg"
            />
          </SNewsMainCard>
  );
};