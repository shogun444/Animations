'use client'
import { useState } from "react"
import Back, { Forward } from "./back"
import { Analytics, Home, Settings, Users } from "./dash"
import Icons from "./icons"
import { motion } from "motion/react"




export default function Dash(){


const parentvarient={
  open : {
     transition : { staggerChildren : 0.02,delayChildren : 0.2}
  },
  close : {
   transition : {staggerChildren : 0.03,staggerDirection : -1} 
  }
}

  const childVarient = {
    open : {
      opacity : 1,
     y : 0
    },
    close : {
     opacity : 0,
     y : -10
    }
  }
const [open,setOpen] = useState(true)
  const dash=[{
    dest : 'Home',
    Icon : <Home/> 
  },
  {
    dest : 'Analytics',
    Icon : <Analytics/> 
  },{
    dest : 'Users',
    Icon : <Users/> 
  },{
    dest : 'Settings',
    Icon : <Settings/> 
  },]
  


  const data=[
    {
      label : 'Total Users',
      number : '2,543',
      stats :'Increased by 257 since last month'
    },  {
      label : 'Revenue',
      number : '$ 45,257',
      stats :'Increased by $3,257 since last month'
    },  {
      label : 'Active Sessions',
      number : '1,325',
      stats :'Increased by 102 since yesterday'
    },  {
      label : 'Conversion Rate',
      number : '12.3%',
      stats :'Decreased by 1.08% since last month'
    }
  ]

  return(
   
<>

<div className="h-screen w-full bg-neutral-50">

<div className="grid grid-cols-12">

<motion.nav 

animate={{
  width : open? 200: 60 ,
  y : open? 0 : -4 ,
  opacity : open? 100 : 1
}}
transition={ {
  duration :0.2
}}
className={`${open? 'col-span-2' : 'col-span-2'} h-screen p-2 shadow-lg `}>

{open ? <div 

>
  <button onClick={()=> setOpen((prev)=>!prev)} className="p-1 rounded-lg shadow-sm">
<Back/>
</button >

<motion.div variants={parentvarient} initial='open'  >
  <span className=" flex gap-3 items-center justify-between">
  <motion.h1 initial={{filter:'blur(3px)',opacity:0}} animate={{filter:'blur(0px)',opacity:1}} className="text-[14px] pl-3 font-bold text-neutral-600] bg-zinc-50">
  Dashboard
  </motion.h1>


  </span>
  <motion.div  variants={childVarient}   className=" gap-2 mt-2 ">

    {dash.map((itm,index)=>( 
      <div  className="flex pl-6 p-3 items-center" key={index}>
      <span  className="pr-2">{itm.Icon}</span>
  
  <h1 className="text-[16px]  text-neutral-600 font-semibold ">{itm.dest}</h1>
  </div>
  ))}
 
    
    </motion.div>
   
 </motion.div>
  </div> : <div >
<button onClick={()=> setOpen((prev)=>!prev)} className="p-1 rounded-lg shadow-sm">
<Forward/>
</button >

<motion.div  whileHover='open' variants={childVarient}  animate={{ opacity : open? 1 : 0 , y : open? 0 : -10}} transition={{duration :0.3}}  className="gap-2 mt-4">
            {dash.map((itm, index) => (
              <div className="flex items-center gap-2 pl-4 p-3" key={index}>
                <span>{itm.Icon}</span>
               
              </div>
            ))}
          </motion.div></div>}
 
  </motion.nav>  
<motion.nav
animate={{

}}
transition={{
  duration : 0.3
}}
className="col-span-10  bg-neutral-100 h-screen">
  
  <span className="flex p-2 pb-4 justify-between bg-zinc-50 shadow-2xl">
  <h1 className="font-bold text-[15px] text-neutral-800"> Overview</h1>
 
 <div className="flex gap-5 mr-10">
   <Icons/>
 </div>
    
    
     </span>

     <div className="flex gap-4">

{data.map((itm,index)=>(<div key={index} className="w-52 rounded-md shadow-md h-28 bg-neutral-50 p-2 m-4 ">

<h1 className="text-md text-neutral-600 font-semibolde">{itm.label}</h1>
<h1 className="font-semibold text-neutral-800 pt-2">{itm.number}</h1>

<p className="text-[11px] text-neutral-500 font-semibold">{itm.stats}</p>
</div>))}

     </div>


<div className="flex gap-6 items-center justify-center mt-7">


<div className="bg-neutral-100 shadow-lg rounded-md w-95 h-50">
<h1 className="text-[13px] font-semibold text-neutral-800 text-center">User Activity</h1>
</div>

<div className="bg-neutral-100 rounded-md shadow-lg w-95 h-50">
<h1 className="text-[13px] font-semibold text-neutral-800 text-center">Revenue Overview</h1>
</div>
</div>

  </motion.nav>

 

</div>

</div>



  </>)
}