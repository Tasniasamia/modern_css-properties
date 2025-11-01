"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideoScroll() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    if (!videoRef.current) return;
    const videoEl = videoRef.current;

    // ScrollTrigger তৈরি
    const trigger = ScrollTrigger.create({
      trigger: "#videos",        // কোন element scroll এ ট্র্যাক করবে
      start: "top 10%",        // যখন video viewport-এর 10% এর ভিতরে আসবে (মানে নিচের দিক থেকে)
      end: "bottom 60%",
      scrub:2,
      
      onEnter: () => {
        videoEl.play();        // scroll করে ঢুকলেই play
      },
      onLeave: () => {
        videoEl.pause();       // বের হয়ে গেলে pause
      },
      onEnterBack: () => {
        videoEl.play();        // উল্টো দিক থেকে আসলে play
      },
      onLeaveBack: () => {
        videoEl.pause();       // আবার বের হলে pause
      },
      markers: true,           // debug marker দেখতে চাইলে true রাখো
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
<section className="h-[2000px] w-full bg-red-300">
  <div className="h-[500px] w-full bg-green-500"></div>
  <div  id="videos" className="flex flex-col justify-center bg-amber-400 h-[1000px] items-center">
    <video
      ref={videoRef}
      src="/videos/input.mp4"
      muted
      playsInline
      preload="auto"
      className="max-w-[800px] w-full h-auto rounded-xl shadow-lg"
    />
     
  </div>
</section>



  );
}
