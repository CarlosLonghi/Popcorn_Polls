import { useState } from 'react'
import { FiMail, FiLock, FiUserPlus} from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Form, Background } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn(){
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <header>
          <h1>Popcorn Polls</h1>
          <p>Aplicação para acompanhar e avaliar seus filmes preferidos.</p>

          <h2>Faça seu Login</h2>
        </header>

        <Input
          placeholder='E-mail'
          type='text'
          icon={FiMail}
          onChange={event => setEmail(event.target.value)}
        />
        <Input
          placeholder='Senha'
          type='password'
          icon={FiLock}
          onChange={event => setPassword(event.target.value)}
        />

        <Button 
          title='Entrar' 
          onClick={handleSignIn}
        />

        <ButtonText 
          title='Criar conta'
          icon={FiUserPlus}
          to='/register'
        />

      </Form>
      
      <Background
        alt='Imagem de uma sala de cinema'
      />
    </Container>
  )
}