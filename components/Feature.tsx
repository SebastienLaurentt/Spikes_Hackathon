import Image from "next/image";

interface FeatureProps {
  image: string;
  featureName: string;
  featureDescription: string;
}

const Feature = ({ image, featureName, featureDescription }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <Image
        src={image}
        alt="Manage1"
        width={50}
        height={50}
        className="mb-2"
      />
      <h3 className="mb-1 text-balance">{featureName}</h3>
      <p className="text-balance text-xs font-medium leading-[17px] md:text-sm">
        {featureDescription}
      </p>
    </div>
  );
};

export default Feature;
