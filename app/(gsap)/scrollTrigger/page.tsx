"use client";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!scrollRef.current) return;

    const boxes = Array.from(scrollRef.current.children) as HTMLElement[];

    boxes.forEach((box) => {
      gsap.to(box, {
        x: 250,
        rotation: 360,
        scale: 1.5,
        // borderRadius: "100%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: box,
          start: "top center",   
          end: "top 30%",
          scrub: true,
        },
      });
    });
  }, {scope:scrollRef});

  return (
    <div className="max-w-[1320px] min-h-screen mx-auto">
      {/* Scroll buffer content */}
      <div className="h-[600px] flex items-center justify-center">
        <p className="text-lg text-center">
          Scroll down to see the animation 👇
        </p>
      </div>

      {/* Animated boxes */}
      <div ref={scrollRef} className="flex gap-8 justify-center py-32">
        <div className="h-16 w-16 bg-blue-400 rounded-lg"></div>
        <div className="h-16 w-16 bg-purple-400 rounded-lg"></div>
      </div>

      {/* Extra content to make scroll possible */}
      <div className="h-[800px]"></div>
    </div>
  );
};

export default Page;


