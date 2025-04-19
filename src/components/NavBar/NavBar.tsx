import { SNavBar } from "./NavBar.styled";

export const NavBar = () => {
  return (
          <SNavBar>
            <div className="NavLinks">
              <a href="#featured">FEATURED</a>
              <a href="#charts">CHARTS</a>
              <a href="#videos">VIDEOS</a>
              <a href="#artist">ARTIST</a>
            </div>
          </SNavBar>
  );
};