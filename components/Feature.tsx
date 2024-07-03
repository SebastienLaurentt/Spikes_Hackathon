import Image from "next/image";
import Section from "./Section";

interface FeatureProps {
  image: string;
  featureName: string;
  featureDescription: string;
}

const Feature = ({ image, featureName, featureDescription }: FeatureProps) => {
  return (
    <Section classname="flex flex-col gap-y-[15px]">
      <Image src={image} alt="Manage1" width={50} height={50} />
      <h3>{featureName}</h3>
      <p className="text-xs font-medium leading-[17px]">{featureDescription}</p>
    </Section>
  );
};

export default Feature;
