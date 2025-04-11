import { easeInOut, stagger } from "motion";
import * as  motion from "motion/react-client";




export default function Home() {



const childVarient ={
  open : {opacity : 1, x : 0}
 ,
  close : {
    opacity : 0,
    transition : {staggerChildren :0.03, staggerDirection : -200} 
  }
}
const parentvarient={
  open : {
    opacity : 1,
    transition : {
      staggerChildren : 0.07 ,delayChildren : 0.2
    }
  },
  close : {opacity :0,x:-10}
}


  const Images = [
    {
      src : "/1.jpeg",
      caption : "Scenary"
    },
    {
         src : "/3.jpeg",
          caption : "Psycho"
    },
    {
         src : "/2..jpeg",
         caption : "Guitar"
    }
  ]

const hoverAnimations = {
  initial : {opacity : 1 ,scale :1},
  hover : {scaleX : 2 , skew : 0.4},
  tap : {scale : 0.9 }
}

  return (
    <>
<div className=" flex flex-col h-screen w-full items-center justify-center">

{/* <div> 
  
  <motion.div className="box "  transition={{duration :1, ease : "circIn"}} initial={{x : -2}} animate={{y:100}}>
    
  </motion.div>
  <motion.div className="box"   initial={{x:5}} transition={{delay:1, duration:1, ease:"easeIn"}} animate={{
    borderRadius : [1,50],
    }}  />



     <motion.button initial={{x:20}}
     transition={ {
      duration :0.8,
      repeat : Infinity,
      
     }}
     animate={{
        scale : [1,1.3,1],
        backgroundColor : ['#ffffff', '#ff00ff', '#ffffff']
     }} className="p-2 bg-neutral-400 text-neutral-800 px-2 rounded-md outline-none">Click Me</motion.button>

</div> */}

<h1 className="text-neutral-200 font-semibold mt-6">Bouncing Loader</h1>
<div className="flex gap-1 mt-10">
{[...Array(3)].map((_,i)=> 
<motion.div transition={{
  repeat :1,
   duration:1,
  ease : 'easeIn',
  repeatDelay : i * 1
}} animate={{
  y :[0,-16,0]
}} className="p-2 rounded-full bg-teal-300  w-5 h-5 " key={i} ></motion.div>)}

</div>


<div><h1 className="text-neutral-100 mt-7 font-semibold ">Hover Animation With Varients</h1>
<div className="mt-4">

  <motion.button className="box" initial="initial" variants={hoverAnimations} whileHover={'hover'} whileTap={'tap'}></motion.button>
</div>
</div>

<div>
  <h1 className="text-neutral-100 mt-7 font-semibold mb-5">Card Animation</h1>
  <div className="flex gap-2">

  {Images.map((i,index)=>(<motion.div key={index} whileHover={{scale:1.05}} className="w-30 h-25 relative object-contain overflow-hidden  rounded-md">
    <img className="w-full h-full object-cover" src={i.src} alt="" />
    <p className="absolute inset-0 text-white w-full object-cover h-full bg-black opacity-0 hover:opacity-90 cursor-pointer">{i.caption}</p>
    </motion.div>))}
  </div>
    

</div>
 <h1 className="text-white text-lg mt-4">Stagger Animation</h1>

<motion.div initial='close' animate='open' variants={parentvarient} className="flex gap-2">

{[...Array(5)].map((_,index)=>(<motion.div key={index}

variants={childVarient}
className="p-4 rounded-full bg-amber-300">

</motion.div>))}
</motion.div>



</div>
   
    </>
  );
}

