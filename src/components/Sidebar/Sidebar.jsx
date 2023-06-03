import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import s from "../Sidebar/Sidebar.module.scss";
import Logo from "../Logo/Logo";
import LogoNadik from "../../../public/logo_nadik.jpg";
import Image from "next/image";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  return (
    <div className={s.sidebar_block}>
      <button type="button" className={s.hamburger_btn} onClick={toggleSidebar}>
        <RxHamburgerMenu size={22} />
      </button>
      {toggle ? (
        <div>
          <div onClick={toggleSidebar} className={s.sidebar_backdrop}></div>
          <div className={s.sidebar}>
            <div className={s.sidebar_global}>
              <Image
                className={s.sidebar_logo_top}
                src={LogoNadik}
                alt="logo nadik"
                width={20}
                height={20}
              ></Image>
              <h3 className={s.sidebar_title}>Nadik</h3>
            </div>
            <p className={s.sidebar_desc}>Магазин доступного одягу</p>
            <button
              type="button"
              className={s.sidebar_btn_close}
              onClick={toggleSidebar}
            >
              <AiOutlineClose size={20} />
            </button>
            <ul>
              <li>Категорії</li>
              <li>Категорії</li>
            </ul>
            <div className={s.sidebar_logo}>
              <Logo />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;
