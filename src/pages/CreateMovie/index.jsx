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
  return(
    <Container>
      <Header/>  

      <Form>
        <header>
          <ButtonText 
            to='/'
            title='Voltar'
            icon={FiArrowLeft}
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
          <TagMovie placeholder='Nova Categoria' isNew/>
          <TagMovie value='ficção cientifica'/>
          <TagMovie value='aventura'/>
          <TagMovie value='ação'/>
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