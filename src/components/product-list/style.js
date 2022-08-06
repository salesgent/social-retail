import styled from "styled-components";

export const ProductsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  overflow: hidden;
  scroll-behavior: smooth;
`;
export const ProductsHeader = styled.div`
  width: 100%;
  background: ${(props) => props.theme.palette.bg.secondary};
  display: grid;
  place-items: center;
  height: 119px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: black !important;
  }
  @media only screen and (max-width: 640px) {
    height: 80px;
    h2,
    h3 {
      font-size: 32px;
    }
  }
`;

export const NavHeader = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth.productslist};
  display: flex;
  font-family: "jost-fonts";
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0;
  font-size: 17px;
  color: black;
  font-weight: 400;
  text-transform: uppercase;
  flex-wrap: wrap;
  line-height: 150%;
  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
  span {
    color: #ef7922;
    margin: 0 0.6rem;
    display: grid;
    place-items: center;
  }
  @media only screen and (max-width: 1720px) {
    padding: 1rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
export const ProductsGrid = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1.4rem;
  max-width: ${(props) => props.theme.maxWidth.productslist};
  padding: 4rem 0;
  /* grid-column-gap: 1rem; */
  grid-row-gap: 76px;
  @media only screen and (max-width: 1462px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 946px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    padding-top: 0rem;
    grid-gap: 1rem;
  }
`;

export const ProductsNotFound = styled.div`
  width: 90%;
  height: 140px;
  display: grid;
  place-items: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 36px;
  margin: 3rem 0;
  margin-bottom: 25vh;
  background: #ef7922;
  color: white;
  @media only screen and (max-width: 946px) {
    height: 80px;
    font-size: 24px;
  }
`;
