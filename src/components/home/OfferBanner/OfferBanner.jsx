import React from "react";

import { BannerBackground, BannerText } from "./OfferBanner.style";

const OfferBanner = ({ color }) => {
  return (
    <BannerBackground>
      <BannerText color={color}>
        100% Satisfaction Guaranteed | Free Shipping On Orders $40+
      </BannerText>
    </BannerBackground>
  );
};

export default OfferBanner;
