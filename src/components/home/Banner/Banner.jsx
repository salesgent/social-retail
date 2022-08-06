import React from "react";
import Image from "next/image";
import {
  BannerBox,
  BannerButton,
  BannerContainer,
  BannerImg,
  BannerSection,
  ImgBox,
} from "./Banner.style";
import { HomeButton } from "../productsSlider/product.style";
import { Stack } from "@mui/material";

const Banner = () => {
  return (
    <BannerSection>
      <BannerContainer>
        <BannerBox>
          <BannerImg alignItems="flex-end">
            <div className="bg"></div>
            <ImgBox>
              <Image
                src="/images/home/banner-bg.png"
                alt="banner"
                layout="fill"
              />
            </ImgBox>
          </BannerImg>
          <BannerButton>Hookah under $1000/-</BannerButton>
        </BannerBox>
        <BannerBox placeItems="flex-start">
          <BannerImg bg={"#050505"}>
            <div className="bg"></div>
            <h3>First time on our website?</h3>
            <p>
              2+1 OFFER at Unbeatable Price <br />
              Try our services with any small order.
              <br />
              - Best Deal @ Best Price <br />- Quality Assured by shopdop
            </p>
            <HomeButton width="25.43rem">check deals</HomeButton>
          </BannerImg>
          <BannerButton>View our online retailers</BannerButton>
        </BannerBox>
        {/* <Stack
          flexDirection={"row"}
          justifyContent="center"
          alignItems={"center"}
        > */}

        {/* </Stack> */}
      </BannerContainer>
    </BannerSection>
  );
};

export default Banner;
