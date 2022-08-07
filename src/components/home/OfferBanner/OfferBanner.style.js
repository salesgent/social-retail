import styled from "styled-components";

export const BannerBackground = styled.div`
  width: 100%;
  height: 6.38rem;
  background: ${(props) => props.theme.palette.bg.secondary};
  display: grid;
  place-items: center;
  @media only screen and (max-width: 624px) {
    height: 4.58rem;
  }
`;

export const BannerText = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth.home};
  background: transparent;
  display: grid;
  place-items: center;
  color: ${(props) => props.color || props.theme.palette.colors.other};
  font-size: 2rem;
  height: 6.375rem;
  border-bottom: 2px solid #366551;
  font-weight: bold;
  font-family: "jost-fonts";
  text-align: center;
  @media only screen and (max-width: 786px) {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 624px) {
    font-size: 1.3rem;
    height: 4.58rem;
  }
`;
