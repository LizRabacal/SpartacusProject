import React from 'react'
import { Link } from "react-router-dom";
 
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
const Valor = () => {
    const daysOfWeek = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
    const times = ['6h00 às 7h00', '8h00 às 9h00', '9h00 às 10h00', '17h00 às 18h00', '18h00 às 19h00', '19h00 às 20h00'];
  return (
    <div id='valor'>
        <div className="dois">
              <h1>Confira a nossa grade horária</h1>
              <Link to='/modalidades'>Confira as nossas modalidades</Link>
        </div>
       
          <div className="tabela"  maxWidth='100%'>
            <div className="tabela2">
              <TableContainer id='custom-scrollbar' height='100%' >
                      <Table size='lg' variant='striped' height='100%' colorScheme='yellow' maxWidth='100%'>
                      <TableCaption color='grey'>Horários Disponíveis</TableCaption>
                      <Thead>
                          <Tr >
                              <Th></Th> {/* Placeholder para o canto superior esquerdo da tabela */}
                              {daysOfWeek.map(day => (
                                  <Th key={day} >{day}</Th>
                              ))}
                          </Tr>
                      </Thead>
                      <Tbody>
                          {times.map(time => (
                              <Tr key={time}>
                                  <Th >{time}</Th>
                                  {daysOfWeek.map(day => time == '17h00 às 18h00' ?(
                                      <Td  color='grey' fontWeight={600} key={`${day}-${time}`}>Treino kids</Td>
                                  ) :
                                      <Td color='grey'fontWeight={600} key={`${day}-${time}`}>Todas as <Link to='/modalidades'>modalidades</Link></Td>)}
                              </Tr>
                          ))}
                      </Tbody>
                  </Table>
              </TableContainer>
              </div>
          </div>
    </div>
  )
}

export default Valor