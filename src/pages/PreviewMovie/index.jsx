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
import { Button } from '../../components/Button'
import { Star } from '../../components/Star'
import { Tag } from '../../components/Tag'

import { ToastContainer, toast } from 'react-toastify'

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

  function handleDeleteItem() {
    toast.warning(
      <div>
        <p>Tem certeza que deseja excluir esse filme?</p>
        <div className='confirm-alert'>
          <button onClick={() => toast.dismiss()}>Cancelar</button>
          <button onClick={() => deleteItem()}>Excluir</button>
        </div>
      </div>,
      { autoClose: false,
        position: "top-center",
        hideProgressBar: true,
        closeOnClick: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      }
    );
  }

  async function deleteItem(){
    await api.delete(`/movie_notes/${params.id}`)
    setTimeout(handleBack(), 2000)
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

      <ToastContainer/>
      {
        data &&
        <Content>
          <header>
            <ButtonText 
              title='Voltar' 
              icon={FiArrowLeft}
              onClick={handleBack}
            />

            <Button 
              title='Excluir' 
              icon={MdDeleteForever}
              onClick={handleDeleteItem}
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