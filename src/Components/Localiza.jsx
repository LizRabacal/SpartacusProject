import React from 'react'
import TituloDois from './TituloDois'
import { FaLocationDot } from "react-icons/fa6";
import Rede from './Rede';

const Localiza = () => {
  return (
    <div id="local" width="100% !important">
        <TituloDois/>
          <iframe
              title="mapa-google"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.29127119541837!2d-38.546703545387246!3d-12.67026160486915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71671159f5f849f%3A0xcff4adcf73e33721!2sR.%207%20de%20Setembro%2C%2077%20-%20Centro%2C%20Candeias%20-%20BA%2C%2043805-350!5e0!3m2!1spt-BR!2sbr!4v1710267816320!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0, zIndex:1001 }}
              allowFullScreen=""
              loading="lazy"
              z
              referrerPolicy="no-referrer-when-downgrade"
          >
           
          </iframe>
    </div>
  )
}

export default Localiza