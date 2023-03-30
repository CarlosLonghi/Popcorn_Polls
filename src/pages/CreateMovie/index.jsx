import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiArrowLeft, FiSave } from 'react-icons/fi'
import { ImCancelCircle } from 'react-icons/im'
import { Container, Form } from "./styles";

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import {Button} from '../../components/Button';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { TagMovie } from '../../components/TagMovie';
import { RiStarFill } from 'react-icons/ri';

import { ToastContainer , toast } from 'react-toastify';

export function CreateMovie(){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null);

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()
  
  function handleBack(){
    navigate(-1)
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleCreateMovie() {
    if(!title) {
      return toast.info('Informe o titulo do Filme!')
    }

    if(!rating) {
      return toast.info('De uma nota para o Filme!')
    }

    if(newTag){
      return toast.info('Você esqueceu de adicionar uma Categoria preenchida! Clique no "+" para adiciona-la!')
    }

    if(tags.length === 0) {
      return toast.info('Informe pelo menos uma categoria do Filme!')
    }

    await api.post('/movie_notes', {
      title,
      description,
      rating, 
      tags
    })

    toast.success('Filme criado com sucesso!')
    setTimeout(() => handleBack(), 2000)
  }

  return(
    <Container>
      <Header/>  

      <ToastContainer 
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Form>
        <header>
          <ButtonText 
            title='Voltar'
            icon={FiArrowLeft}
            onClick={handleBack}
          />   
          <h1>Novo filme</h1>
        </header>

        <div className='title'>
          <Input 
            placeholder='Titulo'
            onChange={event => setTitle(event.target.value)}
          />

          <div className='rating'>
            <h2>Nota:</h2>
          {
            [...Array(5).keys()].map( i => {
            const ratingValue = i + 1;

            return (
              <label key={i} htmlFor={`star-${ratingValue}`}>
                <input
                  id={`star-${ratingValue}`}
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => {setRating(ratingValue)}}
                />
                <RiStarFill
                  className="star"
                  color={ratingValue <= (hover || rating) ? 'gold' : 'gray'}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
              );
            })
          }
          </div>
        </div>

        <TextArea 
          placeholder='Sinopse do filme (opcional)'
          onChange={event => setDescription(event.target.value)}
        />
        
        <h2>Categorias</h2>

        <div className='tags'>
          {
            tags.map((tag, index) => (
              <TagMovie 
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))
          }

          <TagMovie 
            isNew
            placeholder='Nova Categoria' 
            value={newTag}
            onChange={event => setNewTag(event.target.value)}
            onClick={handleAddTag}
          />
          
        </div>

        <div className='buttons'>
          <Button 
            title='Cancelar'
            icon={ImCancelCircle}
            onClick={handleBack}
          />
          <Button 
            title='Salvar'
            icon={FiSave}
            onClick={handleCreateMovie}
          />
        </div>
      </Form>

    </Container>
  )
}