'use client'

import { AnimatePresence, motion } from "framer-motion" // ✅ Correct import
import { useState } from "react"

export default function ImageViewer() {
  const [open, setOpen] = useState(false)

  const ImageList = [
    { src: '/1.jpg' },
    { src: '/2.jpg' },
    { src: '/3.jpg' },
    { src: '/4.jpg' },
    { src: '/5.jpg' }
  ]

  const parentVarient = {
    open : {
      opacity : 1,
      x : 0,
      transition : {
        staggerChildren : 0.1,delayChildren : 0.3 
      }
    },
    close : {
      x : 0,
      transition : {
        staggerChildren : 0.09 , staggerDirection : -10
      }
    }
  }

 const  childVarient= {
    open : {
      opacity : 1
    },
    close : {
      opacity : 0
    }
  }

  return (
  <div className="h-screen w-full ">
    <h1 className="text-neutral-50 font-semibold text-md text-center">Image Stagger</h1>

    <button onClick={()=>setOpen((prev)=>!prev)} className="p-2 rounded-md bg-neutral-50 ml-2 px-3 ">View Image</button>
<AnimatePresence>
    {open && <motion.div variants={parentVarient} 
    initial='close'
   animate={open?  'open' : 'close'}
   exit='close'
    className="flex gap-4">
{ImageList.map((itm,index)=>(<motion.div
variants={childVarient}

className="rounded-md" key={index}>
      <img className="rounded-md mt-2 ml-4" src={itm.src} alt="" />
    </motion.div>))}
</motion.div> }
</AnimatePresence>
   

<div className="w-full h-screen mt-[100vh] justify-center items-center">
  <div className="w-full h-[20vh] mt-[50vh]">
<motion.div initial={{ scale : 0.7,opacity : 0}} 
whileInView={{
  scale : 1,
  opacity : 1,
  y : 0
}}
transition={{
  ease : 'easeInOut'
}}
className="h-screen w-full items-center justify-center">
  <motion.h1 initial={{
    opacity:0
  }}
  whileInView={{
    opacity: 1
  }}
  
  transition={{
    ease : 'easeInOut'
  }}
  className="bg-neutral-50 rounded-md w-fit p-25 mx-auto">Hey This is The Box1</motion.h1>
</motion.div>

<motion.div 
>
{[...Array(5)].map((_,index)=><motion.div
whileInView={{
  opacity : 1,
  scale : 1,
  y : -100
}}
initial={
{
  opacity : 0,
  scale: 0.7
}
}
transition={{
  ease : 'easeInOut'
}}
className="bg-neutral-400 p-29 mx-auto w-fit border-2 rounded-full space-y-48"
key={index}>
 
 <h1 className="text-xs"> Box {index}</h1>

</motion.div>)}
</motion.div>
<h1 className="bg-neutral-50 rounded-md w-fit p-25 mx-auto mb-10">Hey This is The Box2</h1>
</div>

</div>

  </div>

  )
}
