import React from "react";
import styled from "styled-components";

const BannerBackground = styled.div`
  width: 100%;
  height: 6.38rem;
  background: ${(props) => props.theme.palette.bg.secondary};
  display: grid;
  place-items: center;
`;
const BannerText = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth.home};
  background: transparent;
  display: grid;
  place-items: center;
  color: ${(props) => props.color || props.theme.palette.colors.other};
  font-size: 2rem;
  height: 6.375rem;
  border-bottom: 1px solid #366551;
  font-weight: bold;
  font-family: "jost-fonts";
`;
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
