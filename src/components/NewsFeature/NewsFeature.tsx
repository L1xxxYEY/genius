import { SNewsFeature } from "./NewsFeature.styled";

interface NewsFeatureProps {
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
}

export const NewsFeature = ({
  category,
  title,
  description,
  author,
  date,
  image,
}: NewsFeatureProps) => {
  return (
    <SNewsFeature>
      <div className="TextSection">
        <h1 className="Category">{category}</h1>
        <h2 className="Title">{title}</h2>
        <p className="Description">{description}</p>
        <p className="Author">
          by {author} / <span>{date}</span>
        </p>
      </div>
      <div className="ImageWrapper">
        <img src={image} alt={title} />
      </div>
    </SNewsFeature>
  );
};
