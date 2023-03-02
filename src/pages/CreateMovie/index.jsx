import { FiArrowLeft } from 'react-icons/fi'

import { Container, Form } from "./styles";

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';



export function CreateMovie(){
  return(
    <Container>
      <Header/>  

      <Form>
        <header>
          <ButtonText 
            title='Voltar'
            icon={FiArrowLeft}
          />   
          <h1>Novo filme</h1>
        </header>

        <div>
          <Input placeholder='Titulo'/>
          <Input placeholder='Sua nota (de 0 a 5)'/>
        </div>

        <TextArea 
          placeholder='Sinopse do filme'
        />
          

      </Form>

    </Container>
  )
}