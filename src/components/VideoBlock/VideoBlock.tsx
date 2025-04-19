import { SVideoBlock } from "./VideoBlock.styled";

export const VideoBlock = () => {
  return (
    <SVideoBlock id="videos">
      <h2>VIDEOS</h2>
      <p>GENIUS ORIGINAL SERIES</p>
      <div className="VideoWrapper">
        <img src="/img/butcher.jpg" alt="Open Mic Video" />
        <div className="VideoContent">
          <div className="label">OPEN MIC</div>
          <h3>Awich and Ferg Perform “Butcher Shop” Live</h3>
          <p>
            Watch them perform the song on the latest episode of ‘Open Mic.’
          </p>
          <p className="author">by ButterflyHoney / <span>Apr. 18, 2025</span></p>
        </div>
      </div>
      <button>LOAD MORE</button>
    </SVideoBlock>
  );
};
