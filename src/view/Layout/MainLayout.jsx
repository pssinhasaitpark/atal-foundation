import React from "react";
import { Header2, Footer } from "../components/index";
import { Outlet } from "react-router";
const MainLayout = () => {
  return (
    <>
      <Header2 />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
