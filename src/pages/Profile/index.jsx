import { useState } from 'react'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera, FiSave } from 'react-icons/fi'
import { GiPopcorn } from 'react-icons/gi'

import { useAuth } from '../../hooks/auth'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'

import { Container, Form, Avatar, Background } from "./styles";

export function Profile(){
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  async function handleUpdate() {
    const user = {
      name, 
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    await updateProfile({ user })
  }

  return(
    <Container>
      <header>
        <ButtonText 
          to='/'
          title='Voltar'
          icon={FiArrowLeft}
        />
        <GiPopcorn size={50}/>
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
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <Input
          placeholder='E-mail'
          type='text'
          icon={FiMail}
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <Input
          placeholder='Senha Atual'
          type='password'
          icon={FiLock}
          onChange={event => setPasswordOld(event.target.value)}
        />
        <Input
          placeholder='Nova Senha'
          type='password'
          icon={FiLock}
          onChange={event => setPasswordNew(event.target.value)}
        />   

        <Button
          title='Salvar'
          icon={FiSave}
          onClick={handleUpdate}
        />
      </Form>

      <Background
        alt='Imagem de uma sala de cinema'
      />

    </Container>
  )
}