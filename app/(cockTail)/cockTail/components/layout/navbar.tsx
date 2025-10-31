"use client";
import Image from 'next/image';
import React from 'react';
import { navLinks } from '../../helpers/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
    useGSAP(()=>{
        const navTween=gsap.timeline({
            scrollTrigger:{
                trigger:'nav',
                start:'bottom top'
            }
        })
        navTween.fromTo('nav',{backgroundColor:'transparent'},{backgroundColor:'#00000050',backgroundFilter:'blur(10px)',duration:1,ease:'power1.inOut'})
    })
    return (
            <nav>
                <div>
            
                    <a href="#" className='flex items-center gap-2'>
                        <Image src="/images/logo.png" width={100} height={100}  alt="logo" className='h-8 w-8 object-fill'/>
                        <p>Velvet Pour</p>
                    </a>
                    
         
                <ul>
                    {navLinks.map((i,index)=>{
                        return (
                        <li key={index}>
                            <a href={`#${i?.id}`}>{i.title}</a>
                        </li>
                        )
                    })}
                </ul>
                </div>
            </nav>
   
    );
};

export default Navbar;