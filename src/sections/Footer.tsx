import logo from "@/assets/logosaas.png";
import Image from "next/image";
import Social from "@/assets/social-x.svg";
import Insta from "@/assets/social-insta.svg";
import Linkdin from "@/assets/social-linkedin.svg";
import Pin from "@/assets/social-pin.svg";
import Youtube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#f8fbff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
          <Image src={logo} alt="logo" height={40} className="relative"/>
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row justify-center">
          <a href="#">About</a>
          <a href="#">Feature</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <Social />
          <Insta />
          <Linkdin />
          <Pin />
          <Youtube />
        </div>
        <p className="mt-6">&copy; 2024 your company, Inc All rights reserved.</p>
      </div>
    </footer>
  );
};
