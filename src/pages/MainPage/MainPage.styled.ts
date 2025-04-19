import styled from "styled-components";

export const SMainPage = styled.div`
  .FeaturedSongs {
    margin-bottom: calc(1.3vw + 36px);

    h2 {
      font-size: calc(1.9vw + 29px);
      padding: 0px calc(1.3vw + 16px);
    }
  }

  .FeaturedArtists {
    margin-bottom: calc(1.3vw + 26px);
  }

  .FeaturedArtists h2 {
    text-align: center;
    font-size: calc(0.6vw + 28px);
    margin-bottom: 15px;
    color: ${(props) => props.theme.colors.black};
  }

  .artist-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;
