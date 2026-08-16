import { useEffect, useRef } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/useReveal";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (prefersReducedMotion()) {
      gsap.set(root.querySelectorAll("[data-hero]"), { opacity: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero]",
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.12, delay: 0.1 },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={ref} className="mx-auto max-w-[1180px] px-5 sm:px-8">
      <div className="grid items-center gap-8 pt-10 pb-12 sm:pt-14 sm:pb-16 md:grid-cols-12 md:gap-6 md:pt-16 md:pb-20">
        <div className="md:col-span-7">
          <p data-hero className="label-xs">
            Berk Bıçakçı — currently preparing for university
          </p>
          <h1
            data-hero
            className="mt-5 font-serif text-[44px] leading-[1.02] tracking-[-0.02em] sm:text-[68px] lg:text-[82px]"
          >
            Making sense of
            <br />
            what's <span className="italic text-teal">possible.</span>
          </h1>
          <p
            data-hero
            className="mt-7 max-w-[52ch] text-[17px] leading-[1.7] text-muted-foreground sm:text-[18px]"
          >
            I'm Berk — a frontend developer who enjoys figuring out how things work. Right now I'm
            exploring computer science, problem solving and Industrial Engineering while preparing
            for university.
          </p>

          <div data-hero className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#contact"
              className="border-b-2 border-coral pb-1 text-[15px] font-medium transition-colors hover:text-coral"
            >
              Start a conversation
            </a>
            <a
              href="#learning"
              className="pb-1 text-[15px] text-muted-foreground transition-colors hover:text-foreground"
            >
              See my learning path
            </a>
          </div>
        </div>

        <div data-hero className="md:col-span-5">
          <HeroVisual className="mx-auto w-full max-w-[340px] md:max-w-none" />
        </div>
      </div>
    </section>
  );
}
