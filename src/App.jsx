import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SobreNos from './Pages/SobreNos'
import Modalidades from './Pages/Modalidades'
import NavBar from './Components/NavBar'
import { Divider } from '@chakra-ui/react'
import Matricula from './Components/Matricula'
import Contato from './Pages/Contato/Contato'
import Valores from './Pages/Valores/Valores'

import Footer from './Components/Footer'
function App() {

  return (
    <div className='app'>
<BrowserRouter>
<NavBar/>

<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/modalidades' element={<Modalidades/>}/>
  <Route path='/contato' element={<Contato/>}/>
  <Route path='/valores' element={<Valores/>}/>
</Routes>
</BrowserRouter>

</div>
     
 
  )
}

export default App
