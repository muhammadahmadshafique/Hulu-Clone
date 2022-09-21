import React from 'react'
import  Image  from 'next/image';
import { forwardRef } from 'react';
import FlipMove from 'react-flip-move';
import { 
  BeakerIcon,
  HandThumbUpIcon
  } from '@heroicons/react/24/solid'
const Thumbnail=forwardRef(({oneresult})=> {
    console.log(oneresult)
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="group cursor-pointer transtion duration-200 ease-in transform sm:hover:scale-105 hover:z-50 overflow-x-hidden	 ">
        <Image
        width={1920}
        height={1080}
        layout="responsive"
        src={`${BASE_URL}${oneresult.backdrop_path || oneresult.poster_path}`}
        />
        

        <div className="p-2">
         <p className="truncate"> {oneresult.overview} </p>
         <h2 className="text-xl py-1 transition-all duration-100 ease-in-out group-hover:font-bold ">{oneresult.title}</h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
        {oneresult.media_type && `${oneresult.media_type} .`}{" "}
        {oneresult.release_date || oneresult.first_air_date} .{" "}
        <HandThumbUpIcon className="h-5 mx-2" /> {oneresult.vote_count}
        </p>
        </div>
        
      
    </div>
  )
})

export default Thumbnail
