import React from 'react'
import { Button, ButtonGroup, Box, Text, HStack, Textarea } from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaPhone, FaInstagram, FaUserEdit, FaWhatsapp } from "react-icons/fa";

const AulaExperimental = () => {
    return (
        <div className='aex'>
            <div className="outradiv">
                <h1>Agende uma aula experimental!</h1>
                <Button width='20%' marginTop='3%' colorScheme='whatsapp' leftIcon={<FaWhatsapp size={27} />}>Whatsapp</Button>
            </div>

        </div>
    )
}

export default AulaExperimental