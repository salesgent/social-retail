import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const ProductCardContainer = styled(motion.div)`
  width: 298px;
  height: 458px;
  border-radius: 45px;
  background: transparent;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  padding: 0 1rem;
  margin: auto;
  font-family: "jost-fonts";
  background: ${(props) =>
    props.background
      ? `url(${props.background})`
      : ' url("/images/product-list/bg-1.png")'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-position-y: 20px;
  transition: 0.8s;
  opacity: 0.4;
  @media only screen and (max-width: 768px) {
    width: 278px;
    height: 425px;
    max-width: 90%;
  }
  &:hover {
    opacity: 1 !important;
    transform: scale(1.2);
  }
`;
export const ImageBox = styled.div`
  height: 489px;
  width: 225px;
  max-width: 100%;
  max-height: 60%;
  position: relative;
  display: grid;
  place-items: center;
`;
export const Tagbox = styled.div`
  background: #6dbd45;
  border-radius: 26px;
  width: 186px;
  height: 34px;
  color: white;
  font-size: 14px;
  min-height: 34px;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0.1rem 1rem;
  line-height: 34px;
  font-weight: 600;
  letter-spacing: 1px;
  word-wrap: break-word;
  box-sizing: border-box;
  z-index: 1;
  overflow: hidden;
  text-overflow: hidden;
  text-align: center;
  margin-top: 1rem;
  /* @media only screen and (max-width: 768px) {
    max-width: 100%;
    max-height: 40px;
    min-height: 40px;
    min-width: 80%;
    font-size: 18px;
    line-height: 40px;
    /* align-items: center; 
  } */
`;
export const ProductPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.typography.h2.fontFamily};
  z-index: 1;
  padding: 1rem 0;
  span {
    font-size: 20px;
    text-decoration: line-through;
    color: #ddd9d9;
    font-weight: 500;
    margin-right: 0.5rem;
  }
  p {
    font-size: ${(props) => props.fontSize || "37px"};
    font-weight: 600;
    color: white;
  }
  /* @media only screen and (max-width: 768px) {
    span {
      font-size: 16px;
    }
    P {
      font-size: 20px;
      margin-left: 0.5rem;
    }
  } */
`;
export const RatingBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: white;
  margin: 0.5rem 0;
  transition: 0.5s;
  margin-bottom: 1rem;
  overflow: hidden;
  min-height: 15px;
  p {
    margin-left: 0.5rem;
  }
`;
export const BottomBtns = styled.div`
  width: 90%;
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || "center"};
  z-index: 1;
  color: white;
  border-top: 1px solid white;
  font-size: 19px;
  transition: all 0.4s;
  p {
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    margin: 0 0.15rem;
    text-transform: uppercase;
    transition: 0.4s;
  }
  button {
    background: transparent;
    border: 1px solid white;
    text-transform: uppercase;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    width: 50%;
    height: 32px;
    max-width: 160px;
    margin: 0 0.3rem;
    cursor: pointer;
    p {
      font-size: 12px;
      font-weight: 500;
    }
    &:hover {
      p {
        letter-spacing: 1px;
      }
      opacity: 0.8;
    }
  }
  /* @media only screen and (max-width: 768px) {
    padding: 0.5rem 0;
    p {
      font-size: 16px;
    }
  } */
`;
const blur = keyframes`
from {
  filter:blur(25px);
} 
to {
  filter:blur(5px);
}
`;
export const ProductCardSkeleton = styled(ProductCardContainer)`
  animation: ${blur} 4s linear infinite;
`;
