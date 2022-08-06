import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Stack } from "@mui/material";
import styled from "styled-components";

const Container = styled(Stack)`
  width: 100%;
  height: 183px;
  background: ${(props) => props.theme.palette.bg.secondary};
  @media only screen and (max-width: 768px) {
    height: 130px;
  }
`;
const SwiperContainer = styled(Swiper)`
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 80px;
  max-width: 1200px;
`;
const BrandImg = styled.img`
  width: 100%;
  height: 69px;
  object-fit: cover;
  margin: auto;
`;
const BrandCarousel = () => {
  const Brands = [
    { img: "/images/brands/brand.png" },
    { img: "/images/brands/brand.png" },
    { img: "/images/brands/brand.png" },
    { img: "/images/brands/brand.png" },
    { img: "/images/brands/brand.png" },
    { img: "/images/brands/brand.png" },
    { img: "/images/brands/brand.png" },
    { img: "/images/brands/brand.png" },
    { img: "/images/brands/brand.png" },
  ];

  return (
    <Container direction="row" alignItems="center">
      <SwiperContainer
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          9: {
            slidesPerView: 1,
          },
          654: {
            slidesPerView: 1,
          },
          950: {
            slidesPerView: 1,
          },
        }}
        navigation={false}
      >
        {Brands.map((brand, i) => (
          <SwiperSlide
            key={i}
            style={{ display: "grid", placeItems: "center" }}
          >
            <BrandImg src={brand.img} />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </Container>
  );
};

export default BrandCarousel;
