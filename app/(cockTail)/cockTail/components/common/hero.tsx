"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const videoRef = useRef<any>(null);

  useGSAP(() => {
    const isMobile = window.innerWidth <= 767;

    // Split animations
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      ease: "expo.out",
      duration: 1.8,
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      ease: "expo.out",
      duration: 1.8,
      stagger: 0.06,
      delay: 1,
    });

    // Leaf parallax scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(".right-leaf", { y: 200 }, 0);
    tl.to(".left-leaf", { y: -200 }, 0);

    // video scroll play control
    const startValue = isMobile ? "top 60%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";
    if (videoRef.current) {
      const videoEl = videoRef.current;
      const tl2= gsap.timeline({
          scrollTrigger: {
            trigger: "video",
            start: startValue,
            end: endValue,
            scrub: true,
            pin: true,
            onEnter: () => videoEl.play(),
            onLeave: () => videoEl.pause(),
            onEnterBack: () => videoEl.play(),
            onLeaveBack: () => videoEl.pause(),
          },
        })
        videoRef.current.onloadedmetadata=()=>{
          tl2.to(videoRef.current,{
            currentTime:videoRef.current.duration
          })
        }
     
    }
  }, []);

  return (
    <>
      <section id="hero" className="noisy relative overflow-hidden">
        <h1 className="title">Mojito</h1>
        <Image
          src="/images/hero-left-leaf.png"
          width={400}
          height={400}
          className="left-leaf absolute"
          alt="leaf"
        />
        <Image
          src="/images/hero-right-leaf.png"
          width={400}
          height={400}
          className="right-leaf absolute"
          alt="leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video
          src="/videos/input.mp4"
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
