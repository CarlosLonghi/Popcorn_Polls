import { FiPlus } from 'react-icons/fi'
import { Container, Content, Films } from './styles'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Movie } from '../../components/Movie'


export function Home(){
  return (
    <Container>
      <Header/>
      <Section title='Meus filmes'>
        <Button title='Adicionar filme' icon={FiPlus}/>
      </Section>

      <Content>    
          <Movie
            data={
              {
                title: 'Os Vingadores',
                rating: 4,
                description: `
                Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.
                `,
                tags: [
                  {id: 1, name: 'ação'},
                  {id: 2, name: 'herói'},
                  {id: 3, name: 'marvel'}
                ],
              } 
            } 
          />

          <Movie
            data={
              {
                title: 'Os Vingadores',
                rating: 4,
                description: `
                Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.
                `,
                tags: [
                  {id: 1, name: 'ação'},
                  {id: 2, name: 'herói'},
                  {id: 3, name: 'marvel'}
                ],
              } 
            } 
          />

          <Movie
            data={
              {
                title: 'Os Vingadores',
                rating: 4,
                description: `
                Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.
                `,
                tags: [
                  {id: 1, name: 'ação'},
                  {id: 2, name: 'herói'},
                  {id: 3, name: 'marvel'}
                ],
              } 
            } 
          />

          <Movie
            data={
              {
                title: 'Os Vingadores',
                rating: 4,
                description: `
                Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.
                `,
                tags: [
                  {id: 1, name: 'ação'},
                  {id: 2, name: 'herói'},
                  {id: 3, name: 'marvel'}
                ],
              } 
            } 
          />  
      </Content>
      
    </Container>
  )
}