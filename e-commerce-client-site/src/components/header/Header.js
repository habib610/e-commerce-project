import { useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import ContactBar from "./contact/ContactBar";
import Navbar from "./Navigation/Navbar";
import Notice from "./notice/Notice";
import MySlider from "./slider/MySlider";
const Header = () => {
  const matches = useMediaQuery(useTheme().breakpoints.up("sm"));
  return (
    <header>
      <Notice />
      {matches && <ContactBar />}
      <Navbar />
      <MySlider />
    </header>
  );
};

export default Header;
