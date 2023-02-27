import { FiPlus } from 'react-icons/fi'
import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'


export function Home(){
  return (
    <Container>
      <Header/>
      <Content>
        <Section title='Meus filmes'>
          <Button title='Adicionar filme' icon={FiPlus}/>
        </Section>

        <div>

        </div>

      </Content>
      
    </Container>
  )
}