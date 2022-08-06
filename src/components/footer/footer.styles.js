import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

//////
import { socialLinks } from "./footerData";
import { BodyText } from "../../utilities/theme/components";
import { Stack } from "@mui/material";

export const FooterSection = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.palette.bg.main};
  display: flex;
  display: grid;
  place-items: center;
  height: 616px;
  overflow: hidden;
  @media screen and (max-width: 1710px) {
    height: max-content;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;
export const FooterBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* max-width: 1650px; */
  margin: 0 auto;
  @media only screen and (max-width: 1320px) {
    flex-direction: column;
  }
`;
export const FooterContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth.home};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* max-width: 1650px; */
  margin: 0 auto;
  padding: 0;
  padding-bottom: 2rem;
  @media screen and (max-width: 768px) {
    max-width: 100vw;
  }
`;

export const SubscribeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 40%;
  min-width: 768px;
  @media screen and (max-width: 768px) {
    min-width: 100%;
  } ;
`;

export const SubscribeInput = styled.div`
  max-width: 621px;
  width: 100%;
  height: 75px;
  border-radius: 34px;
  background: white;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "josefin-sans";

  margin: 1rem 0;
  button {
    max-width: 314px;
    height: 100%;
    /* opacity: ${(props) => (props.active ? 1 : 0.7)}; */
    cursor: ${(props) => (props.active ? "pointer" : "not-allowed")};
    background-color: ${(props) => props.theme.palette.bg.secondary};
    width: 40%;
    color: #2a0f3f;
    font-weight: 800;
    font-size: 31px;
    border: none;
    text-transform: uppercase;
    font-family: "qanelas";
    letter-spacing: 1px;
  }
  input {
    background: transparent;
    font-size: 21px;
    font-weight: 400;
    color: #555555;
    width: 80%;
    max-width: 458px;
    height: 100%;
    border: none;
    padding-left: 1rem;
    font-family: "jost-fonts";

    &::placeholder {
      font-size: 21px;
      font-weight: 400;
      color: #555555;
      font-family: "jost-fonts";
    }
    &:focus,
    &:hover {
      outline: none;
    }
  }
  @media screen and (max-width: 768px) {
    height: 65px;
    button {
      font-size: 25px;
    }
    input {
      font-size: 20px;
      &::placeholder {
        font-size: 20px;
      }
    }
  }
  @media screen and (max-width: 568px) {
    height: 65px;
    button {
      font-size: 16px;
    }
    input {
      font-size: 16px;
      &::placeholder {
        font-size: 16px;
      }
    }
  }
`;
export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
  margin-left: auto;
  @media screen and (max-width: 1710px) {
    width: 35%;
    margin: 0 2rem;
  }
  @media only screen and (max-width: 1320px) {
    width: 100%;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
export const FooterLinksBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 180px;
  @media only screen and (max-width: 1320px) {
    margin: 2rem 0;
  }
`;
export const FooterText = styled(BodyText)`
  font-weight: 250;
  font-family: ${(props) => props.fontFamily || "Qanelas"};
  margin: ${(props) => props.margin};
`;

const LinkText = styled(FooterText)`
  text-transform: uppercase;
  font-weight: ${(props) => props?.fontWeight};
  font-family: "Qanelas";
  cursor: pointer;
  transition: 0.5s;
  margin-bottom: 0rem;
  &:hover {
    /* font-weight: ${(props) => (props.hover ? "600" : "800")}; */
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    margin: 0.3rem 0;
  }
`;

export const FooterLink = ({ children, url, fontWeight }, ...rest) => {
  if (url) {
    return (
      <Link href={url}>
        <LinkText {...rest} fontWeight={fontWeight}>
          {children}
        </LinkText>
      </Link>
    );
  } else {
    return (
      <LinkText {...rest} fontWeight={fontWeight}>
        {children}
      </LinkText>
    );
  }
};

export const IconsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1.2rem;
  margin-left: -1rem;
  @media screen and (max-width: 768px) {
    margin-left: -10px;
    margin-top: 1.4rem;
  }
`;

export const MediaIcons = ({ width, height }) => (
  <IconsBox>
    {socialLinks.map((icon, i) => (
      <Link key={i} href={icon.url}>
        <Image
          src={icon.imgUrl}
          alt={icon.url}
          width={width || 36}
          height={height || 36}
          layout="fixed"
        />
      </Link>
    ))}
  </IconsBox>
);
