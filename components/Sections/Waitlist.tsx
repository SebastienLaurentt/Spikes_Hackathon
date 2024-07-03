import { dela } from "@/lib/font";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Section from "../Section";

const Waitlist = () => {
  return (
    <Section marginTop={true} classname="mx-auto flex h-[281px] w-[822px] flex-col justify-center gap-y-[29px] rounded-[25px] bg-white">
      <h2 className={`${dela} text-center`}>
        Be the first to know about new features, special offers, and more.
      </h2>
      <div className="mx-auto flex w-[414px] flex-row gap-x-2.5">
        <Input placeholder="Your best email address" />
        <Button>Join waitlist</Button>
      </div>
    </Section>
  );
};

export default Waitlist;
