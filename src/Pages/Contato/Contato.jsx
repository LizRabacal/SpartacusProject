import React from 'react'
import './Contato.css'
import { Button, ButtonGroup, Box, Text, HStack, Textarea } from '@chakra-ui/react'
import { Input, Alert, AlertIcon, Stack, InputLeftAddon, InputLeftElement, InputGroup, IconButton } from '@chakra-ui/react';
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaPhone , FaInstagram, FaUserEdit, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Titulo from '../../Components/Titulo';
import { FaLocationDot } from "react-icons/fa6";
import Footer from '../../Components/Footer'

const Contato = () => {
    return (
        <>
            <Titulo titulo="Contato" />
            <div className="contato">
                <div className="redes">

                    <Button id='btn1' colorScheme='facebook' leftIcon={<FaFacebook size={27}/>}>
                        Facebook
                    </Button>
                    <Button id='btn1' colorScheme='twitter' leftIcon={<FaTwitter size={27} />}>
                        Twitter
                    </Button>
                    <Button id='btn1' colorScheme='pink' leftIcon={<FaInstagram size={27} />}>
                        Instagram
                    </Button>
                    <Button id='btn1' colorScheme='whatsapp' leftIcon={<FaWhatsapp size={27} />}>Whatsapp</Button>
                    <div className="btn2">
                        <IconButton
                            variant='outline'
                            colorScheme='red'
                            aria-label='Send email'
                            size='lg'
                            icon={<MdOutlineMail size={27}/>}
                        />
                        <span>spartacus@gmail.com</span>
                    </div>

                    <div className="btn2">
                        <IconButton
                            variant='outline'
                            colorScheme='teal'
                            aria-label='Send email'
                            size='lg'
                            icon={<FaPhone />}
                        />
                        <span>(71) 99271-4751</span>
                    </div>
                    <div className="btn2">
                        <IconButton
                            variant='outline'
                            colorScheme='blue'
                            aria-label='Send email'
                            size='lg'
                            icon={<FaLocationDot />}
                        />
                        <Text color='white' marginLeft='3%'>R. 7 de Setembro, 77 - Centro, Candeias - BA, 43805-350</Text>
                    </div>


                </div>
              

                <form action="" className="formctt">
                    <HStack alignItems='center' flexDirection='column' spacing={8}>
                        <Box>
                            <Text>Nome:</Text>
                            <InputGroup border='black'>

                                <InputLeftElement>
                                    <FaUserEdit size={25} />
                                </InputLeftElement>

                                <Input type='text' size='md' width='500px' color='grey' variant='filled' placeholder='insira o seu nome' required />
                            </InputGroup>

                        </Box>

                        <Box>
                            <Text>E-mail:</Text>
                            <InputGroup border='black'>

                                <InputLeftElement>
                                    <MdEmail size={25} />
                                </InputLeftElement>

                                <Input type='text' size='md' width='500px' color='grey' variant='filled' placeholder='insira o seu e-mail' required />
                            </InputGroup>

                        </Box>

                        <Box>
                            <Text>Telefone:</Text>
                            <InputGroup border='black'>

                                <InputLeftElement>
                                    <FaPhone size={20} />
                                </InputLeftElement>

                                <Input type='text' size='md' width='500px' color='grey' variant='filled' placeholder='insira o seu telefone' required />
                            </InputGroup>

                        </Box>

                        <Box>
                            <Text>Mensagem:</Text>
                            <InputGroup border='black'>

                                <Textarea type='text' size='md' width='500px' height='100px' color='grey' variant='filled' placeholder='insira a mensagem' required />
                            </InputGroup>

                        </Box>
                     
                     <Button colorScheme='yellow' width='100%'>Enviar</Button>



                    </HStack>
                    

                    </form>

               
            </div>
            <Footer />

        </>
    )
}

export default Contato