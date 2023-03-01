import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera, FiSave } from 'react-icons/fi'
import { GiPopcorn } from 'react-icons/gi'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Form, Avatar, Background } from "./styles";

export function Profile(){
  return(
    <Container>
      <header>
        <Button 
          title='Voltar'
          icon={FiArrowLeft}
        />
        <GiPopcorn className='pop-corn'/>
      </header>

      <Form>

        <Avatar>
          <img 
            src="https://github.com/CarlosLonghi.png" 
            alt="Foto do usuário" 
          />
          <label htmlFor="avatar">
            <FiCamera/>

            <input 
              id='avatar'
              type='file'
            />
          </label>
        </Avatar>

        <Input
          placeholder='Nome'
          type='text'
          icon={FiUser}
        />
        <Input
          placeholder='E-mail'
          type='text'
          icon={FiMail}
        />

        <Input
          placeholder='Senha Atual'
          type='password'
          icon={FiLock}
        />
        <Input
          placeholder='Nova Senha'
          type='password'
          icon={FiLock}
        />   

        <Button
          title='Salvar'
          icon={FiSave}
        />
      </Form>

      <Background
        alt='Imagem de uma sala de cinema'
      />

    </Container>
  )
}