import { Stack } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
/////////////////////
import { FooterHeading } from "../../utilities/theme/components";
import {
  FooterBox,
  FooterContainer,
  FooterLink,
  FooterLinksBox,
  FooterLinksContainer,
  FooterSection,
  FooterText,
  MediaIcons,
  SubscribeContainer,
  SubscribeInput,
} from "./footer.styles";
import { links1, links2 } from "./footerData";

const Footer = () => {
  const [email, setemail] = useState("");
  return (
    <FooterSection>
      <FooterContainer>
        <FooterBox>
          <SubscribeContainer
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          >
            <FooterText margin="0" fontSize="31px">
              SUBSCRIBE TO OUR
            </FooterText>
            <FooterHeading
              fontFamily="Qanelas"
              fontSize="47px"
              fontSizesm="32px"
              margin="0 0  .5rem 0"
            >
              newsletter
            </FooterHeading>
            <SubscribeInput active={email.length > 4}>
              <input
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="text"
                placeholder="Your email address"
              />
              <button>subscribe</button>
            </SubscribeInput>
          </SubscribeContainer>
          <FooterLinksContainer>
            <FooterLinksBox
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            >
              <FooterHeading fontFamily="Qanelas">shop</FooterHeading>
              {links1.map((link, i) => (
                <FooterLink margin="0" key={i} url={link.url}>
                  {link.alias}
                </FooterLink>
              ))}
            </FooterLinksBox>
            <FooterLinksBox
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeInOut" }}
            >
              <FooterHeading fontFamily="Qanelas">get inspired</FooterHeading>
              {links2.map((link, i) => (
                <FooterLink key={i} url={link.url} margin="0.5rem 0">
                  {link.alias}
                </FooterLink>
              ))}
            </FooterLinksBox>
            <FooterLinksBox
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeInOut" }}
            >
              <FooterHeading fontFamily="Qanelas">Follow us</FooterHeading>

              <FooterText marginBottom="0rem">SALES INQUIRY</FooterText>
              <FooterLink url={"/"} fontWeight="800">
                sales@flyingmonkeyusa.com
              </FooterLink>
              <FooterText marginBottom="0rem">CUSTOMER SUPPORT</FooterText>
              <FooterLink url={"/"} fontWeight="800">
                support@flyingmonkeyusa.com
              </FooterLink>
              <MediaIcons />
            </FooterLinksBox>
          </FooterLinksContainer>
        </FooterBox>
        <FooterText
          fontFamily="Poppins"
          margin="-.8rem 0 0 0"
          fontSize="18px"
          marginBottom="0rem"
        >
          Privacy & Cookies | Terms & Conditions
        </FooterText>
        <FooterText fontFamily="Poppins" margin="0" fontSize="18px">
          Products on this site contain a value of 0.3% or less Δ9THC (or no
          more than 0.3% Δ9THC).
        </FooterText>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
