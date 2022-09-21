import React from 'react'
import requests from '../utils/requests'

import {useRouter} from "next/router"


function Navebar() {

  const router= useRouter()
  


  return (
    <nav className="relative mb-4">
        <div className='flex justify-center mt-6   scrollbar-hide whitespace-nowrap gap-x-10 px-10 sm:px-12 sm:text-lg overflow-x-scroll lg:gap-x-18  '>
            {Object.entries(requests).map(([key, { title, url }])=>(
                <h2 key={key} onClick={()=>router.push(`/?genre=${key}`)} className=' transition duration-400 transform  hover:scale-125 cursor-pointer active:text-red-300 hover:text-white'>{title}</h2>
                
            ))}
        </div>

        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
      
    </nav>
  )
}

export default Navebar
