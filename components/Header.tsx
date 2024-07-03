import { Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SellIconWhite from "../public/images/SellIconWhite.svg";

const Header = () => {
  return (
    <header className="mx-auto text-white md:pt-6 2xl:max-w-[1000px]">
      <div className="flex w-full flex-row justify-between rounded-lg bg-primary p-2 md:px-4">
        <div className="flex flex-row items-center gap-x-1">
          <Image src={SellIconWhite} alt="logo" className="size-4" />
          <span>Sell</span>
        </div>
        <Link
          href="https://x.com/Seb_webdev"
          className="flex flex-row items-center gap-x-1"
        >
          <Twitter size={16} fill="white" />
          <span className="text-xs">Follow us on Twitter</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
