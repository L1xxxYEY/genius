import styled from "styled-components";

export const SFormButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  background-color: ${(props) => props.theme.colors.grey};
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.pureWhite};
  cursor: pointer;
`;
