import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Badge, Drawer, Stack } from "@mui/material";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { useSelector } from "react-redux";

////////////////////////////////////////////////////////////////////////////
import Navbody from "./navbody";
import {
  HeaderContainer,
  HeaderLink,
  HeaderNav,
  HeaderSection,
  Icon,
  IconsContainer,
  LogoContainer,
  MenuIcon,
} from "./header.style";
import { useDatafetcher } from "../../utilities/hooks/useDatafetcher";

const Header = () => {
  const { data, error } = useDatafetcher("/menu?businessTypeId=1");
  const [nav, setNav] = useState(null);
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
  console.log({ data });
  // useEffect(() => {
  //   // if (data) {
  //   data &&   data.map((link, i) => {
  //       if (i < 6) {
  //         if (nav) {
  //           setNav( nav =>[...nav, link]);
  //         } else {
  //           setNav([nav]);
  //         }
  //       }
  //     });
  //   // }
  // }, [data]);
  // console.log({ nav });

  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderNav>
          {data &&
            data.map((category, i) => {
              console.log(i);
              if (i < 4) {
                return (
                  <HeaderLink key={i}>
                    {console.log({ i })}
                    {category?.name}
                  </HeaderLink>
                );
              }
            })}

          <HeaderLink>
            Distributors <BsChevronDown className="icon" />
          </HeaderLink>
        </HeaderNav>

        <LogoContainer>
          <Link href="/">
            <Image src="/images/header/logo.png" alt="logo" layout="fill" />
          </Link>
        </LogoContainer>
        <IconsContainer>
          <Link href="/login">
            <HeaderLink>Register or sign in</HeaderLink>
          </Link>
          <Icon margin="0 1rem">
            <Image
              src="/images/header/login-icon.png"
              alt="login"
              layout="fill"
            />
          </Icon>

          <Badge badgeContent={cartQt} color="secondary" showZero={true}>
            <Icon>
              <Image
                src="/images/header/cart-icon.png"
                alt="login"
                layout="fill"
              />
            </Icon>
          </Badge>
          <MenuIcon onClick={() => setOpen(true)} marginLeft=".4em">
            <Image
              src="/images/header/menu-icon.png"
              alt="login"
              width={103}
              height={103}
            />
          </MenuIcon>
        </IconsContainer>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
