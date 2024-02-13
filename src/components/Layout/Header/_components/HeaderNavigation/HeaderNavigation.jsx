import React from 'react'
import { GoHome } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { TbBrandYoutube } from "react-icons/tb";
import { MdOutlineStorefront } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import style from "./HeaderNavigation.module.scss"

const HeaderNavigation = () => {
  return (
    <nav className={style.navbar}>
        <ul>
            <li>
                <Link to="/main/home">
                  <GoHome />
                </Link>
            </li>
            <li>
                <Link to="/main/friends">
                  <FiUsers />
                </Link>
            </li>
            <li>
                <Link to="/main/video">
                  <TbBrandYoutube />
                </Link>
            </li>
            <li>
                <Link to="/main/marketplace">
                  <MdOutlineStorefront />
                </Link>
            </li>
            <li>
                <Link to="/main/group">
                  <CgProfile />
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default HeaderNavigation