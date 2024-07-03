import Image from "next/image";
import Section from "../Section";

const Manage = () => {
  return (
    <Section marginTop={true} classname="relative mx-auto ">
      <div className="bg-gradient-custom  flex items-center gap-4 overflow-hidden rounded-xl py-6 pl-4 md:gap-10 lg:gap-20 lg:pl-16 xl:gap-8 xl:pl-8">
        <Image
          src="/images/Manage1.png"
          alt="Manage1"
          width={300}
          height={193}
          className="ml-[-80px] lg:-ml-0 xl:w-[650px]"
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
          className="hidden md:flex "
        />
      </div>
    </Section>
  );
};

export default Manage;
