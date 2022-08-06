import { Stack } from "@mui/material";
import React from "react";
import Footer from "../footer/footer";
import FooterTop from "../footer/FooterTop/FooterTop";
import Header from "../Header/Header";


const Layout = ({ children }) => {

  return (
    <Stack sx={{ width: "100%" }} flexDirection="column">
      <Header/>
      {children}
      <FooterTop/>
      <Footer />
    </Stack>
  );
};

export default Layout;
