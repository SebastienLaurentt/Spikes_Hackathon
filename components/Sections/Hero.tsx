import { dela } from "@/lib/font";
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
    <div className="mx-auto mt-10 flex w-full flex-col items-center text-center">
      <div className="bg-gradient-custom rounded-[45px] px-3 py-[5px] text-[10px] text-white">
        Introducing a new online selling platform 🎉
      </div>
      <h1 className={`${dela} mb-5 mt-10`}>
        Best way to sell your digital product{" "}
      </h1>
      <p className="mb-5">
        Go from Zero to Hero with simple platform that helps <br /> creators
        like you sell their digital products online.
      </p>
      <div className="mx-auto flex w-[414px] flex-row gap-x-2.5">
        <Input placeholder="Your best email address" className="bg-white" />
        <Button>Try it out</Button>
      </div>
      <div className="mt-5 flex flex-row items-center gap-x-2.5">
        <AvatarCircles numPeople={100} avatarUrls={avatarUrls} />
        <div className="text-left text-[10px]">
          <span className="font-semibold">More than 100+</span> users are
          selling their products <br /> online with simple & easy ways
        </div>
      </div>
    </div>
  );
};

export default Hero;
