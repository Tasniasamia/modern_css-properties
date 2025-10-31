import gsap from "gsap";
import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/layout/navbar";
gsap.registerPlugin(ScrollTrigger,SplitText);
export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      >
        <Navbar/>
        {children}
      </div>
  );
}
