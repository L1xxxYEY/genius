import styled from "styled-components";

export const SVideoBlock = styled.div`
  background-color: ${(props) => props.theme.colors.darkGray};
  color: ${(props) => props.theme.colors.pureWhite};
  padding: calc(2.5vw + 21.7px) calc(0.6vw + 8px);
  text-align: center;
  margin-bottom: calc(4.4vw + 35.5px);

  h2 {
    font-size: calc(3.1vw + 29.6px);
    font-weight: bold;
    letter-spacing: calc(0.4vw + 2.8px);
  }

  p {
    font-size: calc(0.4vw + 6.8px);
    color: ${(props) => props.theme.colors.lightYellow};
    margin-bottom: calc(1.9vw + 23.8px);
    letter-spacing: 1px;
  }

  .VideoWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: calc(1.9vw + 13.8px);
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: calc(1.9vw + 23.8px);
  }

  img {
    width: calc(50.3vw + 134px);
    object-fit: cover;
  }

  .VideoContent {
    border-top: 2px solid ${(props) => props.theme.colors.pureWhite};
    width: 280px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .label {
      margin-top: calc(0.4vw + 6.6px);
      width: calc(2.1vw + 91px);
      font-weight: 600;
      font-size: calc(0.4vw + 16.6px);
      background: ${(props) => props.theme.colors.pureWhite};
      color: ${(props) => props.theme.colors.black};
      display: inline-block;
      padding: 0px 2px;
      margin-bottom: calc(0.6vw + 8px);
      border-radius: 6px;
    }

    h3 {
      font-size: calc(0.4vw + 12.8px);
      width: calc(5vw + 143.4px);
      letter-spacing: 1px;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 10px;

      &:hover{
        text-decoration: underline;
        text-underline-offset: 4px;
        text-decoration-thickness: 0.8px;
      }
    }

    p {
      width: calc(8.8vw + 130.1px);
      font-size: calc(0.3vw + 12px);
      color: ${(props) => props.theme.colors.pureWhite};
      margin-bottom: calc(0.3vw + 4px);
    }

    .author {
      font-size: calc(0.3vw + 7.2px);
      color: ${(props) => props.theme.colors.pureWhite};
      letter-spacing: 0.5px;

      span {
        color: ${(props) => props.theme.colors.lightGreySecod};
      }
    }
  }

  button {
    background: ${(props) => props.theme.colors.darkGray};
    color: ${(props) => props.theme.colors.pureWhite};
    border: 1px solid ${(props) => props.theme.colors.pureWhite};
    padding: calc(0.3vw + 4px) calc(0.8vw + 9.5px);
    font-size: calc(0.3vw + 9px);
    cursor: pointer;
    margin-bottom: calc(0.8vw + 7.5px);
    transition: all 0.5s;

    &:hover {
      background-color: ${(props) => props.theme.colors.pureWhite};
      color: ${(props) => props.theme.colors.black};
    }
  }
`;
