import Image from "next/image";

const MembersCard = () => {
  return (
    <div className="flex h-[193px] min-w-[302px] flex-col items-center justify-between rounded-xl bg-white p-4">
      <div className="flex flex-row items-start justify-between gap-x-4">
        <Image
          src="/images/MembersImg1.png"
          alt="Store Image 1"
          width={184}
          height={50}
        />
        <Image
          src="/images/MembersImg2.png"
          alt="Store Image 1"
          width={60}
          height={23}
          className="mt-4"
        />
      </div>
      <Image
        src="/images/MembersImg3.png"
        alt="Store Image 1"
        width={260}
        height={50}
      />
    </div>
  );
};

export default MembersCard;
