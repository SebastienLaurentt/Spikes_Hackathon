import Image from "next/image";
import SellIconBlack from "../public/images/SellIconBlack.png";

const Footer = () => {
  return (
    <footer className="mx-auto mb-2 mt-10 flex h-[37px] flex-row  items-center justify-between rounded-[10px] px-[15px]  py-[5px] text-black  md:mb-4">
      <div className="flex flex-row items-center gap-x-1">
        <Image src={SellIconBlack} alt="logo" className="size-4" />
        <span className="font-bold">Sell</span>
      </div>
      <ul className="flex flex-row items-center gap-x-1.5 text-xs  font-bold">
        <li>Home</li>
        <li>Agencies</li>
        <li>About</li>
        <li>My Shortlist</li>
      </ul>
    </footer>
  );
};

export default Footer;
