"use client";

import { dela } from "@/lib/font";
import gsap from "gsap";
import { useEffect } from "react";
import Header from "../Header";
import Section from "../Section";
import AvatarCircles from "../ui/avatar-circles";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Hero = () => {
  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ];

  useEffect(() => {
    const screenWidth = window.innerWidth;
    // Hero Text Animation
    gsap.fromTo(
      "#hero-title",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      "#hero-description",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      "#hero-button",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      "#hero-socials",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      "#hero-introducing",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <Section
      classname="relative overflow-hidden 2xl:overflow-visible"
      marginBottom={true}
    >
      <Header />

      {/* Diffuse Circles */}
      <div className="absolute left-0 -z-20 size-[250px] rounded-full bg-[#FEA492] opacity-60 blur-[100px] md:left-10 md:top-[-60px] md:size-[400px] lg:left-20 lg:top-[-100px] lg:size-[600px]" />
      <div className="absolute right-0 -z-20 size-[250px] rounded-full bg-[#92C4FE] opacity-60 blur-[100px] md:right-10 md:top-[-60px] md:size-[400px] lg:right-20 lg:top-[-100px] lg:size-[600px]" />
      <div className="absolute bottom-0 left-1/2 z-30 size-[250px] -translate-x-1/2 rounded-full bg-[#AE92FE] opacity-40 blur-[100px] md:bottom-[-20px]  lg:bottom-[-50px] lg:right-1/3 lg:size-[400px]" />

      <div className="bg-custom-grid absolute inset-6 -z-10 size-full"></div>
      <div className="mb:mt-24 mt-20 flex w-full flex-col items-center text-center lg:mt-28">
        <div
          id="hero-introducing"
          className="bg-gradient-custom relative overflow-hidden rounded-[45px] px-3 py-[5px] text-xs text-white  opacity-0"
        >
          Introducing a new online selling platform 🎉
          <div className="shimmer-effect absolute inset-0"></div>
        </div>

        <div className="my-6 flex flex-col gap-y-4">
          <h1 id="hero-title" className={`${dela} opacity-0`}>
            Best way to sell your digital product{" "}
          </h1>
          <p
            id="hero-description"
            className="text-[14px] opacity-0 md:text-sm lg:text-md"
          >
            Go from Zero to Hero with simple platform that helps <br /> creators
            like you sell their digital products online.
          </p>
          <div
            id="hero-button"
            className="z-50 mx-auto flex flex-row gap-x-2.5 opacity-0"
          >
            <Input placeholder="Your best email address" className="bg-white" />
            <Button>Try it out</Button>
          </div>
        </div>

        <div
          id="hero-socials"
          className="flex flex-col items-center gap-y-2.5 opacity-0 md:flex-row md:gap-x-2.5"
        >
          <AvatarCircles numPeople={100} avatarUrls={avatarUrls} />
          <div className="w-[250px] text-xs md:text-left lg:w-[320px] lg:text-sm">
            <span className=" font-semibold">More than 100+</span> users are
            selling their products online with simple & easy ways
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
