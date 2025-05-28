import React from 'react'

export const Resultado = () => {
  return (
    <div className='bg-gradient-to-t from-[#422bef] to-[#5d48f7] rounded-3xl w-[80%] sm:w-[300px] flex flex-col justify-center items-center p-6 gap-5'>
        <p className='text-[#b79fff] font-bold hover:scale-102 transition duration-300'>Yor Result</p>
        <div className='hover:scale-104 transition duration-300 flex flex-col justify-center items-center py-8 px-10.5 shadow-2xl rounded-[50%] text-5xl font-medium bg-[#4b36ee] text-white font-sans '>
          <p className=' flex justify-center items-center flex-col'>76</p>
          <h3 className='font-normal text-[#b79fff] text-sm'>of 100</h3>
        </div>
        <h2 className='font-semibold text-white text-2xl hover:scale-102 transition duration-300 '>Great</h2>
        <p className="text-gray-300 text-[15px] text-center hover:scale-102 transition duration-300">You score higer than 65% of the people who have taken these tests.</p>
    </div>
  )
}
