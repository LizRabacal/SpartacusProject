import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'


const Matricula = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
      <>
          <Button ref={btnRef} colorScheme='yellow' onClick={onOpen} >
             MATRICULE-SE
          </Button>
          <Drawer
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
              finalFocusRef={btnRef}
          >
              <DrawerOverlay />
              <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Create your account</DrawerHeader>

                  <DrawerBody>
                      <Input placeholder='Type here...' />
                  </DrawerBody>

                  <DrawerFooter>
                      <Button variant='outline' mr={3} onClick={onClose}>
                          Cancelar
                      </Button>
                      <Button colorScheme='yellow'>Enviar</Button>
                  </DrawerFooter>
              </DrawerContent>
          </Drawer>
      </>
  )
}

export default Matricula