import Image from "next/image";
import SellIconBlack from "../public/images/SellIconBlack.png";

const Footer = () => {
  return (
    <footer className="mx-auto mt-10 flex h-[37px] w-[822px] flex-row items-center justify-between rounded-[10px]  px-[15px] py-[5px] text-[14px] text-black">
      <div className="flex flex-row items-center gap-x-[5px]">
        <Image src={SellIconBlack} alt="logo" width={16.62} height={16} />
        <span className="font-extrabold">Sell</span>
      </div>
      <ul className="flex flex-row items-center gap-x-[5px] text-[10px] font-bold">
        <li>Home</li>
        <li>Agencies</li>
        <li>About</li>
        <li>My Shortlist</li>
      </ul>
    </footer>
  );
};

export default Footer;
