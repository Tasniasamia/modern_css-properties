import React from "react";
import Hero from "./components/common/hero";
import Cocktails from "./components/common/cocktails";

const page = () => {
  return (
    <main>
      <Hero />
      <Cocktails />
      <div className="h-[500px] bg-red-300 w-full"/>
    </main>
  );
};

export default page;
