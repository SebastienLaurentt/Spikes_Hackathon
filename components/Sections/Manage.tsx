import Image from "next/image";
import Section from "../Section";

const Manage = () => {
  return (
    <Section marginTop={true} classname="relative mx-auto">
      {/* Background shapes */}
      <div className="absolute inset-0 z-10 flex  items-center justify-center">
        <div className="size-[88%] -translate-y-8 rounded-[25px]  bg-white xl:-translate-y-12" />
      </div>
      <div className="absolute inset-0 z-0 flex  items-center justify-center ">
        <div className="size-[76%] -translate-y-16 rounded-[25px]  bg-white/80 md:size-4/5 md:-translate-y-14 xl:size-[84%] xl:-translate-y-20" />
      </div>
      <div className="absolute inset-0 z-0 flex  items-center justify-center ">
        <div className="size-[62%] -translate-y-24 rounded-[25px]  bg-white/60 md:size-[70%] md:-translate-y-20 xl:size-[79%] xl:-translate-y-28" />
      </div>
      {/* Main content */}
      <div className="bg-gradient-custom relative z-20 flex items-center gap-4 overflow-hidden rounded-[25px] py-6 pl-4 md:gap-10 lg:gap-20 lg:pl-16 xl:gap-8 xl:pl-8">
        <Image
          src="/images/Manage1.png"
          alt="Manage1"
          width={300}
          height={193}
          className="ml-[-80px] lg:ml-0 xl:w-[650px]"
        />
        <Image
          src="/images/Manage2.png"
          alt="Manage2"
          width={300}
          height={193}
          className="xl:w-[650px]"
        />
        <Image
          src="/images/Manage3.png"
          alt="Manage3"
          width={300}
          height={193}
          className="hidden md:flex"
        />
      </div>
    </Section>
  );
};

export default Manage;
