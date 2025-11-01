"use client";
import React from "react";
import { featureLists, goodLists } from "../../helpers/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Art = () => {
    useGSAP(() => {
        const isMobile = window.innerWidth <= 767;
        const start = isMobile ? "top top" : "top top";
    
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#art",
            start: start,
            end: "bottom center",
            pin: true,
            scrub: 2,
          },
        });
    
        tl.to(".will-fade", {
          opacity: 0,
          duration: 1.5,
          ease: "power1.inOut",
        })
    
          // image zoom
          .to(
            ".masked-img",
            {
              scale: 1.5,
              duration: 2,
              maskSize: "400%",
              ease: "power2.inOut",
            },
            "-=0.5" // overlap slightly
          )
    
          // smooth content appear
          .fromTo(
            "#masked-content",
            {
              opacity: 0,
              y: 100,
            },
            {
              opacity: 1,
              y: 0,
              duration: 2,
              ease: "power2.out",
            },
            "-=0.3" // smooth overlap with previous animation
          );
      }, []);

  return (
    <div id="art">
      <div className="container h-full mx-auto pt-20">
        <h2 className="will-fade">The Art</h2>
        <div className="content">
          <ul className="will-fade space-y-4">
            {goodLists.map((i, index) => {
              return (
                <li key={index} className="flex gap-2 items-center">
                  <img src="/images/check.png" alt="check" />
                  <p className="md:w-fit w-60">{i}</p>
                </li>
              );
            })}
          </ul>
          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img object-contain size-full"
            />
          </div>

          <ul className="will-fade space-y-4">
            {featureLists.map((i, index) => {
              return (
                <li key={index} className="flex gap-2 items-center">
                  <img src="/images/check.png" alt="check" />
                  <p className="md:w-fit w-60">{i}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with craft , Poured with Passion</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
