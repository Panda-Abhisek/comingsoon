import React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BackgroundLines } from "./ui/background-lines";

interface Waitlist1Props {
  className?: string;
}

const Waitlist1 = ({ className }: Waitlist1Props) => {
  return (
    <section
      className={cn(
        "flex h-full min-h-screen w-screen items-center justify-center overflow-hidden py-32",
        className,
      )}
    >
      <BackgroundLines className="container flex w-full flex-col items-center justify-center px-4 md:h-full">
        <div className="container flex w-full flex-col items-center justify-center px-4">
          <h2 className="relative z-20 py-2 text-center font-sans text-5xl font-semibold tracking-tighter md:py-10 lg:text-8xl">
            abhisekpanda.co.in
          </h2>
          <div className="relative z-20 mt-10 flex w-full max-w-md justify-center">
            <a href="http://github.com/Panda-Abhisek" target="_self" rel="noopener noreferrer">
              <Button className="cursor-pointer h-10 rounded-xl">Here's my github profile</Button>
            </a>
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
};

export { Waitlist1 };
