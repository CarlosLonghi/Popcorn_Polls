import { FiUser, FiMail, FiLock, FiArrowLeft} from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText';

import { Container, Form, Background } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Form>
        <header>
          <h1>Popcorn Polls</h1>
          <p>Aplicação para acompanhar e avaliar seus filmes preferidos.</p>

          <h2>Crie sua conta</h2>
        </header>

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
          placeholder='Senha'
          type='password'
          icon={FiLock}
        />
        <Input
          placeholder='Confirmar Senha'
          type='password'
          icon={FiLock}
        />

        <Button title='Cadastrar'/>

        <ButtonText 
          id='login'
          title='Voltar para o login'
          icon={FiArrowLeft}
        />

      </Form>
      
      <Background
        alt='Imagem de um projeto de cinema'
      />
    </Container>
  )
}