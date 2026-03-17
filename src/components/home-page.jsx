import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const HomePage = () => {
  const words = [
    {
      text: "abhisekpanda.co.in",
      className: "text-center font-sans text-5xl font-semibold tracking-tighter md:py-10 lg:text-8xl",
    },
  ];
  return (
    <section
      className={cn("flex h-full min-h-screen w-screen items-center justify-center overflow-hidden py-32")}
    >
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <TypewriterEffectSmooth
          cursorClassName="h-22"
          words={words}
        />
        <div className="relative z-20 mt-10 flex w-full max-w-md justify-center">
          <a href="http://github.com/Panda-Abhisek" target="_self" rel="noopener noreferrer">
            <Button className="cursor-pointer h-10 rounded-xl">Here's my github profile</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export { HomePage };
