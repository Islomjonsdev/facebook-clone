import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import HeaderChats from "./_components/HeaderChats/HeaderChats";
import { IoIosSearch } from "react-icons/io";
import HeaderNavigation from "./_components/HeaderNavigation/HeaderNavigation";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.header__blog}>
          <div className={style.header__item}>
            <Link to={"/main"}>
              <FaFacebook className={style.facebook__icon}/>
            </Link>
            <input type="search" placeholder="Search facebook"/>
            <IoIosSearch className={style.search__icon}/>
          </div>
          <HeaderNavigation />
          <HeaderChats />
        </div>
      </div>
    </header>
  );
};

export default Header;
