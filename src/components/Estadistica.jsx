import React from 'react'

export const Estadistica = ({svg=null ,titulo="Reaction",puntaje="80",color="#fef7f7",colorText="#ff5757" }) => {
  return (
    <div className='flex justify-between p-3 rounded-xl w-[220px] hover:scale-105 transition duration-300' style={{ backgroundColor: color }}>
       <div className='flex items-center gap-2'>
           {svg}
           <h3 className='font-bold' style={{ color: colorText }}  >{titulo}</h3>
        </div>
        <div className='flex'>
            <p className='text-gray-500 font-semibold'><span className='text-black font-semibold'>{puntaje} </span>/ 100</p>
        </div>
    </div>
  )
}
