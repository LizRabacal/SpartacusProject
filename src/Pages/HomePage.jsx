import React, { useContext } from 'react'
import { CounterContext } from '../Contexts/CounterContext'
import Banner from '../Components/Banner'
import TituloDois from '../Components/TituloDois'
import Localiza from '../Components/Localiza'
import Beneficios from '../Components/Beneficios'
import Valor from '../Components/Valor'
import AulaExperimental from '../Components/AulaExperimental'
import Footer from '../Components/Footer'


const HomePage = () => {

  return (
    <div className='homepage'>

      <Banner />

      <div className="sla" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="seila" style={{ display: 'flex', flexDirection: 'column', width: '95%'}}>
          <Beneficios />
                          <Valor />




        </div>
      </div>
                <AulaExperimental />

      <div className="sla" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="seila" style={{ display: 'flex', flexDirection: 'column', width: '95%' }}>
          <Localiza />

        </div>
      </div>
      <Footer/>

    </div>
  )
}

export default HomePage