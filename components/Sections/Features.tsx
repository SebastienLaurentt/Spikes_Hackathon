import { dela } from "@/lib/font";
import Image from "next/image";
import Feature from "../Feature";

const Features = () => {
  return (
    <div className="mx-auto mt-10 w-[820px]">
      <h2 className={`${dela} mb-8`}>Features</h2>
      <div className="flex flex-row">
        <ul className="grid w-2/3  grid-cols-2 gap-y-8">
          <li className="w-[259px]">
            <Feature
              featureName="Save time & Reduce cost"
              featureDescription="Building your own online store, shopping cart, checkout, and licensing is time-consuming"
              image="/images/FeatureMoney.png" // Exemple de chemin vers votre image
            />
          </li>
          <li className="w-[254px]">
            <Feature
              featureName="More features"
              featureDescription="We simplify all that by combining all of the features and solutions you need to sell"
              image="/images/FeatureBox.png"
            />
          </li>
          <li className="w-[249px]">
            <Feature
              featureName="Sell your popular product more"
              featureDescription="Designed from the ground up to be easy to use and quick to set up for sellers"
              image="/images/FeatureHeart.png"
            />
          </li>
          <li className="w-[274px]">
            <Feature
              featureName="Sell it across the Globe"
              featureDescription="Expand into new global markets with ease when you automatically display popular pricing"
              image="/images/FeatureGlobe.png"
            />
          </li>
        </ul>
        <div className="relative w-1/3">
          <Image
            src="/images/TryFreeImg.png"
            alt="Features"
            width={340}
            height={275}
            className="absolute"
          />
          <Image
            src="/images/Manage1.png"
            alt="Features"
            width={340}
            height={275}
            className="absolute bottom-0 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
