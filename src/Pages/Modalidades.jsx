import { useContext, useState } from 'react'
import CardM from '../Components/Card'
import { CounterContext } from '../Contexts/CounterContext'
import Titulo from '../Components/Titulo'
import Footer from '../Components/Footer'

const Modalidades = () => {
  const { counter, setCounter } = useContext(CounterContext)
  const [modalidades, setModalidades] = useState([
    { id: 1, nome: 'KICKBOXING', subtitulo: 'Luta e condicionamento', descricao: 'O Kickboxing é uma arte marcial de combate que combina técnicas de boxe com chutes de várias artes marciais, incluindo karatê e muay thai. É uma atividade física completa que melhora o condicionamento cardiovascular, a força, a flexibilidade e a coordenação motora.', img: '/kick.jpg', url: '' },
    { id: 2, nome: 'MUAY THAI', subtitulo: 'Arte marcial tailandesa', descricao: 'O Muay Thai, também conhecido como Boxe Tailandês, é uma arte marcial tailandesa que utiliza os oito membros do corpo humano: punhos, cotovelos, joelhos e pernas. É conhecido como a "arte dos oito membros" e é famoso por sua eficácia em combate corpo a corpo.', img: '/muay.jpg', url: '' },
    { id: 3, nome: 'TREINO FUNCIONAL', subtitulo: 'Exercícios variados', descricao: 'O Treinamento Funcional é uma modalidade de exercício físico que utiliza movimentos naturais do corpo humano, como puxar, empurrar, agachar, girar e levantar, em um ambiente que busca desenvolver força, equilíbrio, coordenação, resistência e flexibilidade.', img: '/TF.jpg', url: '' },
    { id: 4, nome: 'MUSCULAÇÃO', subtitulo: 'Fortalecimento muscular', descricao: 'A Musculação é um tipo de exercício que utiliza pesos ou resistência para fortalecer e desenvolver os músculos. Além de melhorar a força e a resistência muscular, a musculação também pode ajudar na perda de peso, no aumento da densidade óssea e na melhoria da saúde geral.', img: '/musculacao.jpg', url: '' },
    {id: 5,nome: 'TREINO INFANTIL',subtitulo: 'Exercícios divertidos para crianças',descricao: 'O Treino Infantil é uma modalidade de exercício físico adaptada especificamente para crianças, focando em atividades lúdicas e divertidas que promovam o desenvolvimento motor, a coordenação, a força e a saúde geral das crianças. Inclui versões adaptadas das modalidades de Kickboxing, Muay Thai, Treino Funcional e Musculação, adequadas para crianças.',
      img: '/kids.jpg',
      url: ''
    }

  ]);
  return (

    <>
      <Titulo titulo="Modalidades" />
    <div className='MODALIDADES'>

      {modalidades.map((m) => <CardM key={m.id} nome={m.nome + " - "+ m.subtitulo.toUpperCase()} descricao={m.descricao} img={m.img} /> )
     }
    </div>
      <Footer />

    </>
  )
}

export default Modalidades