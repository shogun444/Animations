import Image from "next/image";

export default function Scroll() {
  const features = [
    {
      title: 'Framer Motion Practice Site',
      description: 'Practice animations and UI transitions using Framer Motion. Built for learning, experimenting, and mastering motion.',
      iconUrl: 'https://robbreport.com/wp-content/uploads/2024/08/temerario01.jpg',
    },
    {
      title: 'Learn Motion by Doing',
      description: 'Hands-on learning project for Framer Motion animations, focused on smooth interactions and clean UI design.',
      iconUrl: 'https://robbreport.com/wp-content/uploads/2024/06/opener-w-Bugatti-3_a9c757.jpg',
    },
    {
      title: 'Framer Motion in Action',
      description: 'Built to level up animation skills with Framer Motion — hover, scroll, and enjoy subtle transitions.',
      iconUrl: 'https://robbreport.com/wp-content/uploads/2024/04/droptail01.jpg?',
    },
  ];

  return (
    <div className="w-full h-screen bg-neutral-900 flex items-center justify-center ">


<div className="flex flex-col gap-10 p-50  ">
    {features.map((itm,index)=>(<div className="grid items-center grid-cols-2 gap-10 mx-auto max-w-4xl" key={index}>
      <div className="w-60 h-20 p-2 rounded-md">
        <h1 className="font-semibold text-2xl text-neutral-50">{itm.title}</h1>
        <h1 className="font-semibold text-[13px] mt-5 text-neutral-200">{itm.description}</h1>
     </div>
     <div className=" p-2 rounded-md">
      <img width={400} src={itm.iconUrl} alt="" />
     </div>
    
    </div>))}
    </div>
    </div>
  );
}
