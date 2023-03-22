import { useNavigate } from 'react-router-dom'

import { Container, Content, Text } from './styles'
import { FiArrowLeft, FiClock } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Star } from '../../components/Star'
import { Tag } from '../../components/Tag'


export function PreviewMovie(){
  
  const navigate = useNavigate()
  function handleBack() {
    navigate(-1)
  }

  return(
    <Container>
      <Header/>
      <Content>
        <ButtonText 
          title='Voltar' 
          icon={FiArrowLeft}
          onClick={handleBack}
        />
        
        <div className='title'>
          <h1>Os Vingadores</h1>
          <Star/>
        </div>

        <div className='update'>
          <img src="https://github.com/CarlosLonghi.png" alt="" />
          <p>Por Carlos Longhi</p>
          
          <FiClock/>
          <p>02/03/2023 às 17:00</p>
        </div>

        <div className='tags'>
          <Tag title='herói'/>
          <Tag title='ação' />
          <Tag title='ficção cientifica'/>
        </div>

        <Text>
          <p>
            A primeira aparição dos Vingadores nos quadrinhos foi em sua própria revista, intitulada The Avengers, em Setembro de 1963 (no mesmo mês de estreia de X-Men). A equipe foi criada por Stan Lee, Jack Kirby e Dick Ayers, como uma resposta à Liga da Justiça, cuja revista reunia em uma história os principais heróis da DC Comics. A Liga da Justiça já inspirara uma primeira resposta da Marvel Comics, o Quarteto Fantástico, que todavia era um grupo de heróis novos, assim como o subsequente X-Men. Os Vingadores, reunidos dois anos depois do Quarteto, foram os primeiros da Marvel fiéis ao conceito da equipe de super-heróis já estabelecidos. 
          </p>
          
          <p>
            Diferente de outras equipes do universo Marvel, os Vingadores receberam reconhecimento oficial do governo, quase desde o início com autoridade aceita internacionalmente durante a maior parte de sua história. O grupo é conhecido por reunir os "heróis mais poderosos da Terra" e ao longo de sua história manteve essa premissa, tempo depois houve uma reformulação chefiada pelo Capitão América que recrutou vilões regenerados e tão poderosos como Gavião Arqueiro e os mutantes Mercúrio e sua irmã, a Feiticeira Escarlate. Mas a equipe retomaria sua condição de "a mais poderosa" nos anos 1970, com a proposta de "combater vilões que nenhum herói conseguiria sozinho", e com isso fazendo uma mescla com os membros fundadores e os novos recrutas.
          </p>

          <p>
            Com a finalidade de ser a equipe de "Super-Heróis Mais Poderosos da Terra", os Vingadores tem contatos com humanos, inumanos, heróis mecânicos, vilões regenerados e seres sobrenaturais. A respeito de suas diferenças (que facilmente terminam em brigas), eles têm conseguido se unir em uma equipe coesa, para combater extraordinárias ameaças ao mundo, se reunindo ao som de seu grito de guerra: "Avante, Vingadores!".
          </p>

          <p>
          No Brasil a revista sempre recebeu um cuidado especial da Marvel e teve alguns dos melhores escritores e desenhistas da indústria das histórias em quadrinhos trabalhando nela ao longo dos anos, com o título se mantendo como o favorito dos fãs. A série continua, virtualmente sem interrupções, até os dias atuais, com as histórias explorando a ideia do que significa ser humano ou super-humano, o papel e as responsabilidades de ser um super-herói.
          </p>
         
          <p>
          Dois títulos acompanhantes foram publicados nos anos 1980. Os Vingadores da Costa Oeste Volume 1, foi uma série limitada com quatro edições, com o #1 estreando em Setembro de 1984; Volume 2 (mais tarde renomeada de Vingadores da Costa Oeste a partir do #47) como uma série regular durando 102 edições de Outubro de 1985 a Janeiro de 1994. E Solo Avengers (renomeada para Avengers Spotlight) que durou 40 edições de 1987 a 1989.
          </p>

          <p>
            A revista foi relançada três vezes nos últimos dez anos. A primeira vez, em 1996, era parte da saga Heróis Renascem. A segunda, um ano depois, retornou a equipe à sua continuidade original; e a terceira vez, em 2005, quando surgiram os New Avengers ou os Novos Vingadores, após o fim da antiga equipe, e também como uma estratégia de marketing.            
          </p>
        </Text>
      </Content>
    </Container>
  )
}