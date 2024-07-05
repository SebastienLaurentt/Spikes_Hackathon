"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import DataCard from "../Cards/DataCard";
import MembersCard from "../Cards/MembersCard";
import StoreCard from "../Cards/StoreCard";
import Section from "../Section";

gsap.registerPlugin(ScrollTrigger);

const Manage = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Section id="manage-section" classname="relative mx-auto">
      {/* Background shapes */}
      <div id="manage-element1" className="opacity-0">
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="size-[88%] -translate-y-8 rounded-[25px] border border-slate-200 bg-white xl:size-[96%] xl:-translate-y-6" />
        </div>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="size-[76%] -translate-y-16 rounded-[25px] border border-slate-100 bg-white/60 md:size-4/5 md:-translate-y-14 xl:size-[92%] xl:-translate-y-12" />
        </div>
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="size-[62%] -translate-y-24 rounded-[25px] border border-slate-100 bg-white/40 md:size-[70%] md:-translate-y-20 xl:size-[88%] xl:translate-y-[-72px]" />
        </div>

        {/* Main content */}
        <div className="bg-gradient-custom relative z-30 flex items-center  overflow-hidden rounded-[25px] py-6 shadow-xl md:justify-around">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="mx-4 flex space-x-4 md:mx-6 md:space-x-6 lg:mx-0 lg:space-x-10">
              <div className="w-80 shrink-0">
                <StoreCard />
              </div>
              <div className="w-80 shrink-0">
                <MembersCard />
              </div>
              <div className="w-80 shrink-0">
                <DataCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Manage;
