import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";

const HomePage = () => {
  const words = [
    {
      text: "abhisekpanda.co.in",
      className: "text-center font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold tracking-tighter",
    },
  ];
  return (
    <section
      className={cn("flex h-full min-h-screen w-screen items-center justify-center overflow-hidden py-16 md:py-24 lg:py-32")}
    >
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <TypewriterEffectSmooth
          cursorClassName="h-8 sm:h-9 md:h-11 lg:h-15 xl:h-17 2xl:h-22"
          words={words}
        />
        <div className="relative z-20 mt-6 md:mt-10 flex gap-2 w-full max-w-xs sm:max-w-md justify-center">
          <a href="https://github.com/Panda-Abhisek" target="_blank" rel="noopener noreferrer">
            <Button className="bg-neutral-800 hover:bg-neutral-700 text-white transition-colors duration-300 cursor-pointer h-10 sm:h-12 px-4 sm:px-6 rounded-xl text-sm sm:text-base">
              <RiGithubFill />
              Github
            </Button>
          </a>
          <a href="https://linkedin.com/in/abhisek-panda-" target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 cursor-pointer h-10 sm:h-12 px-4 sm:px-6 rounded-xl text-sm sm:text-base">
              <RiLinkedinBoxFill />
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export { HomePage };
