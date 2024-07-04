import { inter } from "@/lib/font";
import Image from "next/image";

const DataCard = () => {
  return (
    <div className="flex h-[193px] min-w-[302px] flex-col items-start justify-between rounded-xl bg-white p-4">
      <span className={`${inter} text-xl font-extrabold`}>$ 7,283</span>
      <Image
        src="/images/DataSvg.svg"
        alt="Store Image 1"
        width={268}
        height={50}
      />
    </div>
  );
};

export default DataCard;
