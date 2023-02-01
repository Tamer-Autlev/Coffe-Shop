import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = ({ onScrollHandler }) => {
  return (
    <>
      <NavBar onScrollHandler={onScrollHandler} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
