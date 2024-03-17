import React from 'react'
import { Container, Box } from '@chakra-ui/react'

const Titulo = ({titulo}) => {
  return (
    <div>
          <Box>
              <h1 id="titulo">{titulo}</h1>
          </Box>
    </div>
  )
}

export default Titulo