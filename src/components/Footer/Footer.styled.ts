import styled from "styled-components";

export const SFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.pureWhite};
  padding: calc(0.9vw + 6.9px);
  font-size: calc(0.6vw + 6px);

  .FooterTop {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: calc(0.6vw + 8px);
    margin-bottom: calc(0.9vw + 7.1px);

    h3 {
      width: calc(25.2vw + 148.1px);
      line-height: 1.5;
      font-size: calc(1vw + 8.7px);
      margin-bottom: calc(0.4vw + 6.8px);
    }
  }

  .FooterSocial {
    display: flex;
    gap: calc(0.4vw + 6.8px);
    font-size: calc(0.9vw + 9.1px);

    a {
      color: ${(props) => props.theme.colors.pureWhite};

      &:hover {
        color: ${(props) => props.theme.colors.lightYellow};
      }
    }
  }

  .LinksColumn {
    display: flex;
    flex-direction: column;
    gap: 2px;

    a {
      color: ${(props) => props.theme.colors.pureWhite};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .FooterBottom {
    border-top: 1px solid ${(props) => props.theme.colors.grey};
    padding: calc(0.8vw + 7.5px) 0px 0px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: calc(0.3vw + 7.2px);
  }
`;
