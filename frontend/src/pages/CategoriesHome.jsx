import React from 'react'
import {
  Tent,
  Building2,
  PawPrint,
  TreePine,
  Mountain,
  Sun,Umbrella,Waves
} from "lucide-react";
const cards = [
  { icon: Tent, title: "Camping", description: "Outdoor adventure" },
  { icon: Building2, title: "City Apartments", description: "Urban lifestyle" },
  { icon: PawPrint, title: "Pet Friendly", description: "Bring your pets" },
  { icon: TreePine, title: "Forest", description: "Surround yourself with trees" },
  { icon: Mountain, title: "Mountains", description: "Explore high peaks" },
  { icon: Sun, title: "Sunny Spots", description: "Enjoy the sunshine" },
  { icon: Umbrella, title: "Beach", description: "Relax by the sea" },
  { icon: Waves, title: "Lake", description: "Peaceful waterside views" },
];

const CategoriesHome = () => {


  return (
    <div className=' bg-white  flex flex-col space-y-2   m-5 font-serif  items-start sm:h-[50vh] sm:px-40 md:px-24  sm:space-y-2 sm:w-full'>
        <h3 className='text-black font-semibold '>Explore by Category</h3>
        <div className='grid grid-cols-4 sm:grid-cols-6 gap-4'>
                 {cards.map(({ icon: Icon, title, description }, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center text-center px-8 py-3 bg-gray-300 shadow-md rounded-xl  sm:p-5 hover:shadow-lg transition sm:h-24"
        >
          <Icon className=" text-slate-600 text-sm " />
          <h4 className=" text-xs sm:text-xs font-thin sm:font-semibold">{title}</h4>
       
        </div>
      ))}
        </div>
      
    </div>
  )
}

export default CategoriesHome
