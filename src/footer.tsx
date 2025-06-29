import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";

const Footer = () => {
  return (
    <footer className="px-[24px] lg:px-[80px] z-40 py-[32px] flex flex-col lg:flex-row gap-[42px] items-center justify-between w-full bg-white">
      <Link to="/" className="flex items-center gap-2.5 cursor-pointer">
        <img src={logo} alt="Propellent Logo" className="w-[50px] h-[50px]" />

        <h2 className="text-[22px] leading-[24.2px] tracking-[-0.6px] poppins-medium">
          Ikoniz
        </h2>
      </Link>

      <div className="w-full text-center sm:flex items-center justify-center gap-[5px] be-vietnam-pro-regular md:text-[14px] md:leading-[18.9px] md:tracking-[-0.28px] text-[16px] leading-[23.2px] tracking-[-0.32px]">
        <p>
          Design by
          <a
            href="https://twitter.com/AndreaMontini"
            target="_blank"
            className="underline text-[#878787] hover:text-black hover:no-underline transition-all cursor-pointer duration-300 ml-[5px]"
          >
            Ikoniz Limited
          </a>
        </p>
        <p>
          | Development by
          <a
            href="https://www.victorwilliams.me"
            target="_blank"
            className="underline text-[#878787] hover:text-black hover:no-underline transition-all cursor-pointer duration-300 mx-[5px]"
          >
            Ikoniz Web Dev Team
          </a>
          - Copyright 2025
        </p>
      </div>

      
    </footer>
  );
};

export default Footer;
