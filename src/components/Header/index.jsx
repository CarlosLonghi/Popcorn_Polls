import { Container, Brand, Search, Profile } from "./styles";
import { FiSearch } from 'react-icons/fi'

import { Input } from '../Input'

export function Header() {
  return (
    <Container>

      <Brand>
        <h1>Popcorn Polls</h1>
      </Brand>

      <Search>
        <Input
          placeholder='Pesquisar pelo título'
          icon={FiSearch}
        />
      </Search>

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