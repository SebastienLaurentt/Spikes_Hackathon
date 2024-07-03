import Image from "next/image";
import Section from "../Section";

const Manage = () => {
  return (
    <Section marginTop={true} classname="relative mx-auto  w-[820px]">
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
    </Section>
  );
};

export default Manage;
