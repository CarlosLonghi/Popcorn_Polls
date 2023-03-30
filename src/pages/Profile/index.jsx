import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera, FiSave } from 'react-icons/fi'
import { GiPopcorn } from 'react-icons/gi'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Container, Form, Avatar, Background } from "./styles";

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { ToastContainer, toast } from 'react-toastify'

export function Profile(){
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleUpdate() {
    const updated = {
      name, 
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user:userUpdated, avatarFile })

    setTimeout(handleBack(), 1000)
  }

  async function handleChangeAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return(
    <Container>
      <ToastContainer
        position= "top-center"
        autoClose= {2000}
        hideProgressBar= {true}
        closeOnClick= {false}
        pauseOnHover= {false}
        draggable= {false}
        progress= {undefined}
        theme= "dark"
      />
      <header>
        <ButtonText 
          title='Voltar'
          icon={FiArrowLeft}
          onClick={handleBack}
        />
        <GiPopcorn size={50}/>
      </header>

      <Form>
        <Avatar>
          <img 
            src={avatar} 
            alt= {`Foto de ${user.name}`} 
          />
          <label htmlFor="avatar">
            <FiCamera/>

            <input 
              id='avatar'
              type='file'
              onChange={handleChangeAvatar}
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