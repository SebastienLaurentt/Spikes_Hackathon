import { dela } from "@/lib/font";
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

  return (
    <Section marginTop={true}>
      <div className="flex w-full flex-col items-center text-center">
        <div className="bg-gradient-custom rounded-[45px] px-3 py-[5px] text-xs text-white">
          Introducing a new online selling platform 🎉
        </div>

        <div className="my-6 flex flex-col gap-y-4">
          <h1 className={`${dela}`}>Best way to sell your digital product </h1>
          <p className="text-[14px] md:text-sm">
            Go from Zero to Hero with simple platform that helps <br /> creators
            like you sell their digital products online.
          </p>
          <div className="mx-auto flex flex-row gap-x-2.5">
            <Input placeholder="Your best email address" className="bg-white" />
            <Button>Try it out</Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-2.5 md:flex-row md:gap-x-2.5">
          <AvatarCircles numPeople={100} avatarUrls={avatarUrls} />
          <div className="w-[250px] text-xs md:text-left">
            <span className=" font-semibold">More than 100+</span> users are
            selling their products online with simple & easy ways
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
