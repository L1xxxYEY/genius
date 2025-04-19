import styled from "styled-components";

export const SNewsCard = styled.div`
  width: 300px;
  padding: 30px;
  border-right: 2px solid ${(props) => props.theme.colors.black};

  &:last-child {
    border-right: none;
    @media (max-width: 700px) {
      border-right: 2px solid ${(props) => props.theme.colors.black};
    }
  }

  h1 {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 13px;
  }

  .Artist {
    font-size: calc(0.6vw + 12.1px);
    color: ${(props) => props.theme.colors.black};
    font-weight: 500;
    margin-bottom: calc(2.8vw + 35.7px);

    &:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
      text-decoration-thickness: 0.8px;
    }
  }

  p {
    font-size: calc(0.1vw + 9.6px);
    color: ${(props) => props.theme.colors.black};
    margin-bottom: calc(0.3vw + 5.2px);
  }

  span {
    color: ${(props) => props.theme.colors.lightGreySecod};
  }

  .Image {
    width: 220px;
    height: 130px;
    object-fit: cover;
    border: none;
  }
`;
