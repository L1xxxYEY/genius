import styled from "styled-components";

export const SToast = styled.div`
  position: fixed;
  right: 50px;
  background: ${(props) => props.theme.colors.darkGray};
  color: ${(props) => props.theme.colors.pureWhite};
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  z-index: 1000;
  opacity: 0;
  animation: fadeInOut 2s forwards;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    10% {
      opacity: 1;
      transform: translateY(0);
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(20px);
    }
  }
`;
