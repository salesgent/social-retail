import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { IoMdClose, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Router from "next/router";
import { motion } from "framer-motion";
////////////////////////////////////////////////////////////////
import {
  HeaderContainer,
  IconsContainer,
  LogoContainer,
  MenuIcon,
} from "./header.style";
import { useDatafetcher } from "../../utilities/hooks/useDatafetcher";
import { BodyText, FooterHeading, H1 } from "../../utilities/theme/components";
import Image from "next/image";
import { Stack } from "@mui/material";
import { MediaIcons } from "../footer/footer.styles";
import {
  BorderText,
  BottomContainer,
  HeadingLinksBox,
  LinksBox,
  LinksText,
  Location,
  MainLink,
  NavBodyText,
  NavContainer,
  NavLinksBox,
} from "./navbody.style";

const Navbody = ({ setOpen }) => {
  const { data, error } = useDatafetcher("/menu?businessTypeId=1");

  const [selectedLink, setSelectedLink] = useState(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (data) {
      data &&
        data?.map((item) => {
          if (item.subCategories.length > 0 && !selectedLink) {
            setSelectedLink(item);
          }
        });
    }
  }, [data]);
  useEffect(() => {
    setAnimated(true);
    () => {
      setAnimated(false);
    };
  }, []);

  return (
    <NavContainer>
      <HeaderContainer>
        <IconsContainer className="side-space"></IconsContainer>
        <LogoContainer>
          <Image
            src="/images/header/logo.png"
            alt="logo"
            // width={685}
            // height={194}
            layout="fill"
          />
        </LogoContainer>
        <IconsContainer>
          <MenuIcon onClick={() => setOpen(false)} marginLeft="auto">
            <IoMdClose />
          </MenuIcon>
        </IconsContainer>
      </HeaderContainer>
      <NavLinksBox>
        <HeadingLinksBox>
          {data?.map((category, i) => (
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: `.${i}`, ease: "easeInOut" }}
              key={i}
            >
              <MainLink
                variant="h6"
                onClick={() => {
                  if (category.subCategories.length > 0) {
                    setSelectedLink(category);
                  } else {
                    Router.push(
                      `/products/${category.alias}?id=${category.id}`
                    );
                    setOpen(false);
                  }
                }}
                color={
                  category.id === selectedLink?.id
                    ? "white"
                    : "rgba(255, 255, 255, 0.6)"
                }
              >
                {category.name}
              </MainLink>
            </motion.div>
          ))}
        </HeadingLinksBox>
        <LinksBox>
          {selectedLink?.subCategories?.map((link, i) => (
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: `.${i}`, ease: "easeInOut" }}
              key={i}
            >
              <Link
                href={{
                  pathname: `/products/${link.alias}`,
                  query: { id: link.id },
                }}
              >
                <LinksText
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  {link.name}
                </LinksText>
              </Link>
            </motion.div>
          ))}
        </LinksBox>
      </NavLinksBox>
      <BottomContainer>
        <Stack justifyContent="flex-start">
          <BorderText>
            <NavBodyText fontWeight="400">
              What are you looking for ?
            </NavBodyText>
            <IoIosArrowForward style={{ color: "white", marginLeft: "1rem" }} />
          </BorderText>
          <MediaIcons width={24} height={24} />
        </Stack>
        <Location justifyContent="flex-start">
          <NavBodyText>Locations</NavBodyText>
          <BorderText>
            <FooterHeading fontSize="46px" margin="0 0">
              arizona usa{" "}
            </FooterHeading>

            <span></span>
          </BorderText>
          <Stack justifyContent="space-around" flexDirection="row">
            <LinksText style={{ marginBottom: "0rem" }}>CONTACT US</LinksText>
            <LinksText style={{ marginBottom: "0rem" }}>FIND US</LinksText>
            <LinksText style={{ marginBottom: "0rem" }}>
              LET&apos;S TALK
            </LinksText>
          </Stack>
        </Location>
      </BottomContainer>
    </NavContainer>
  );
};

export default Navbody;
