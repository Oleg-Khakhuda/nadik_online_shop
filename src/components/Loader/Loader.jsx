import Image from "next/image";
import LogoNadik from "../../../public/logo_nadik.jpg";
import s from "./Loader.module.scss";

const Loader = () => {
  return (
    <Image
      className={s.logo}
      src={LogoNadik}
      alt="logo nadik"
      width={150}
      height={150}
      priority={true}
    />
  );
};

export default Loader;
