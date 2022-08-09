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
  align-items: flex-start;
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
  margin-top: 1em;
  @media only screen and (max-width: 1168px) {
    width: 100%;
    margin-top: 0;
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

export const ProductDetailsTitle = styled.span`
  font-size: 2.125rem;
  color: black;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
    margin-top: 1em;
  }
`;

export const ProductDetailedName = styled.h3`
  width: 17ch;
  text-transform: capitalize;
  font-size: 4.68rem;
  font-weight: 700;
  line-height: 4.98rem;
  word-break: break-word;
  margin: 0.4em 0;
  max-width: 100%;

  @media only screen and (max-width: 1168px) {
    max-width: 90%;
  }
  @media only screen and (max-width: 768px) {
    font-size: 2.45rem;
    line-height: 3rem;
    max-width: 100%;
  }
`;
export const RatingBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  .text {
    font-size: 0.9rem;
    color: ${(props) => props.theme.palette.colors.other};
    font-weight: 400;
    margin-right: 1em;
  }
  p {
    color: #4d4c4c;
    font-size: 1.375rem;
    line-height: 1.5rem;
    letter-spacing: 2%;
    margin-left: 0.6em;
  }
`;
// export const ProductShortDescriptions = styled.p`
//   max-width: 340px;
//   font-size: 16px;
//   word-break: break-word;
//   font-weight: 300;
//   margin: 1rem 0;
//   letter-spacing: 0.03em;
//   line-height: 160%;
// `;
export const SkuTable = styled.div`
  font-size: 1.56rem;
  margin: 0.8em 0;
  b {
    font-weight: bold;
    margin-right: 0.5em;
    line-height: 1.5;
  }
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
    font-size: 2.5rem;
    color: #656363;
    text-decoration: line-through;
    font-weight: 500;
    margin-right: 0.6em;
  }
  h6 {
    font-size: 3.062rem;
    font-weight: 700;
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
    font-weight: 500;
    font-size: 1.563rem;
  }
  margin: 0.8em 0;
  .lightBlue,
  .lightGreen {
    width: 2.135em;
    height: 2.135em;
    border-radius: 0.8rem;
    background: #5e98c1;
    margin: 0 0.4em;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      transform: scale(1.1);
    }
    &:focus {
      border: 2px solid black;
    }
  }
  .lightGreen {
    background: #5ec192;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    /* align-items: ; */
    h6 {
      margin: 1em 0;
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
  button {
    padding: 0.92em 2.58em;
    margin-right: 2em;
    font-size: 1.56rem;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    button {
      padding: 0.9em 1.6em;
      font-size: 1.3rem;
    }
  }
`;

export const TabsContainer = styled(Row)`
  width: 100%;
  margin: 4em;
  color: black;
  border-color: black;
  margin-bottom: 0rem;
  .tab {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    min-width: max-content;
    text-transform: uppercase;
    padding: 0.8em 0;
    font-size: 1.437rem;
    transition: 0.4s;
    &:hover {
      background: #f6f6f6;
    }
    h6 {
      padding: 0 1.5em;
      font-size: 1.437rem;
      font-weight: 600;
      color: black;
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
    flex-direction: column;
    .tab h6 {
      font-size: 21px;
      font-weight: 500;
      text-align: center;
      margin: 0.5em 0;
      border: none !important;
    }
  }
`;

export const FullDescriptionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2em 1em;
  font-size: 25px;
  background: #f6f6f6;
  margin-bottom: 4em;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
