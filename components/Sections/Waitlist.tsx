import { dela } from "@/lib/font";
import Section from "../Section";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Waitlist = () => {
  return (
    <Section marginTop={true}>
      <div className="mx-auto flex flex-col justify-center gap-y-4 lg:gap-y-6 rounded-[25px]  bg-white px-4 py-6 md:py-8 lg:py-12">
        <h2 className={`${dela} mx-auto text-center xl:w-[822px]`}>
          Be the first to know about new features, special offers, and more.
        </h2>
        <div className="mx-auto flex flex-row gap-x-2.5 xl:w-[414px]">
          <Input placeholder="Your best email address" />
          <Button>Join waitlist</Button>
        </div>
      </div>
    </Section>
  );
};

export default Waitlist;
