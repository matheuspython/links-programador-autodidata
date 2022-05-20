import React from 'react';
import { Home } from './pages/Home';
import {  
  Route,
  Routes
} from 'react-router-dom';


export const Rotas: React.FC = () => {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Home/>}/>
    </Routes>
    </>
  )
}