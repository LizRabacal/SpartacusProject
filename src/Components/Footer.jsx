import React from 'react'
import Redes from './Redes';
import { Text } from '@chakra-ui/react';
import { FaLocationDot } from 'react-icons/fa6';
import {  FaPhone} from "react-icons/fa";

const Footer = () => {
  const dataAtual = new Date();

  return (
    <>
      <footer id='footer' >
        <div className="footeer">
          <div className="foto">
            <img src="/LP2.png" alt="" />
          </div>
       
          <div className="info">
            <div className="localiza2">
              <FaLocationDot size={45}/>
              <Text marginLeft={4}>
                R. 7 de Setembro, 77 - Centro, Candeias - BA, 43805-350
              </Text>

            </div>
            <div className="localiza2">

            <FaPhone size={45} />
            <Text marginLeft={4}>
                 (71) 99271-4751
            </Text>
            
          </div>
            <Redes />

          </div>
        </div>



        <div className="footer" style={{ background: 'black' }}>
          <span> © {dataAtual.getFullYear()} Academia Spartacus. Todos os direitos reservados. </span>

        </div>
      </footer>
    </>
  )
}

export default Footer