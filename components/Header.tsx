import { Twitter } from "lucide-react";
import Image from "next/image";
import SellIconWhite from "../public/images/SellIconWhite.svg";

const Header = () => {
  return (
    <header className="bg-primary mx-auto mt-10 flex h-[37px] w-[606px] flex-row items-center justify-between rounded-[10px] px-2.5 py-1.5 text-[14px] text-white">
      <div className="flex flex-row items-center gap-x-[5px]">
        <Image src={SellIconWhite} alt="logo" width={16.62} height={16} />
        <span>Sell</span>
      </div>
      <div className="flex flex-row items-center gap-x-[5px]">
        <Twitter size={16} fill="white" />
        <span className="text-[10px]">Follow us on Twitter</span>
      </div>
    </header>
  );
};

export default Header;
