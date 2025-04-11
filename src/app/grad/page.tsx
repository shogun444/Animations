
"use client"

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";


export default function Grad() {

  const [open,setOpen] = useState(true)
  return (
   <div className="flex h-screen w-full">
    <div
      className="h-screen w-full flex justify-center items-center"
      style={{
        backgroundColor: 'transparent',
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '80px 100px',
        backgroundPosition: 'center',
      }}
      
    >
      <button className="group bg-neutral-800 relative text-neutral-500 text-sm p-2 px-5 rounded-md shadow-2xl mt-5">
        <span className="absolute bg-gradient-to-r from-transparent via-red-300 to-transparent mx-auto bottom-0 inset-x-1 w-[70%] h-px"></span>
        <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-150 absolute bg-gradient-to-r from-transparent via-cyan-300 to-transparent mx-auto bottom-1 inset-x-1 w-[70%] h-[2px] blur-md"></span>
        Subscribe
      </button>

    </div>

<div className="h-screen w-full bg-white flex items-center justify-center">
<AnimatePresence>
{open &&
  <motion.div 
  
  initial={{opacity : 0,
}} 
animate={{opacity:1}}
transition={{
  duration : 0.5
  
}}

exit={{
 opacity:0,
 filter : 'blur(6px)' 

 
}}

className="shadow-lg rounded-md p-4 pb-2 bg-neutral-50 w-70 h-85">

  <h1 className="text-sm font-semibold text-neutral-800">Aceternity UI Components</h1>
  <h1 className="text-xs font-medium text-neutral-600 pt-2">A collection of UI components for your project get on with it.</h1>


<motion.div

initial={{
  opacity:1
}}
exit={{
  opacity : 0,
  filter : 'blur(7px)'
}}
transition={{
  duration:0.3,
  ease:"easeInOut"
}}
>
  <span className="flex  bg-neutral-100 mt-4 items-center rounded-md shadow-2xs w-fit px-4 mx-auto"><img className="rounded-md mr-1" height={17} width={20} src={'/ace.png'} alt="" /> <h1 className="text-xs font-semibold pr-3">Aceternity</h1>
  <button onClick={()=>setOpen((prev)=>!prev)}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
  </button>
 
 </span>
 </motion.div>

<div 


className="bg-neutral-100  rounded-md  mt-2 mx-auto h-47 relative ">


<motion.div
initial={{
  opacity:0,
  filter:'blur(10px)'
}}
whileHover={{
  opacity:1,
  filter : 'blur(0px)'
}}

transition={{
  duration:0.3,
  ease : 'easeInOut'
}}

className="bg-neutral-100 inset-0 rounded-md  mt-2 mx-auto h-47 absolute divide-y divide-neutral-300 border-neutral-300 border-1">

<div className="flex gap-1 items-center pl-4 p-2">
  
  <span className="rounded-md p-1  bg-neutral-50 shadow-lg pr-2" >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
  </span>


<div>
<h1 className="text-[11px] font-semibold text-neutral-700">Aceternity UI Components</h1>
<h1 className="text-[10px]  text-neutral-600 tracking-tight font-semibold">A collection of UI components.</h1>
</div>



</div>

<div className="flex gap-1 items-center p-2 pl-4">
  
  <span className="rounded-md p-1  bg-neutral-50 shadow-lg pr-2" >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
  </span>


<div>
<h1 className="text-[11px] font-semibold text-neutral-700">24 hours turnaround</h1>
<h1 className="text-[10px]  text-neutral-600 tracking-tight font-semibold">Superfast delievery at wrap speed.</h1>
</div>



</div>

<div className="flex gap-1 items-center p-2 pl-4">
  
  <span className="rounded-md p-1  bg-neutral-50 shadow-lg pr-2" >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
  </span>


<div>
<h1 className="text-[11px] font-semibold text-neutral-700">360 days all round</h1>
<h1 className="text-[10px]  text-neutral-600 tracking-tight font-semibold">We are here to help 24x7.</h1>
</div>




</div>

<div className="flex items-center justify-center p-2">
  <span className="rounded-md shadow-2xl bg-neutral-50 p-1 mr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</span>
  
  <h1 className="text-[11px] text-neutral-600 font-semibold">Create project</h1></div>
</motion.div>

</div>

</motion.div>
}
</AnimatePresence>

</div>
    </div>
  );
}
