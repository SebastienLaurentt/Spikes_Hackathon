import { inter } from "@/lib/font";
import Image from "next/image";
import SellIconBlack from "../public/images/SellIconBlack.png";

const Footer = ({ id }: { id: string }) => {
  return (
    <footer
      id={id}
      className="mx-auto mb-2.5 mt-10 flex h-[37px] flex-row items-center justify-between rounded-[10px] px-4 py-[5px] text-black opacity-0 md:mb-4 md:mt-16 md:px-6 lg:mb-10 lg:mt-24 lg:px-10 xl:px-16 2xl:max-w-[1400px]"
    >
      <div className="flex cursor-pointer flex-row items-center gap-x-1 md:gap-x-2">
        <Image src={SellIconBlack} alt="logo" className="size-4 md:size-6" />
        <span className="font-bold md:text-md">Sell</span>
      </div>
      <ul
        className={`${inter} flex flex-row items-center gap-x-1.5 text-xs font-bold md:gap-x-2 md:text-sm lg:gap-x-4`}
      >
        <li>Home</li>
        <li>Agencies</li>
        <li>About</li>
        <li>My Shortlist</li>
      </ul>
    </footer>
  );
};

export default Footer;
