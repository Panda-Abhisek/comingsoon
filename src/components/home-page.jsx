import { cn } from "@/lib/utils";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { RiGithubFill, RiLinkedinBoxFill, RiLinkedinFill } from "@remixicon/react";
import GsapButton from "./GsapButton";

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
        <div className="relative z-20 mt-6 md:mt-10 flex gap-4 w-full max-w-xs sm:max-w-md justify-center">
          <GsapButton 
            href="https://github.com/Panda-Abhisek" 
            className="text-black hover:text-white dark:text-white transition-colors duration-300"
            fillColor="rgba(6, 6, 6, 0.95)"
            darkFillColor="rgba(75, 75, 75, 0.9)"
            variant="outline"
          >
            <RiGithubFill className="inline-flex items-center mr-2" />
            Github
          </GsapButton>
          <GsapButton 
            href="https://linkedin.com/in/abhisek-panda-" 
            className="text-black hover:text-white dark:text-white transition-colors duration-300"
            fillColor="rgba(10, 102, 194, 1)"
            variant="outline"
          >
            <RiLinkedinBoxFill className="inline-flex items-center mr-2" />
            LinkedIN
          </GsapButton>
        </div>
      </div>
    </section>
  );
};

export { HomePage };
