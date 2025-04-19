import styled from "styled-components";

export const SNavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
  padding: 10px 20px;

  .NavLinks {
    display: flex;
    gap: calc(2.5vw + 11.7px);

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.pureWhite};
      font-weight: 550;
      letter-spacing: 1px;
      font-size: calc(0.7vw + 4.7px);
    }
  }
`;
