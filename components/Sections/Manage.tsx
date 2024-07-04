"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import DataCard from "../Cards/DataCard";
import MembersCard from "../Cards/MembersCard";
import StoreCard from "../Cards/StoreCard";
import Section from "../Section";

gsap.registerPlugin(ScrollTrigger);

const Manage = () => {
  useEffect(() => {
    // Animation GSAP
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#manage-section",
        start: "top center+=350",
      },
    });
    tl.fromTo(
      "#manage-element1",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8 }
    );

    // Clean up
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Section id="manage-section" classname="relative mx-auto">
      {/* Background shapes */}
      <div id="manage-element1" className="opacity-0">
        <div className="absolute inset-0 z-20 flex  items-center justify-center">
          <div className="size-[88%] -translate-y-8 rounded-[25px] border border-slate-200  bg-white xl:-translate-y-12" />
        </div>
        <div className="absolute inset-0 z-10 flex  items-center justify-center ">
          <div className="size-[76%] -translate-y-16 rounded-[25px] border border-slate-200  bg-white/80 md:size-4/5 md:-translate-y-14 xl:size-[84%] xl:-translate-y-20" />
        </div>
        <div className="absolute inset-0 z-0 flex  items-center justify-center ">
          <div className="size-[62%] -translate-y-24 rounded-[25px] border border-slate-200  bg-white/60 md:size-[70%] md:-translate-y-20 xl:size-[79%] xl:-translate-y-28" />
        </div>

        {/* Main content */}
        <div className="bg-gradient-custom relative z-30 flex items-center gap-4 overflow-hidden rounded-[25px] py-6 pl-4 md:gap-6 lg:gap-12 xl:justify-around">
          <StoreCard />
          <MembersCard />
          <DataCard />
        </div>
      </div>
    </Section>
  );
};

export default Manage;
