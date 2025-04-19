import { useNavigate } from "react-router-dom";
import { Title } from "../UI/Title/Title";
import { SHeader } from "./Header.styled";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <SHeader>
      <div className="Links">
        <a href="#" onClick={() => navigate("/")}>
          LOG OUT
        </a>
        <a href="#" className="Favourite" onClick={() => navigate("/favorites")}>
          FAVORITES
        </a>
      </div>

      <Title titleText="GENIUS" titleType="h1" />
      <div className="Links">
        <a href="#" onClick={() => navigate("/registrationPage")}>
          SIGN UP
        </a>
        <a href="#" onClick={() => navigate("/")}>
          SIGN IN
        </a>
      </div>
    </SHeader>
  );
};
