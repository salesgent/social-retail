import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { iconsData } from "./foooterTop.data";

const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  min-height: 18rem;
  background-color: ${(props) => props.theme.palette.bg.main};
`;
const Box = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth.home};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #b6b6b6;
  height: 100%;
  @media only screen and (max-width: 840px) {
    padding-bottom: 2em;
  }
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  h6 {
    font-size: 1.565rem;
    letter-spacing: 0.05em;
    font-weight: 800;
    font-family: "Qanelas";
    text-transform: capitalize;
    @media only screen and (max-width: 840px) {
      font-size: 1.2rem;
    }
  }
`;
const FooterTop = () => {
  return (
    <Container>
      <Box>
        {iconsData.map((icon, i) => (
          <IconBox key={i}>
            <Image
              width={150}
              height={150}
              layout="fixed"
              src={icon.img}
              alt="icon"
            />
            <h6>{icon.name}</h6>
          </IconBox>
        ))}
      </Box>
    </Container>
  );
};

export default FooterTop;
