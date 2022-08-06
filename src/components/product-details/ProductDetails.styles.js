import styled from "styled-components";

export const ProductDetailsSection = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
`;
export const ProductDetailsContainer = styled.section`
  width: 100%;
  overflow: hidden;
  max-width: ${(props) => props.theme.maxWidth.productDetails};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  font-family: "jost-fonts";
`;

export const ProductView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;

  hr {
    border-top: 1px solid;
    width: 100%;
    margin-bottom: 2rem;
    max-width: 700px;
  }
  @media only screen and (max-width: 1168px) {
    flex-direction: column;
    padding-top: 2rem;
  }
`;
export const ProductImageContainer = styled.div`
  width: 40%;
  @media only screen and (max-width: 1168px) {
    width: 100%;
  }
`;

export const ProductDetailsBox = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;
  @media only screen and (max-width: 1168px) {
    width: 100%;
    min-width: 90%;
    padding: 0 5%;
  }
`;

export const ProductDetailedName = styled.h3`
  /* width: 100%; */
  width: 17ch;
  /* max-width: 450px; */
  text-transform: capitalize;
  font-size: 44px;
  font-weight: 700;
  /* font-family: "jost-fonts"; */
  line-height: 64px;
  word-break: break-word;
  margin: 1rem 0;

  @media only screen and (max-width: 1168px) {
    max-width: 90%;
  }
  @media only screen and (max-width: 768px) {
    font-size: 34px;
    max-width: 100%;
  }
`;
export const RatingBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  p {
    color: #4d4c4c;
    font-size: 19px;
    line-height: 15px;
    letter-spacing: 2%;
  }
`;
export const ProductShortDescriptions = styled.p`
  max-width: 340px;
  font-size: 16px;
  word-break: break-word;
  font-weight: 300;
  margin: 1rem 0;
  letter-spacing: 0.03em;
  line-height: 160%;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const CategorySelector = styled(Row)`
  width: 100%;

  margin: 1rem 0;

  h4 {
    font-size: 24px;
    font-weight: 700;
    margin-right: 0.8rem;
  }
  /* .flavour-select {
    min-width: 260px;
    max-width: 350px;
    border: 1px solid #d4cdcd;
    border-radius: 7px;
    height: 41px;
    padding: 0 0.5rem;
    background: white;
  } */
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    h4 {
      margin-bottom: 1rem;
    }
  }
`;
export const PriceBox = styled(Row)`
  align-items: flex-end;
  margin: 1rem 0;
  span {
    font-size: 40px;
    color: #656363;
    text-decoration: line-through;
    font-weight: 500;
  }
  h6 {
    font-size: 49px;
    color: #df363e;
    font-weight: 700;
    margin-left: 0.8rem;
  }
  @media only screen and (max-width: 768px) {
    span {
      font-size: 30px;
    }
    h6 {
      font-size: 39px;
    }
  }
`;

export const QuantitySection = styled(Row)`
  h6 {
    font-weight: 700;
    font-size: 24px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    /* align-items: ; */
    h6 {
      margin: 2rem 0;
    }
  }
  /* margin: 1rem 0; */
`;
export const QuantityBox = styled(Row)`
  justify-content: space-around;
  width: 170px;
  margin-left: 0.5rem;
  span {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-color: #a2dac2;
    color: #a2dac2;
    cursor: pointer;
    border: 1px solid;
    border-radius: 5px;
    transition: 0.4s;
    &:hover {
      color: grey;
    }
  }
  .qt {
    width: 50px;
    height: 50px;
    font-size: 31px;
    font-weight: 500;
    color: black;
    cursor: auto;
    border-color: #a2dac2;
    border-radius: 10px;
    &:hover {
      color: black;
    }
  }
`;

export const BtnsSection = styled(Row)`
  margin: 3rem 0;
  Button {
    display: grid;
    place-items: center;
    font-weight: 700;
    font-size: 25px;
    color: white;
    background: #ffc403;
    border-radius: 40px;
    height: 89px;
    width: 378px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      opacity: 0.8;
      letter-spacing: 1px;
    }
  }
  span {
    display: grid;
    place-items: center;
    font-size: 25px;
    border-radius: 50%;
    width: 65px;
    height: 65px;
    background: #ff2849;
    color: white;
    margin-left: 2rem;
    transition: 0.4s;
    &:hover {
      opacity: 0.7;
      cursor: pointer;
      font-size: 30px;
    }
  }
  @media (max-width: 768px) {
    button {
      width: 268px;
      border-radius: 30px;
      height: 65px;
    }
  }
`;

export const SkuBox = styled.div`
  font-size: 26px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: black;
  margin-bottom: 2rem;
  @media only screen and (max-width: 768px) {
    font-size: 23px;
  }
`;

export const TabsContainer = styled(Row)`
  width: 100%;
  margin: 1rem;
  color: black;
  border-color: black;
  margin-bottom: 2rem;
  .tab {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    cursor: pointer;
    min-width: max-content;
    h6 {
      font-size: 35px;
      font-weight: 400;
      transition: 0.4s;
      color: black;
      &:hover {
        color: #df363e;
      }
    }
    span {
      background: #df363e;
      width: 0;
      height: 4px;
      border-radius: 2px;
      transition: 0.4s;
    }
  }
  @media only screen and (max-width: 768px) {
    .tab h6 {
      font-size: 21px;
      font-weight: 500;
      text-align: center;
    }
  }
`;

export const FullDescriptionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: 25px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
