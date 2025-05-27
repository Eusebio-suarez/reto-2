import React from 'react'
import { Resultado } from './components/Resultado'
import { Estadisticas } from './components/Estadisticas'

export const App = () => {
  return (
    <div className='flex bg-white rounded-3xl'>
      <Resultado/>
      <Estadisticas/>
    </div>
  )
}

