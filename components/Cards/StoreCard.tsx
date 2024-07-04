import { inter } from "@/lib/font";
import Image from "next/image";

const StoreCard = () => {
  return (
    <div className="flex h-[193px] min-w-[302px] flex-col items-center justify-between rounded-xl bg-white p-4">
      <span className={`${inter} font-medium`}>Manage your store</span>
        <Image
          src="/images/StoreImg1.png"
          alt="Store Image 1"
          width={260}
          height={50}
        />
        <Image
          src="/images/StoreImg2.png"
          alt="Store Image 1"
          width={260}
          height={50}
        />
    </div>
  );
};

export default StoreCard;
