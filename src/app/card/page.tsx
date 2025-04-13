'use client'
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function Card(){


interface Pops {

    image: string;
    artist: string;
    title: string;
    description: string;
    backstory: string;
    awards: string;

}

  const [open,setOpen] = useState(false)
  const [modal,setModal] = useState<Pops[]>([])
  const rockSongs = [
    {
      image: "https://i.pinimg.com/474x/14/19/58/14195845c4608b584ba03c378b4453a9.jpg",
      artist: "Queen",
      title:'Bohemian Rhapsody',
      description: "This is a musical masterpiece by Queen that defied all traditional song structures at the time of its release in 1975. Spanning nearly six minutes, the song seamlessly fuses ballad, opera, and hard rock segments, delivering a theatrical and emotionally powerful experience. With its operatic chorus, soaring vocals, and legendary guitar solo, the song became an iconic symbol of Queen’s creative genius and ambition.",
      backstory: "Freddie Mercury began working on the song years before it was released. He kept its details secretive even from his bandmates, who trusted his vision. Recorded across multiple studios, it featured layered vocals and elaborate arrangements, pushing the boundaries of what was possible in rock. The record label initially resisted releasing it as a single due to its length, but it ultimately became a global phenomenon, launching Queen into superstardom and redefining rock music forever.",
      awards: "Grammy Hall of Fame; consistently ranked among the greatest songs in rock history."
    },
    {
      image: "https://i.pinimg.com/474x/c1/6f/48/c16f489ffa5ec150e2c001bb74790557.jpg",
      title: "Smells Like Teen Spirit",
      artist: "Nirvana",
      description: "This 1991 anthem by Nirvana is often credited with bringing grunge music into the mainstream and becoming the voice of a disillusioned generation. With its distorted guitars, explosive chorus, and raw energy, “Smells Like Teen Spirit” captured the angst and rebellion of youth culture in the early '90s. Its catchy yet chaotic sound made it a breakout hit and symbolized the rise of alternative rock.",
      backstory: "Kurt Cobain, inspired by his love-hate relationship with fame and pop music, set out to write a song that mocked the mainstream—ironically creating a massive hit in the process. The title came from graffiti written by a friend referencing a deodorant brand, which Cobain misinterpreted as something deeper. The song’s success was unexpected and overwhelming, quickly launching Nirvana into the spotlight and turning Cobain into an unlikely cultural icon.",
      awards: "MTV Video Music Awards (1992); inducted into the Grammy Hall of Fame."
    },
   
    {
      image: "https://i.pinimg.com/474x/9b/53/15/9b53152d3f65f765239953112c80deec.jpg",
      title: "Sweet Child O' Mine",
      artist: "Guns N’ Roses",
      description: "“Sweet Child O’ Mine” is Guns N’ Roses' powerful love song layered over a roaring rock anthem. Released in 1987, it became their first and only U.S. number one single. Known for its instantly recognizable guitar riff and Axl Rose’s dynamic vocals, the track is a perfect mix of sentimentality and rock aggression, showcasing the band’s versatility.",
      backstory: "The iconic riff originated during a casual jam session when Slash began playing it as a warm-up exercise. Axl Rose quickly added lyrics inspired by his then-girlfriend, Erin Everly. The song was recorded almost spontaneously, and the band didn’t anticipate its eventual massive success. Today, it stands as a testament to the magic that can happen from unplanned creativity in the studio.",
      awards: "Billboard Hot 100 #1; ranked among Rolling Stone's '100 Greatest Guitar Songs of All Time'."
    },
    {
      image: "https://i.pinimg.com/736x/ec/be/0a/ecbe0a2ce539b5c0e1de41aac6ffd4e4.jpg",
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      description: "“Stairway to Heaven” by Led Zeppelin is a sprawling, eight-minute epic that blends acoustic folk, mystical lyrics, and thunderous rock. Released in 1971, the track builds from a gentle introduction to a powerful climax, making it one of the most famous and analyzed rock songs in history.",
      backstory: "Composed by guitarist Jimmy Page and vocalist Robert Plant, the song was created in a remote cottage in Wales. Its lyrics were inspired by Celtic mythology and the band's interest in spirituality. Despite never being released as a single, its radio play and fan devotion elevated it to legendary status, often hailed as Led Zeppelin’s magnum opus.",
      awards: "Inducted into the Grammy Hall of Fame; frequently voted the greatest rock song ever."
    },
    {
      image: "https://i.pinimg.com/474x/9f/a1/45/9fa145a8ad8de0f814f75fd74a1c18a4.jpg",
      title: "In the End",
      artist: "Linkin Park",
      description: "Linkin Park’s 'In the End' combines rap-rock elements with emotional vulnerability. Released in 2000, it explores themes of failure, regret, and existential struggle—wrapped in a powerful, radio-friendly sound.",
      backstory: "Mike Shinoda and Chester Bennington collaborated closely on this track, blending rap verses with soaring choruses. Chester’s passionate delivery gave voice to internal battles many listeners could relate to. The song became a major success and helped Linkin Park become one of the best-selling rock bands of the 2000s.",
      awards: "Peaked at #2 on Billboard Hot 100; one of the most-viewed rock videos on YouTube."
    }
  ];
  


  return(<div className="h-screen w-full bg-neutral-50 flex items-center justify-center ">
  
  <div className="flex flex-col gap-6 w-full p-7 mt-10 px-10">
  {rockSongs.map((itm,index)=>(<div 

  key={index}>
    
    <motion.div 
    
    layoutId={`card-${itm.description}`}
    onClick={()=>
      {setOpen(true)
      setModal(itm)}} className="bg-neutral-700 p-6 rounded-lg  items-center w-[60%] mx-auto  flex justify-between ">
    <div className="flex items-center gap-3"> 
    <motion.img layoutId={`card-${itm.image}`} className="rounded-lg h-20 w-15 object-cover" width={50} alt="rock" src={itm.image} />
    <div>
  <motion.h1 
    layoutId={`card-${itm.title}`}
  className="font-semibold text-neutral-100 text-lg">{itm.title}</motion.h1>
<motion.h1 
layoutId={`card-${itm.artist}`}
className="text-neutral-300 font-semibold">{itm.artist}</motion.h1></div></div>


<button className="text-green-600 border-2  border-green-600 px-8 bg-green-100 w-fit h-fit rounded-2xl  p-2 ">Play</button>


    </motion.div>
  
  </div>))}
  {modal && open && (
  <motion.div 

  onClick={()=> setOpen((prev)=>!prev)} className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center">
    <motion.div onClick={(e)=>e.stopPropagation()}
    layoutId={`card-${modal.description}`}

    className="bg-neutral-600 p-8 w-[90%] max-w-3xl rounded-3xl  max-h-[90vh]">

      <div className="grid grid-cols-2 items-center px-28 ">
      <motion.img
      layoutId={`card-${modal.image}`}
      className="h-80 w object-contain rounded-xl" src={modal.image} alt="" />

<div className="flex flex-col items-center justify-self-start">
    <div>
      <motion.h1 
        layoutId={`card-${modal.title}`}
      className="text-2xl font-bold">{modal.title}</motion.h1>
      <motion.h2
      layoutId={`card-${modal.artist}`}
      className="text-lg text-neutral-900">{modal.artist}</motion.h2>
    </div>
    <button className="bg-green-600 px-6 py-2 rounded-2xl mt-7">Play</button>
  </div >

      </div>
     
      <div className="bg-neutral-200 rounded-2xl mt-5 p-6 text-neutral-900 font-semibold space-y-4">
        

        <motion.div initial={{
          filter : 'blur(10px)',
          opacity : 0
        }} 
        animate = {{
          filter : 'blur(0px)',
          opacity : 1
        }}
        transition={{
          duration : 0.4,
          ease : 'easeInOut'
        }}
        
        className="overflow-y-auto">
        <p>{modal.description}</p>
        <p  >{modal.backstory}</p>
        <p>{modal.awards}</p>
        </motion.div>
       
      </div>
    </motion.div>
  </motion.div>
)}




  </div>
  
  </div>)
}