import styled from "styled-components";

export const SNewsFeature = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px calc(6.3vw - 0.76px);
  gap: calc(6.3vw + 19.3px);
  margin-bottom: 40px;

  .TextSection {
    flex: 1;
  }

  .Category {
    font-size: calc(0.3vw + 9.2px);
    font-weight: 580;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.black};
    border-bottom: 2px solid ${(props) => props.theme.colors.black};
    padding-bottom: calc(0.1vw + 1.6px);
    margin-bottom: calc(0.6vw + 8px);
  }

  .Title {
    font-size: calc(0.6vw + 24px);
    color: ${(props) => props.theme.colors.black};
    font-weight: 500;
    margin-bottom: calc(0.1vw + 13.6px);
  }

  .Description {
    font-size: calc(0.1vw + 13.6px);
    color: ${(props) => props.theme.colors.black};
    margin-bottom: calc(0.1vw + 13.6px);
  }

  .Author {
    font-size: calc(0.2vw + 9.4px);
    color: ${(props) => props.theme.colors.black};

    span {
      color: ${(props) => props.theme.colors.lightGreySecod};
    }
  }

  .ImageWrapper {
    flex: 1;
    img {
      width: calc(32.1vw + 194.2px);
      border: none;
    }
  }
`;
