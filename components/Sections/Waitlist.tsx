import { dela } from "@/lib/font";
import Section from "../Section";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Waitlist = () => {
  return (
    <Section marginTop={true}>
      <div className="mx-auto flex flex-col justify-center gap-y-4 rounded-[25px]  bg-white p-4">
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
