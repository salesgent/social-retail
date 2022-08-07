import styled from "styled-components";
import { motion } from "framer-motion";

export const BannerSection = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  margin-bottom: 6em;
  margin-top: 2em;
  overflow: hidden;
  @media only screen and (max-width: 640px) {
    margin-bottom: 1em;
  }
`;

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 1360px) {
    flex-direction: column;
  }
`;

export const BannerBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props) => props.placeItems || "flex-end"};
  height: 59.737rem;
  max-width: 100%;
  @media only screen and (max-width: 1360px) {
    width: 100%;
    height: auto;
    margin-bottom: 2em;
  }
`;

export const BannerImg = styled(motion.div)`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  height: 100%;

  color: white;

  padding: ${(props) => props.padding || "5.5em 3.5em"};

  padding-bottom: 0;
  position: relative;
  h3 {
    font-size: 3.25rem;
    font-weight: 700;
    z-index: 1;
  }
  P {
    font-size: 1.812rem;
    font-weight: 400;
    line-height: 3rem;
    margin: 1.5em 0;
    z-index: 1;
  }
  .bg {
    width: 100%;

    height: 80%;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    background: ${(props) => props.bg || props.theme.palette.bg.secondary};
  }
  @media only screen and (max-width: 1360px) {
    align-items: center;
    padding: 1em;
    max-width: 100%;
    .bg {
      height: 93%;
    }
  }
  @media only screen and (max-width: 640px) {
    h3 {
      font-size: 2.6rem;
    }
    p {
      font-size: 1.65rem;
    }
  }
`;

export const BannerButton = styled.button`
  width: ${(props) => props.width || "42rem"};
  height: 7.125rem;
  display: grid;
  place-items: center;
  font-weight: 700;
  color: ${(props) => props.theme.palette.colors.secondary};
  background-color: #ffc403;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 2.2rem;
  margin: 0 1rem;
  cursor: pointer;
  transition: all 0.4s;
  margin-top: 1em;
  &:hover {
    letter-spacing: 1px;
    opacity: 0.8;
  }
  @media only screen and (max-width: 1360px) {
    margin: 0 auto;
    width: 28.2rem;
    height: 5.6rem;
    font-size: 1.8rem;
  }
`;

export const ImgBox = styled(motion.div)`
  width: 52.6rem;
  max-width: 100%;
  min-height: 49rem;
  position: relative;
  margin-top: auto;
  /* margin-top: 6rem; */
  @media screen and (max-width: 996px) {
    width: 80%;
    aspect-ratio: 1;
    min-height: 0;
  }
  @media only screen and (max-width: 640px) {
    width: 100%;
  }
`;
