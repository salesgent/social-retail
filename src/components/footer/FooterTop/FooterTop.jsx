import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { iconsData } from "./foooterTop.data";

const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  height: 18rem;
  background-color: ${(props) => props.theme.palette.bg.main};
`;
const Box = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth.home};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #b6b6b6;
  height: 100%;
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  h6 {
    font-size: 1.1rem;
    font-weight: 800;
    font-family: "Qanelas";
    text-transform: capitalize;
  }
`;
const FooterTop = () => {
  return (
    <Container>
      <Box>
        {iconsData.map((icon, i) => (
          <IconBox key={i}>
            <Image
              width={93}
              height={93}
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
