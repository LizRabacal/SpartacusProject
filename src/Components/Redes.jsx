import React from 'react'
import Rede from './Rede'
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import styles from './Redes.module.css'

const Redes = () => {
  return (
    <div className={styles.container}>
        <Rede icon={<FaWhatsapp/>}/>
          <Rede icon={<FaFacebook />}/>
          <Rede icon={<FaInstagram />}/>
          <Rede icon={<MdOutlineMail />}/>
    </div>
  )
}

export default Redes