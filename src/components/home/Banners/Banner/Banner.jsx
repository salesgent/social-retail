import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
// import { useInView } from "react-intersection-observer";
import { animationControls, useInView } from "framer-motion";
import { useAnimation } from "framer-motion";
////////
import {
  Section,
  Box,
  BgText,
  Imgsection,
  ContentBox,
  LearnMore,
} from "./Banner.styles";
// import { BodyText, H1 } from "../../../utilities/theme/components";
import { motion } from "framer-motion";
import { BodyText, H1 } from "../../../../utilities/theme/components";
const Banner = ({ banner }) => {
  // const { ref, inView, entry } = useInView();
  const [animationObj, setAnimationObj] = useState({
    bgText: {},
    Imgsection: {},
    ContentBox: {},
    H1: {},
    btn: {},
  });

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const animate = useAnimation();
  // console.log(inView);
  useEffect(() => {
    if (inView) {
      setAnimationObj({
        bgText: { opacity: 1, y: 0 },
        Imgsection: { opacity: 1, x: 0 },
        ContentBox: { opacity: 1, x: 0 },
        H1: { opacity: 1, y: 0 },
        btn: { opacity: 1, x: 0 },
      });
      // animate.start();
    } else {
      // animate.stop();
    }
  }, [inView]);

  return (
    <Box reverse={banner?.reverse} background={banner?.background}>
      <BgText
        color={banner?.bgText}
        initial={{ opacity: 0, y: -10 }}
        animate={animationObj.bgText}
        transition={{ duration: 0.5, delay: 0.95 }}
      >
        {banner.heading}
      </BgText>
      <Imgsection
        initial={{ opacity: 0, x: banner?.reverse ? 150 : -150 }}
        animate={animationObj.Imgsection}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image src={banner.img} alt={banner.heading} layout="fill" />
      </Imgsection>
      <ContentBox
        initial={{ opacity: 0, x: -60 }}
        animate={animationObj.ContentBox}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={animationObj.H1}
          transition={{ duration: 0.6, delay: .6, ease: "easeInOut" }}
        >
          <H1 fontFamily="Poppins" variant="h3">
            {banner.heading}
          </H1>
        </motion.div>
        <BodyText ref={ref}>{banner.text}</BodyText>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={animationObj.btn}
          transition={{ duration: 0.6, delay: .7, ease: "easeInOut" }}
        >
          <LearnMore variant="outlined">
            Learn more{" "}
            <Image
              src="/images/banners/button/icon.png"
              alt="learn more"
              width={24}
              height={24}
            />
          </LearnMore>
        </motion.div>
      </ContentBox>
    </Box>
  );
};

export default Banner;
