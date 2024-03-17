import React, { Component } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import Titulo from './Titulo'
import { MdArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button, Text } from '@chakra-ui/react'
import { GiStrongMan } from "react-icons/gi";
import { GiHighKick } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import SobreNos from "./SobreNos";
const Beneficios = () => {
    const beneficioslist = [
        {
            id: 1,
            titulo: 'Condicionamento Completo',
            icone: <GiStrongMan size={120} color="#ECC94B"/>, // Preencha com o ícone correspondente
            texto: 'Oferecemos kickboxing, muay thai, musculação, treino kids e funcional para melhorar sua saúde física.'
        },
        {
            id: 2,
            titulo: 'Defesa Pessoal Eficaz',
            icone: <GiHighKick size={120} color="#ECC94B" />, // Preencha com o ícone correspondente
            texto: 'Aprenda técnicas eficazes de autodefesa para se proteger em situações adversas.'
        },
        {
            id: 3,
            titulo: 'Bem-estar Mental',
            icone: <RiMentalHealthFill size={120} color="#ECC94B" />, // Preencha com o ícone correspondente
            texto: 'Reduza o estresse, aumente a concentração e encontre equilíbrio mental em nossas aulas.'
        },
        {
            id: 4,
            titulo: 'Comunidade Acolhedora',
            icone: <FaPeopleGroup size={110} color="#ECC94B" />, // Preencha com o ícone correspondente
            texto: 'Conecte-se com uma comunidade solidária de praticantes com interesses similares.'
        }
    ];



    return (
        <div className="beneficios1">
            <div className='Beneficios'>

                <div className="sobre">
                            <h1 style={{textAling: 'center'}}>Fique por dentro dos benefícios que a Academia Spartacus oferece</h1>
                    <SimpleGrid spacing={4} padding='2%' marginTop='3%' id='sg' templateColumns='repeat(auto-fill, minmax(600px, 1fr))'>

                    {beneficioslist.map((b) => (<>

                        <div className="topico" width='100%' >
                            {b.icone}

                            <div className="tet">
                                <h2>{b.titulo}</h2>

                                <span>{b.texto}</span>
                            </div>


                        </div>

                    </>))}
                    </SimpleGrid >






                </div>

                <SobreNos />

                <div className="slider-container" style={{ display: 'flex' }}>

                    <div className="prev">
                        <MdArrowBackIos />
                    </div>

                    <Swiper
                        className="sample-slider"
                        modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
                        loop={true}
                        autoplay={{ delay: 1200 }}
                        navigation={{
                            prevEl: '.prev',
                            nextEl: '.next'
                        }}
                        slidesPerView={4}
                        style={{ width: '85%' }}
                        spaceBetween={70}

                    >

                        <SwiperSlide id='items' ><img src="/IMG_6190.jpeg" /></SwiperSlide>
                        <SwiperSlide id='items' ><img src="/IMG_6191.jpg" /></SwiperSlide>
                        <SwiperSlide id='items' ><img src="/S.png" /></SwiperSlide>
                        <SwiperSlide id='items' ><img src="/IMG_6191.jpg" /></SwiperSlide>
                        <SwiperSlide id='items'  ><img src="/IMG_6190.jpeg" /></SwiperSlide>
                        <SwiperSlide id='items' ><img src="/IMG_6191.jpg" /></SwiperSlide>
                        <SwiperSlide id='items' ><img src="/S.png" /></SwiperSlide>
                    </Swiper>
                    <div className="next">
                        <MdOutlineArrowForwardIos />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Beneficios