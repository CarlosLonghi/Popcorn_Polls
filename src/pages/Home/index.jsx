import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { FiPlus } from 'react-icons/fi'
import { Container, NewMovie, Content } from './styles'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Movie } from '../../components/Movie'
import { Button } from '../../components/Button'


export function Home(){
  const [search, setSearch] = useState('')

  const [movies, setMovies] = useState([])

  const navigate = useNavigate()

  function handleCreateMovie() {
    navigate('/movie_notes')
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movie_notes?title=${search}`)
      setMovies(response.data)
    }

    fetchMovies()
  },[search])

  return (
    <Container>
      <Header
        onChange={e => setSearch(e.target.value)}
      />
    
      <NewMovie to='/movie_notes'>
        <h2>Meus filmes</h2>

        <Button
          title='Adicionar filme'
          icon={FiPlus}
          onClick={handleCreateMovie}
        />
      </NewMovie>
      
      <Content>  
        <Section>
          {
            movies.map(movie => (
              <Movie 
                key={String(movie.id)}
                data={movie} 
              />
            ))
          }
        </Section>  
      </Content>
      
    </Container>
  )
}