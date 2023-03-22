import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiArrowLeft, FiSave, FiTrash2 } from 'react-icons/fi'
import { Container, Form } from "./styles";

import { api } from '../../services/api';

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import {Button} from '../../components/Button'
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section'
import { TagMovie } from '../../components/TagMovie'


export function CreateMovie(){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState('')

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
      return alert('Informe o titulo do Filme!')
    }

    if(!rating) {
      return alert('De uma nota para o Filme!')
    }

    if(newTag){
      return alert('Você esqueceu de adicionar uma Categoria preenchida! Clique no "+" para adiciona-la!')
    }

    if(tags.length === 0) {
      return alert('Informe pelo menos uma categoria do Filme!')
    }

    await api.post('/movie_notes', {
      title,
      description,
      rating, 
      tags
    })

    alert('Filme criado com sucesso!')
    handleBack()
  }

  return(
    <Container>
      <Header/>  

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
          <Input 
            placeholder='Sua nota (de 0 a 5)'
            onChange={event => setRating(event.target.value)}
          />
        </div>

        <TextArea 
          placeholder='Sinopse do filme'
          onChange={event => setDescription(event.target.value)}
        />
        
        <Section title='Categorias'/>

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
            title='Excluir filme'
            icon={FiTrash2}
          />
          <Button 
            title='Salvar alterações'
            icon={FiSave}
            onClick={handleCreateMovie}
          />
        </div>
      </Form>

    </Container>
  )
}