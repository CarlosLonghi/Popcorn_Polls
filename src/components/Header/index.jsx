import { Input } from '../Input'

import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>

      <h1>Popcorn Polls</h1>

      <Input
        placeholder='Pesquisar pelo título'
      />

      <Profile>
        <div>
          <strong>Carlos Longhi</strong>
          <a href="#">sair</a>
        </div>

        <img src="https://github.com/CarlosLonghi.png" alt="Foto do usuário" />
      </Profile>
      
    </Container>
  )
}