import styled from "styled-components";

export const SFavouritePageWrapper = styled.div`
  padding: 20px;
  background: ${(props) => props.theme.colors.darkGray};
  height: 100vh;
  color: ${(props) => props.theme.colors.lightYellow};
`;

export const SFavouritePage = styled.a`
  display: flex;
  align-items: center;
  gap: calc(0.6vw + 8px);
  background-color: rgba(83, 83, 83, 0.62);
  padding: calc(0.2vw + 4.4px);
  text-decoration: none;
  color: ${(props) => props.theme.colors.pureWhite};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.52);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .SongNumber {
    font-weight: 600;
    font-size: calc(0.4vw + 11.6px);
    color: ${(props) => props.theme.colors.pureWhite};
    width: calc(0.6vw + 13px);
    text-align: center;
  }

  img {
    width: calc(1.3vw + 51px);
    height: calc(1.3vw + 51px);
    border-radius: 6px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h3 {
      font-size: calc(0.3vw + 12px);
      font-weight: 700;
      margin: 0;
    }

    p {
      font-size: calc(0.2vw + 10.4px);
      margin: 0;
      color: ${(props) => props.theme.colors.pureWhite};
    }
  }

  .remove {
    margin-left: auto;
    font-size: calc(0.3vw + 16px);
    color: ${(props) => props.theme.colors.lightYellow};
    cursor: pointer;
    padding: 0px 10px;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .remove:hover {
    transform: scale(1.2);
    color: ${(props) => props.theme.colors.red};
  }
`;
