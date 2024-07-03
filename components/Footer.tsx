import Image from "next/image";
import SellIconBlack from "../public/images/SellIconBlack.png";

const Footer = () => {
  return (
    <footer className="mx-auto mb-2 mt-10 flex h-[37px] flex-row  items-center justify-between rounded-[10px] px-4 py-[5px]  text-black md:mb-4  md:px-6">
      <div className="flex flex-row items-center gap-x-1 md:gap-x-2">
        <Image src={SellIconBlack} alt="logo" className="size-4 md:size-6" />
        <span className="font-bold md:text-md">Sell</span>
      </div>
      <ul className="flex flex-row items-center gap-x-1.5 text-xs font-bold md:gap-x-2  md:text-sm">
        <li>Home</li>
        <li>Agencies</li>
        <li>About</li>
        <li>My Shortlist</li>
      </ul>
    </footer>
  );
};

export default Footer;
