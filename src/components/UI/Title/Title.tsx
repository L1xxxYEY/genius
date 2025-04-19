interface ITitleProps {
    titleType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    titleText: string;
  }
  
  export const Title = ({ titleType, titleText }: ITitleProps) => {
    const renderTitle = () => {
      switch (titleType) {
        case "h1":
          return <h1>{titleText}</h1>;
        case "h2":
          return <h2>{titleText}</h2>;
        case "h3":
          return <h3>{titleText}</h3>;
        case "h4":
          return <h4>{titleText}</h4>;
        case "h5":
          return <h5>{titleText}</h5>;
        case "h6":
          return <h6>{titleText}</h6>;
        default:
          return <h1>{titleText}</h1>;
      }
    };
    return renderTitle();
  };