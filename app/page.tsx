import Features from "@/components/Sections/Features";
import Hero from "@/components/Sections/Hero";
import Manage from "@/components/Sections/Manage";
import Waitlist from "@/components/Sections/Waitlist";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manage />
      <Features />
      <Waitlist />
    </main>
  );
}
