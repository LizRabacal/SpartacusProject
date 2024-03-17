import React from 'react'
import { Container, Box } from '@chakra-ui/react'
import Titulo from './Titulo'
const ContainerText = ({ children }) => {
    return (
        <><Container maxW='80%'  bg='yellow.400' centerContent>
           
            <Box padding='10' bg='grey' color='black' maxW='80%'>
                {children}
            </Box>

        </Container></>
    )
}

export default ContainerText