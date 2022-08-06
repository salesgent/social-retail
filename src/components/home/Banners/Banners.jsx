import React, { useRef } from "react";
import Image from "next/image";
// import { useInView } from "react-intersection-observer";

////////////////////////////////////////////////////////

import { bannersData } from "./bannersData";
import Banner from "./Banner/Banner";
import { Section } from "./Banner/Banner.styles";

const Banners = () => {

  return (
    <Section>
      {bannersData.map((banner, index) => (
        <Banner key={index} banner={banner} />
      ))}
    </Section>
  );
};

export default Banners;
