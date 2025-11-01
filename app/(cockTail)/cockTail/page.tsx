import React from "react";
import Hero from "./components/common/hero";
import Cocktails from "./components/common/cocktails";
import About from "./components/common/about";
import Art from "./components/common/art";

const page = () => {
  return (
    <main>
      <Hero />
      <Cocktails />
      <About/>
      <Art/>
    </main>
  );
};

export default page;
