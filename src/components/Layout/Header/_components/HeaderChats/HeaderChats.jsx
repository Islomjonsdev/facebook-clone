import React from 'react';
import { CgMenuGridO } from "react-icons/cg";
import { BsMessenger } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import prifileImg from "../../../../../assets/png/profile.png"
import style from "./HeaderChats.module.scss"

const HeaderChats = () => {
  return (
    <ul className={style.headerChats}>
        <li>
            <CgMenuGridO />
        </li>
        <li>
            <BsMessenger />
        </li>
        <li>
            <IoNotifications />
        </li>
        <li>
            <img src={prifileImg} alt="" />
        </li>
    </ul>
  )
}

export default HeaderChats