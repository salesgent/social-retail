import { Stack } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
///////
import { BodyText, H1 } from "../../utilities/theme/components";

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.palette.bg.main};
  width: 100vw;
  height: 100vh;
  padding: 0 1rem;
  overflow-y: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    /* background: black; */
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    /* background: ${(props) => props.theme.palette.bg.secondary}; */
    border-radius: 40px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
export const NavLinksBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  max-width: 1650px;
  margin: 0 auto;
  padding-top: 5%;

  @media only screen and (max-width: 968px) {
    flex-direction: column;
  }
  /* height: calc(100vh - 324px); */
`;
export const HeadingLinksBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 60vh;
  max-height: max-content;
  align-items: flex-start;
  @media only screen and (max-width: 968px) {
    width: 100%;
    align-items: center;
  }
`;
export const LinksBox = styled(motion.div)`
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-left: 4%;
  @media only screen and (max-width: 968px) {
    padding: 1rem 0;
    width: 100%;
  }
  @media only screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;
export const LinksText = styled(BodyText)`
  cursor: pointer;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-family: "jost-fonts";
  font-size: 1rem;
  text-align: left;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 748px) {
    margin: 0.5em 0;
    text-align: center;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 1650px;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding-bottom: 4rem;
  @media only screen and (max-width: 1168px) {
    justify-content: center;
    padding: 2rem 0;
  }
`;
export const BorderText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
  font-family: "jost-fonts";

  span {
    width: 60px;
  }
`;
export const MainLink = styled(H1)`
  color: ${(props) => props.color || "rgba(255, 255, 255, 0.6)"};
  text-align: left;
  cursor: pointer;
  transition: 0.9s;
  width: 100%;
  font-family: "jost-fonts";
  font-size: 2rem;
  margin: 0.6rem 0;
  &:hover {
    color: white;
  }
  @media only screen and (max-width: 1168px) {
    text-align: center;
    font-size: 1.8rem;
    margin: 0.3em 0;
    justify-self: flex-end;
  }
`;
export const Location = styled(Stack)`
  @media only screen and (max-width: 1168px) {
    display: none;
  }
`;

export const NavBodyText = styled(BodyText)`
  font-family: "jost-fonts";
  font-weight: ${(props) => props.fontWeight};
`;
