import { SFooter } from "./Footer.styled";

export const Footer = () => {
  return (
    <SFooter>
      <div className="FooterTop">
        <div>
          <h3>
            Genius is the world’s biggest collection of song lyrics and musical
            knowledge
          </h3>
          <div className="FooterSocial">
            <a href="#">
              <i className="fa-brands fa-facebook-f" />
            </a>

            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>

            <a href="#">
              <i className="fa-brands fa-instagram" />
            </a>

            <a href="#">
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
        </div>

        <div className="LinksColumn">
          <a href="#">About Genius</a>
          <a href="#">Contributor Guidelines</a>
          <a href="#">Press</a>
          <a href="#">Shop</a>
          <a href="#">Advertise</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Delete Account</a>
        </div>

        <div className="LinksColumn">
          <a href="#">Licensing</a>
          <a href="#">Jobs</a>
          <a href="#">Developers</a>
          <a href="#">Copyright Policy</a>
          <a href="#">Contact Us</a>
          <a href="#">Sign Out</a>
          <a href="#">Do Not Sell My Personal Information</a>
        </div>
      </div>

      <div className="FooterBottom">
        <p>© 2025 ML Genius Holdings, LLC</p>
        <div>
          VERIFIED ARTISTS • ALL ARTISTS: A B C D E F G H I J K L M N O P Q R S
          T U V W X Y Z #
        </div>
        <div>
          HOT SONGS: BLUE • CARAMEL • AISCREAM - 愛マスクリーㇺ！(AI SCREAM!)
          (ROMANIZED) • YOU’LL BE IN MY HEART • STEVE’S LAVA CHICKEN • VIEW ALL
        </div>
      </div>
    </SFooter>
  );
};

export default Footer;
