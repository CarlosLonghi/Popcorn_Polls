import { FiMail, FiLock} from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from "./styles";

export function SignIn() {
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

        <a to='/register'>Criar conta</a>
      </Form>
      
      <Background
        alt='Imagem de um bloco de notas sobre a mesa com um café'
      />
    </Container>
  )
}