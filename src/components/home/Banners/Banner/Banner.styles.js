import { Button } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  position: relative;
  justify-content: center;
  align-items: center;
  height: 901px;
  background: ${(props) => props.background || "#E42A82"};
  padding-top: 10%;
  @media screen and (max-width: 1168px) {
    flex-direction: column;
    height: 899px;
    padding-bottom: 1rem;
  }
`;
export const BgText = styled(motion.h3)`
  font-family: ${(props) => props.theme.typography.h2.fontFamily};
  font-size: 312px;
  font-weight: 700;
  letter-spacing: -3%;
  color: ${(props) => props.color || "#fa55a3"};
  position: absolute;
  top: 68px;
  text-transform: capitalize;
  @media screen and (max-width: 1168px) {
    font-size: 26vw;
    max-width: 100vw;
    word-wrap: break-word;
    text-align: center;
  }
`;

export const Imgsection = styled(motion.div)`
  width: 50%;
  max-width: 799px;
  max-height: 786px;
  height: 100%;
  position: relative;
  @media screen and (max-width: 1168px) {
    width: 40%;
    height: 50%;
    max-width: 670px;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    height: 50%;
    max-width: 670px;
  }
  @media screen and (max-width: 540px) {
    width: 100%;
    height: 45%;
  }
`;

export const ContentBox = styled(motion.div)`
  max-width: min(762px, 40%);
  z-index: 2;
  margin: 1rem;
  margin-bottom: -1rem;
  h3 {
    text-transform: capitalize;
  }
  p {
    margin: 3rem 0;
    margin-top: 1rem;
  }
  @media screen and (max-width: 1168px) {
    max-width: min(650px, 90%);
  }
`;

export const LearnMore = styled(Button)`
  width: 237px;
  height: 57px;
  color: ${(props) => props.theme.palette.colors.main};
  border-color: ${(props) => props.theme.palette.colors.main};
  border-radius: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  margin-top: 1.5rem;
  transition: 0.6s;
  &:hover {
    color: ${(props) => props.theme.palette.colors.main};
    border-color: ${(props) => props.theme.palette.colors.main};
    letter-spacing: 2px;
  }
`;

