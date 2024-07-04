"use client";

import { dela } from "@/lib/font";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Feature from "../Feature";
import Section from "../Section";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  useEffect(() => {
    // Animation GSAP
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-section",
        start: "top center+=400",
      },
    });
    tl.fromTo(
      "#features-element1",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8 }
    );
    tl.fromTo(
      "#features-element2",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3 },
     "<"
    );
    tl.fromTo(
      "#features-element3",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.1 },
      "<"
    );
    tl.fromTo(
      "#features-element4",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.1 },
      "<"
    );
    tl.fromTo(
      "#features-element5",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.1 },
      "<"
    );
    tl.fromTo(
      "#features-element6",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3 },
      "<"
    );

    // Clean up
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Section id="features-section" marginTop={true}>
      <div>
        <h2
          id="features-element1"
          className={`${dela} mb-8 w-full text-center opacity-0 xl:text-left`}
        >
          Features
        </h2>
        <div className="flex flex-row justify-between">
          <ul className="grid grid-cols-2  gap-y-8 xl:w-1/2">
            <li id="features-element2" className="opacity-0 xl:w-[259px]">
              <Feature
                featureName="Save time & Reduce cost"
                featureDescription="Building your own online store, shopping cart, checkout, and licensing is time-consuming"
                image="/images/FeatureMoney.svg" 
              />
            </li>
            <li id="features-element3" className="opacity-0 xl:w-[254px]">
              <Feature
                featureName="More features you need"
                featureDescription="We simplify all that by combining all of the features and solutions you need to sell"
                image="/images/FeatureBox.svg"
              />
            </li>
            <li id="features-element4" className="opacity-0 xl:w-[249px]">
              <Feature
                featureName="Sell your popular product more"
                featureDescription="Designed from the ground up to be easy to use and quick to set up for sellers"
                image="/images/FeatureHeart.svg"
              />
            </li>
            <li id="features-element5" className="opacity-0 xl:w-[274px]">
              <Feature
                featureName="Sell it across the Globe"
                featureDescription="Expand into new global markets with ease when you automatically display popular pricing"
                image="/images/FeatureGlobe.svg"
              />
            </li>
          </ul>
          <div
            id="features-element5"
            className="hidden opacity-0 xl:relative xl:flex xl:w-1/3"
          >
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
    </Section>
  );
};

export default Features;
