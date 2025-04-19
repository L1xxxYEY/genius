import styled from "styled-components";

export const SLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.pureWhite};

  h1 {
    font-size: 40px;
    margin-bottom: 15px;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 300px;
    margin-bottom: 20px;

    .link {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 10px;
      border-radius: 4px;
      color: ${(props) => props.theme.colors.pureWhite};
      text-decoration: none;
      cursor: pointer;
      font-weight: 600;

      i {
        font-size: 16px;
      }

      &.facebook {
        background-color: ${(props) => props.theme.colors.blue};
      }
      &.twitter {
        background-color: ${(props) => props.theme.colors.lightBlue};
      }
      &.google {
        background-color: ${(props) => props.theme.colors.red};
      }
    }
  }

  form {
    background-color: ${(props) => props.theme.colors.darkGray};
    padding: 20px;
    border-radius: 4px;
    width: 300px;
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 10px;
      font-size: 14px;
    }

    button {
      transition: background 0.3s;

      &:hover {
        background-color: ${(props) => props.theme.colors.lightGrey};
      }
    }
  }

  p {
    font-size: 14px;

    a {
      color: ${(props) => props.theme.colors.lightBlue};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
