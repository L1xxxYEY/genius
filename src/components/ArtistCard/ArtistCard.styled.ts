// import styled from "styled-components";

// export const SArtistCard = styled.div`
//   background-color: rgb(231, 231, 231);
//   border-radius: 10px;
//   width: 300px;
//   padding: 5px 5px 20px;
//   text-align: center;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.48);
//   transition: transform 0.5s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
//   }

//   .ArtistImage {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//     border-radius: 10px;
//     margin-bottom: 5px;
//   }

//   .ArtistName {
//     font-size: 18px;
//     font-weight: 600;
//     color: ${(props) => props.theme.colors.black};
//     letter-spacing: 1px;
//     margin-bottom: 8px;
//   }

//   .ArtistText {
//     color: rgba(134, 134, 134, 0.46);
//     text-decoration: none;
//     font-weight: 600;

//     &:hover {
//       text-decoration: underline;
//       color: rgba(84, 84, 84, 0.59);
//     }
//   }
// `;


import styled from "styled-components";

export const SArtistCard = styled.div`
  background-color: rgb(231, 231, 231);
  border-radius: 10px;
  width: calc(3.8vw + 227.6px);
  padding: 5px 5px calc(0.6vw + 8px);
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.48);
  transition: transform 0.5s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }

  .ArtistImage {
    width: 100%;
    height: calc(3.8vw + 227.6px);
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 5px;
  }

  .ArtistName {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.black};
    letter-spacing: 1px;
    margin-bottom: 8px;
  }

  .ArtistText {
    color: rgba(134, 134, 134, 0.46);
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
      color: rgba(84, 84, 84, 0.59);
    }
  }
`;