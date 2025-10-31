"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const page = () => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
  useGSAP(() => {
    tl.to("#bluebox", {
      x: 250,
      borderRadius: "100%",
      rotation: 360,
      duration: 2,
      ease: "back.inOut",
    });
    tl.to("#bluebox", {
      x: 500,
      borderRadius: "8px",
      rotation: 360,
      duration: 2,
      scale: 1,
      ease: "back.inOut",
    });
  }, []);
  return (
    <div className="max-w-[1320px] mx-auto py-8">
      <button
        className="p-2 rounded-lg bg-green-400 text-white cursor-pointer"
        onClick={() => {
          if (tl.paused()) {
            tl.play();
          } else {
            tl.pause();
          }
        }}
      >
        play/pause
      </button>
      <div className="h-8 w-8 bg-blue-400 rounded-lg" id="bluebox"></div>
      <div className="h-[800px]">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolore
          praesentium veritatis tempore laborum consectetur perspiciatis animi,
          quam accusamus nesciunt sapiente nisi numquam sunt esse vel voluptate!
          Provident, aut vero. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. At hic totam ullam eos delectus corporis, quam optio
          omnis tempora ipsum, ipsa inventore, necessitatibus aliquid? Aliquam
          aperiam velit laboriosam porro Lorem ipsum{" "}
        </p>
      </div>
      <div className="h-[800px]">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolore
          praesentium veritatis tempore laborum consectetur perspiciatis animi,
          quam accusamus nesciunt sapiente nisi numquam sunt esse vel voluptate!
          Provident, aut vero. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. At hic totam ullam eos delectus corporis, quam optio
          omnis tempora ipsum, ipsa inventore, necessitatibus aliquid? Aliquam
          aperiam velit laboriosam porro Lorem ipsum{" "}
        </p>
      </div>
      <div className="h-[800px]">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolore
          praesentium veritatis tempore laborum consectetur perspiciatis animi,
          quam accusamus nesciunt sapiente nisi numquam sunt esse vel voluptate!
          Provident, aut vero. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. At hic totam ullam eos delectus corporis, quam optio
          omnis tempora ipsum, ipsa inventore, necessitatibus aliquid? Aliquam
          aperiam velit laboriosam porro Lorem ipsum{" "}
        </p>
      </div>
    </div>
  );
};

export default page;
