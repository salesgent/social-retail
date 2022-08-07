import { Stack } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import Footer from "../footer/footer";
const FooterTop = dynamic(() => import("../footer/FooterTop/FooterTop"), {
  ssr: false,
});
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <Stack sx={{ width: "100%", overflow: "hidden" }} flexDirection="column">
      <Header />
      {children}
      <FooterTop />
      <Footer />
    </Stack>
  );
};

export default Layout;
