import { SNewsCard } from "./NewsCard.styled";

interface NewsCardProps {
  category: string;
  title: string;
  author: string;
  date: string;
  image: string;
}

export const NewsCard = ({ category, title, author, date, image }: NewsCardProps) => {
  return (
    <SNewsCard>
      <h1>{category}</h1>
      <h2 className="Artist">{title}</h2>
      <p>
        by {author} / <span>{date}</span>
      </p>
      <img className="Image" src={image} alt={title} />
    </SNewsCard>
  );
};