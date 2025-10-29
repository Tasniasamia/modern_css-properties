import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="h-[700px]  bg-white w-full">
        <div className="h-full w-full bg-red-300 shape1"></div>
      </div>

      <div className="min-h-screen bg-white flex justify-center items-center">
        <div className="h-[250px] w-[250px] border border-black flex justify-center items-center">
          <div className="animate h-full w-full">
            <div className="shape2 h-full w-full"></div>
          </div>
        </div>
      </div>

      {/* appsitck hero section animation */}
      <div className="h-[700px]  bg-white w-full">
        <div className="h-full w-full bg-red-300 shape"></div>
      </div>

      {/* mask image impressive design  */}
      <div className="h-[700px] flex gap-2.5 justify-center items-center  bg-white w-full">

      <div className="card1 cursor-pointer border border-black h-[300px] w-[300px]">
        <Image
          src="/about.png"
          width={1000}
          height={1000}
          className="h-[300px] w-[300px] object-cover img"
          alt="about image"
        />
      </div>
      <div className="card2 cursor-pointer border border-black h-[300px] w-[300px]">
        <Image
          src="/about.png"
          width={1000}
          height={1000}
          className="h-[300px] w-[300px] object-cover img2"
          alt="about image"
        />
      </div>
      </div>

      {/* slide mask effect 1 */}
 <div className="hero wipe-effect-1 max-w-[1320px] mx-auto">
<div className="slide ">1</div>
<div className="slide ">2</div>

 </div>

     {/* slide mask effect 2 */}
     <div className="hero wipe-effect-2 max-w-[1320px] mx-auto my-26">
<div className="slide ">1</div>
<div className="slide ">2</div>

 </div>

    </div>
  );
};

export default page;
