"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const page = () => {
  useGSAP(() => {
    gsap.to("#text", {
      y: 0,
      opacity: 1,
      ease: "power1.inOut",
    });
    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
        stagger: 1.5,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
  }, []);
  return (
    <div className="max-w-[1320px] mx-auto py-8">
      <h1 id="text" className="text-2xl text-amber-700">
        GSAP
      </h1>
      <p className="para text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam maiores
        dolore, assumenda beatae temporibus necessitatibus soluta debitis cum
        inventore ea recusandae ipsum cumque quidem iste similique consequatur
        tempore, sapiente illo!
      </p>
      <p className="para text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam maiores
        dolore, assumenda beatae temporibus necessitatibus soluta debitis cum
        inventore ea recusandae ipsum cumque quidem iste similique consequatur
        tempore, sapiente illo!
      </p>
    </div>
  );
};

export default page;
