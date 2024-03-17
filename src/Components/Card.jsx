import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button, Image, Stack, Text } from '@chakra-ui/react'
const CardM = (props) => {
    return (
        <div>
            <Card
            margin={4}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                bg="rgba(0, 0, 0, 0.5);"
                color='white'
                border='none'
                boxShadow="box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;"
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={props.img}
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>{props.nome}</Heading>

                        <Text py='2'>
                            {props.descricao}
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='yellow'>
                            Saber mais
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>

        </div>
    )
}

export default CardM