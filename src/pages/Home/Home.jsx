import React from "react";
import { Outlet } from "react-router-dom";
import HomeHero from "./_components/HomeHero/HomeHero";
import SidebarHome from "./_components/SidebarHome/SidebarHome";
import style from "./Home.module.scss";

const Home = () => {
  return (
      <div className={style.container}>
        <div className={style.home__wrapper}>
          <SidebarHome />
          <HomeHero />
        </div>
      </div>
  );
};

export default Home;
