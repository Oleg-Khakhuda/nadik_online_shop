"use client";

import Logo from "../Logo/Logo";
import Sidebar from "../Sidebar/Sidebar";
import s from "../Header/Header.module.scss";

import ServicesBlock from "../Search/Search";
const Header = () => {
  return (
    <div className={s.header}>
      <Sidebar />
      <Logo />
      <ServicesBlock />
    </div>
  );
};

export default Header;
