import styled from "styled-components";
import { Stack } from "@mui/material";
import { Swiper } from "swiper/react";

export const ProductsContainer = styled(Stack)`
  width: 100%;
  min-height: 931px;
  /* background: #222222; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  h6 {
    color: ${(props) => props.theme.palette.bg.secondary};
    font-size: 34px;
    font-weight: 400;
    margin-top: 80px;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.typography.h1.fontFamily};
  }
  @media only screen and (max-width: 748px) {
    min-height: 650px;
    h6 {
      margin-top: 20px;
    }
  }
`;
export const ProductSwiperContainer = styled(Swiper)`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  min-height: 480px;
  max-width: 1900px;
  margin: auto 0;
  @media only screen and (max-width: 748px) {
    margin: 1rem 0;
  }
  /* max-width: 290px;
  overflow: visible; */
`;
export const ProductsBrandImg = styled.img`
  width: 218px;
  height: 69px;
  object-fit: cover;
  margin: auto;
`;

export const ProductCard = styled.div`
  width: 271px;
  height: 422px;
  margin: 15px 0;
  border-radius: 30px;
  background-repeat: no-repeat;
  background-position: center;
  background: ${(props) =>
    props.backgroundColor ? `url(${props.backgroundColor})` : "green"};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  text-transform: uppercase;
  opacity: 0.6;
  transition: all 0.6s;
  background-size: cover;

  span {
    width: 100%;
    background: #89ad3b;
    color: #010101;
    font-size: 13px;
    font-weight: 400;
    height: 32px;
    display: grid;
    place-items: center;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 748px) {
    width: 241px;
    height: 322px;
  }
`;
export const ImageBox = styled.div`
  /* width={225}
                  height={330} */
  width: 225px;
  position: relative;
  height: 330px;
  @media only screen and (max-width: 748px) {
    width: 205px;
    height: 240px;
    margin-bottom: 1rem;
  }
`;

export const ProductName = styled.h4`
  font-family: ${(props) => props.theme.typography.h2.fontFamily};
  font-weight: 700;
  color: white;
  font-size: 26px;
  text-transform: uppercase;
`;

export const NavButton = styled.div`
  min-width: 57px;
  min-height: 57px;
  margin: ${(props) => props.margin};
  z-index: 2;
  border-radius: 50%;
  background: #89ad3b;
  cursor: pointer;
  display: grid;
  place-items: center;
  @media screen and (max-width: 768px) {
    margin: ${(props) => props.marginSmall};
  }
`;

export const HomeButton = styled.button`
  width: ${(props) => props.width || "37.18rem"};
  height: 5.68rem;
  display: grid;
  place-items: center;
  color: black;
  font-weight: bold;
  font-size: 1.875rem;
  border-radius: 3rem;
  background: ${(props) => props.theme.palette.bg.secondary};
  text-transform: uppercase;
  margin-bottom: 2em;
  transition: 0.4s;
  cursor: pointer;
  border: none;
  z-index: 1;
  &:hover {
    opacity: 0.8;
    letter-spacing: 1px;
  }
`;
