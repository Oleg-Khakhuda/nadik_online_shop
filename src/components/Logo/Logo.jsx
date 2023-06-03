import Image from "next/image";
import LogoNadik from "../../../public/logo_nadik.jpg";
import s from "../Logo/Logo.module.scss";
const Logo = () => {
  return (
    <Image
      className={s.logo}
      src={LogoNadik}
      alt="logo nadik"
      width={45}
      height={45}
      priority={true}
    />
  );
};

export default Logo;
