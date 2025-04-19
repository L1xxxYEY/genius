import styled from "styled-components";

export const SRegistrationPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.pureWhite};

  h1 {
    font-size: 30px;
    margin-bottom: 25px;
  }

  form {
    background-color: ${(props) => props.theme.colors.darkGray};
    padding: 20px;
    border-radius: 4px;
    width: 300px;

    button {
      width: 100%;
      padding: 10px;
      background-color: ${(props) => props.theme.colors.grey};
      border: none;
      border-radius: 4px;
      color: ${(props) => props.theme.colors.pureWhite};
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background-color: ${(props) => props.theme.colors.lightGrey};
      }
    }
  }
`;
