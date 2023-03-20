import { FiMail, FiLock, FiUserPlus} from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Form, Background } from "./styles";

export function SignIn() {
  const data = useAuth()
  console.log('Meu contexto: ', data);

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
        />
        <Input
          placeholder='Senha'
          type='password'
          icon={FiLock}
        />
        <Button title='Entrar'/>

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