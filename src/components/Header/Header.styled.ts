import styled from "styled-components";

export const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.lightYellow};
  padding: 7px 10px;

  .Links {
    display: flex;
    gap: calc(0.6vw + 4.1px);
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    font-weight: 600;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.black};
      font-weight: 600;
      font-size: calc(0.3vw + 6px);
    }

    .Favourite {
      transition: color 0.3s;
    }
    .Favourite:hover {
      color: ${(props) => props.theme.colors.red};
    }
  }

  h1 {
    font-size: calc(0.5vw + 14.4px);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 6px;
  }
`;
