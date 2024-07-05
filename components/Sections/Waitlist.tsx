"use client";

import { dela } from "@/lib/font";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Footer from "../Footer";
import Section from "../Section";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

gsap.registerPlugin(ScrollTrigger);

const Waitlist = () => {
  useEffect(() => {
    // Animation GSAP
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#waitlist-section",
        start: "top center+=250",
      },
    });
    tl.fromTo(
      "#waitlist-element1",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.4 }
    );
    tl.fromTo(
      "#waitlist-element2",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.1 },
      "<"
    );

    // Clean up
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Section id="waitlist-section" marginTop={true}>
      <div
        id="waitlist-element1"
        className="mx-auto flex flex-col justify-center gap-y-4 rounded-[25px] bg-white px-4  py-6 opacity-0 md:py-8 lg:gap-y-6 lg:py-12"
      >
        <h2 className={`${dela} mx-auto text-center xl:w-[822px]`}>
          Be the first to know about new features, special offers, and more.
        </h2>
        <form className="mx-auto flex flex-row gap-x-2.5 xl:w-[414px]">
          <Input
            aria-label="Enter Email"
            placeholder="Your best email address"
          />
          <Button aria-label="Try Sell">Join waitlist</Button>
        </form>
      </div>
      <Footer id="waitlist-element2" />
    </Section>
  );
};

export default Waitlist;
