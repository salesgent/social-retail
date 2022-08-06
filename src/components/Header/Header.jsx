import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Badge, Drawer } from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";
////////////////////////////////////////////////////////////////////////////
import Navbody from "./navbody";
import {
  HeaderContainer,
  Icon,
  IconsContainer,
  LogoContainer,
  MenuIcon,
} from "./header.style";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [cartQt, setCartQt] = useState(0);
  const localCartData = useSelector((state) => state.cart.localCartData);
  useEffect(() => {
    if (
      localCartData.totalCartQuantity &&
      localCartData.totalCartQuantity > 0
    ) {
      setCartQt(localCartData?.totalCartQuantity);
    }
  }, [localCartData]);

  return (
    <HeaderContainer>
      <IconsContainer className="side-space"></IconsContainer>
      <LogoContainer>
        <Link href="/">
          <Image src="/images/header/logo.png" alt="logo" layout="fill" />
        </Link>
      </LogoContainer>
      <IconsContainer>
        <Icon>
          <Image
            src="/images/header/login-icon.png"
            alt="login"
            layout="fill"
          />
        </Icon>

        <Badge badgeContent={cartQt} color="secondary">
          <Icon>
            <Image
              src="/images/header/cart-icon.png"
              alt="login"
              layout="fill"
            />
          </Icon>
        </Badge>
        <MenuIcon onClick={() => setOpen(true)}>
          <Image
            src="/images/header/menu-icon.png"
            alt="login"
            width={103}
            height={103}
          />
        </MenuIcon>
      </IconsContainer>
      <Drawer open={open}>
        <Navbody setOpen={setOpen} />
      </Drawer>
    </HeaderContainer>
  );
};

export default Header;
