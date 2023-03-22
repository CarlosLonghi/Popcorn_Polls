import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiArrowLeft, FiSave, FiTrash2 } from 'react-icons/fi'
import { Container, Form } from "./styles";

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import {Button} from '../../components/Button'
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section'
import { TagMovie } from '../../components/TagMovie'


export function CreateMovie(){
  
  const navigate = useNavigate()
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')
  
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
          <Input placeholder='Titulo'/>
          <Input placeholder='Sua nota (de 0 a 5)'/>
        </div>

        <TextArea 
          placeholder='Sinopse do filme'
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
          />
        </div>
      </Form>

    </Container>
  )
}