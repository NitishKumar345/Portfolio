import React from 'react'
import pic from "../../public/Nitimg.jpeg"

import { FaLinkedin } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped,Typed } from "react-typed";


export default function home() {
  return (
    <>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
       <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
          <span className='text-xl'>Welcome In My Portfolio</span>
          <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>Hello, I'm a</h1>
            {/* <span className='text-red-700 font-bold'>Developer</span> */}
            <ReactTyped
              className='text-red-700 font-bold'
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <br />
          <p className='text-sm md:text-md text-justify'>  I am Nitish Kumar, a dedicated Web Developer specializing in the MERN Stack. With a solid foundation in ECE, I am driven by a relentless passion for crafting immersive digital experiences. I'm comfortable working across the entire technology stack, from frontend frameworks like React.js to backend technologies like Node.js. </p>
           <br />
           {/* social media icons */}
            <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0' >
            <div className='space-y-2 '>
            <h1 className='font-bold'>Available on</h1>
             <ul>
              <li>
                <a href="https://www.linkedin.com/" target='_blank'>
                <FaLinkedin  className='text-2xl cursor-pointer ml-8'/>
                </a>
              </li>
             </ul>
           </div>
           <div className='space-y-2'>
             <h1 className='font-bold'>Currently working on</h1>
                 <div className='flex space-x-5'>
                 <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                 <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                 <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                 <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>

                 </div>
           </div>
            </div>
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
          <img src={pic} className='rounded-full   md:h-[450px]' alt="" />
        </div>
       </div>
    </div>
    <hr />
    </>
  )
}
