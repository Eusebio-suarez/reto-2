import React from 'react'
import { Resultado } from './components/Resultado'
import { Estadisticas } from './components/Estadisticas'

export const App = () => {
  return (
    <div className='flex flex-col items-center sm:flex-row gap-5 sm:gap-0 bg-white rounded-3xl py-8 sm:py-0'>
      <Resultado/>
      <Estadisticas/>
    </div>
  )
}

