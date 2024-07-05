import { inter } from "@/lib/font";
import { Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SellIconWhite from "../public/images/SellIconWhite.svg";

const Header = () => {
  return (
    <header className="mx-auto px-6 pt-4 text-white md:px-16 md:pt-6 lg:px-24 xl:px-36 2xl:max-w-[1000px]">
      <div className="flex w-full flex-row justify-between rounded-lg bg-primary p-2.5 md:px-4">
        <div className="flex cursor-pointer flex-row items-center gap-x-1 md:gap-x-2">
          <Image src={SellIconWhite} alt="logo" className="size-4 md:size-6" />
          <span className="md:text-md">Sell</span>
        </div>
        <Link
          href="https://x.com/Seb_webdev"
          className="flex flex-row items-center gap-x-1 md:gap-x-2"
        >
          <Twitter className="size-4 md:size-6" fill="white" />
          <span className={`${inter}text-xs md:text-sm`}>
            Follow us on Twitter
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
