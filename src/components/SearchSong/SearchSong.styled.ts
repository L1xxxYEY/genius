import styled from "styled-components";

export const SSongSearch = styled.div`
  display: block;
  padding: 5px;
  margin-bottom: calc(1.9vw + 23.8px);

  .SearchInput {
    width: 100%;
    padding: calc(0.4vw + 3.6px) 12px;
    text-align: center;
    font-size: calc(0.3vw + 13px);
    border-radius: 20px;
    margin-bottom: calc(0.8vw + 7.5px);
    outline: none;
    background-color: rgb(238, 238, 238);
    color: rgb(0, 0, 0);
    border: 1px solid rgb(212, 212, 212);

    &::placeholder {
      color: ${(props) => props.theme.colors.lightGreySecod};
    }

    &:focus {
      border-color: rgb(58, 58, 58);
      background-color: rgb(215, 215, 215);
    }
  }

  .Results {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: calc(0.3vw + 4.2px);
  }

  .InfoText {
    color: ${(props) => props.theme.colors.lightGreySecod};
  }

  .SongCard {
    width: calc(12.6vw + 258.5px);
    background-color: rgb(233, 233, 233);
    padding: 5px;
    border-left: 3px solid rgb(0, 0, 0);
    font-size: calc(0.3vw + 10.2px);
    text-decoration: none;
    color: rgb(67, 67, 67);
    border-radius: 8px;
    transition: background 0.6s, transform 0.7s;

    &:hover {
      background-color: rgb(0, 0, 0);
      transform: translateX(10px);
      color: ${(props) => props.theme.colors.pureWhite};
    }

    h3 {
      font-size: calc(0.1vw + 12.6px);
      margin-bottom: calc(0.1vw + 2.6px);
      color: rgb(212, 192, 14);
    }
  }
`;
