import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { format } from 'date-fns'

import { Container, Content, Text } from './styles'
import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { MdDeleteForever } from 'react-icons/md'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Star } from '../../components/Star'
import { Tag } from '../../components/Tag'


export function PreviewMovie(){
  const [data, setData] = useState(null)
  const { user } = useAuth()
  const formattedDate = data ? format(
    new Date(data.created_at), 'dd/MM/yyyy'
  ):""
  
  const params = useParams()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm('Deseja remover esse Filme?')

    if(confirm){
      await api.delete(`/movie_notes/${params.id}`)
      handleBack()
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/movie_notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  },[])


  return(
    <Container>
      <Header/>

      {
        data &&
        <Content>
          <header>
            <ButtonText 
              title='Voltar' 
              icon={FiArrowLeft}
              onClick={handleBack}
            />

            <ButtonText 
              title='Excluir' 
              icon={MdDeleteForever}
              onClick={handleRemove}
            />
          </header>
          
          <div className='title'>
            <h1>
              {data.title}
            </h1>
            <Star 
              value={data.rating}
            />
          </div>

          <div className='create'>
            <img 
              src={avatarUrl} 
              alt={`imagem de perfil de ${user.name}`} />
            <p>
              {user.name}
            </p>
            
            <FiClock/>
            <p>{formattedDate}</p>
          </div>

          {
            data.tags && 
            <div className='tags'>
              {
                data.tags.map(tag => (
                  <Tag 
                    key={String(tag.id)}
                    title={tag.name}
                  />
                ))
              }
            </div>
          }

          <Text>
            <p>{data.description}</p>
          </Text>
        </Content>
      }

    </Container>
  )
}