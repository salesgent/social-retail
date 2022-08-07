import React, { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
/////////
import {
  BannerBox,
  BannerButton,
  BannerContainer,
  BannerImg,
  BannerSection,
  ImgBox,
} from "./Banner.style";
import { HomeButton } from "../productsSlider/product.style";

const Banner = () => {
  const ref = useRef();
  const InView = useInView(ref, { amount: 0.5, once: true });
  return (
    <BannerSection>
      <BannerContainer>
        <BannerBox>
          <BannerImg
            alignItems="flex-end"
            ref={ref}
            initial={{ opacity: 0, x: -260 }}
            animate={InView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="bg"></div>
            <ImgBox
              initial={{ opacity: 0, x: -60 }}
              animate={InView ? { opacity: 1, x: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
                delay: 0.4,
              }}
            >
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
          <BannerImg
            bg={"#050505"}
            initial={{ opacity: 0, x: 260 }}
            animate={InView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="bg"></div>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={InView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
            >
              First time on our website?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 60 }}
              animate={InView ? { opacity: 1, x: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
                delay: 0.4,
              }}
            >
              2+1 OFFER at Unbeatable Price <br />
              Try our services with any small order.
              <br />
              - Best Deal @ Best Price <br />- Quality Assured by shopdop
            </motion.p>
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
