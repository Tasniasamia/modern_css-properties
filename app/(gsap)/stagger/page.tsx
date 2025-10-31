"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const page = () => {
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 250,
      rotation: 260,
      borderRadius: "100%",
      repeat:-1,
      yoyo: true,
      stagger: {
        amount: 1.5,
        grid: [1, 1],
        //axis:'x' // shob gulo animation same time e hobe
        axis:'y' , // shob gulo animation different time e hobe
        ease:'circ.inOut',
        from:'center'
      },
    });
  }, []);
  return (
    <div className="max-w-[1320px] mx-auto min-h-screen flex items-center">
      <div className="flex gap-3 ">
        <div className="h-6 w-6 bg-amber-300 rounded-lg stagger-box"></div>
        <div className="h-6 w-6 bg-amber-200 rounded-lg stagger-box"></div>
        <div className="h-6 w-6 bg-amber-400 rounded-lg stagger-box"></div>
        <div className="h-6 w-6 bg-amber-500 rounded-lg stagger-box"></div>
        <div className="h-6 w-6 bg-amber-600 rounded-lg stagger-box"></div>
      </div>
    </div>
  );
};

export default page;
