import React from 'react'
import './banner.css'
import { Button } from '@chakra-ui/react'
import Matricula from './Matricula'
import { Link } from 'react-router-dom'
import Redes from './Redes'
import TituloDois from './TituloDois'

const Banner = () => {
  return (
    <>
      <div className='banner'>
        <div className="div2">
          <div className='div21'>

          <h1>Treino Total, Resultados Totais</h1>
          <p>Descubra a liberdade de treinar qualquer modalidade, todos os dias, com um plano único e transformador.</p>

          <div className="buttons">

            <Button id='btnb' variant='ghost'>
              <Link to='/contato'>FALE CONOSCO</Link>         </Button>
            <p style={{ marginLeft: '5%', marginRight: '5%' }}>ou</p>
            <Matricula />


          </div>

          <Redes />
          </div>
        </div>
        <div className="div1">
          <div className="div12">
            <img src="/LP2.png" alt="" />
          </div>

        </div>

      </div>


    </>
  )
}

export default Banner