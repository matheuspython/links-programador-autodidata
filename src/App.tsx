import React from 'react'
import { Globals } from './global/styles'
import { Main } from './components/Main';

export const App:React.FC = () => {
  return (
    <>
      <Globals />
      <Main/>
    </>
  )
}

