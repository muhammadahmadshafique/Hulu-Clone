import React from 'react'

function Iconitem({Icon,title}) {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
     <Icon className="h-5 group-hover:animate-bounce "/>
     <p className="text-sm opacity-0 group-hover:opacity-100">{title}</p>  
    </div>
    
  )
}

export default Iconitem