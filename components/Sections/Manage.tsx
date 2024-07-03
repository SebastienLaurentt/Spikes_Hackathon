import Image from "next/image";

const Manage = () => {
  return (
    <div className="relative mx-auto mt-10 w-[820px]">
      <Image
        src="/images/ManageBg.png"
        alt="Manage"
        width={820}
        height={275}
        className="mx-auto"
      />
      <div className="absolute inset-0 left-10 flex items-center justify-center gap-10">
        <Image
          src="/images/Manage1.png"
          alt="Manage1"
          width={300}
          height={193}
        />
        <Image
          src="/images/Manage2.png"
          alt="Manage2"
          width={300}
          height={193}
        />
        <Image
          src="/images/Manage3.png"
          alt="Manage3"
          width={200}
          height={193}
        />
      </div>
    </div>
  );
};

export default Manage;
