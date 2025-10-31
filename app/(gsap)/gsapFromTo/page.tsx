"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const page = () => {
    useGSAP(()=>{
        gsap.fromTo("#bluebox",{
            x:0,
            rotation:0,
            borderRadius:'0%'
          },
          {
          x:250,
          repeat:-1,
          yoyo:true,
          borderRadius:'100%',
          rotation:360,
          duration:2,
          ease:'bounce.out'
        })
    },[])
    return (
        <div className="max-w-[1320px] mx-auto py-8">
            <div className="h-8 w-8 bg-blue-400 rounded-lg"id="bluebox"></div>
            <div className="h-[800px]">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolore praesentium veritatis tempore laborum consectetur perspiciatis animi, quam accusamus nesciunt sapiente nisi numquam sunt esse vel voluptate! Provident, aut vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At hic totam ullam eos delectus corporis, quam optio omnis tempora ipsum, ipsa inventore, necessitatibus aliquid? Aliquam aperiam velit laboriosam porro Lorem ipsum </p>
            </div>
            <div className="h-[800px]">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolore praesentium veritatis tempore laborum consectetur perspiciatis animi, quam accusamus nesciunt sapiente nisi numquam sunt esse vel voluptate! Provident, aut vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At hic totam ullam eos delectus corporis, quam optio omnis tempora ipsum, ipsa inventore, necessitatibus aliquid? Aliquam aperiam velit laboriosam porro Lorem ipsum </p>
            </div>
            <div className="h-[800px]">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolore praesentium veritatis tempore laborum consectetur perspiciatis animi, quam accusamus nesciunt sapiente nisi numquam sunt esse vel voluptate! Provident, aut vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At hic totam ullam eos delectus corporis, quam optio omnis tempora ipsum, ipsa inventore, necessitatibus aliquid? Aliquam aperiam velit laboriosam porro Lorem ipsum </p>
            </div>
            
        </div>
    );
};

export default page;