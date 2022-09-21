import React from 'react'
import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';

const Result=({result}) =>{
  return (
    <FlipMove className='p-3 sm:grid md:grid-cols-2 lg:grid-cols-3 3xl:flex flex-wrap justify-center'>
         {result.map((post) =>
           <Thumbnail key={post.id} oneresult={post}/>        
      )}
      
    </FlipMove>
  )
}

export default Result
