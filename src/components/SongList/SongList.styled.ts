import styled from "styled-components";

export const SSongList = styled.a`
  display: flex;
  align-items: center;
  gap: calc(0.6vw + 8px);
  background-color:rgba(255, 255, 255, 0.62);
  padding: calc(0.2vw + 4.4px);
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .SongNumber {
    font-weight: 600;
    font-size: calc(0.4vw + 11.6px);
    color: ${(props) => props.theme.colors.black};
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
      color: ${(props) => props.theme.colors.grey};
    }
  }
    .heart {
    margin-left: auto;
    padding: 0px 10px;
    font-size: calc(0.3vw + 16px);
    cursor: pointer;
    transition: transform 0.2s ease;
    
    &:hover {
      transform: scale(1.2);
    }
  }
`;

