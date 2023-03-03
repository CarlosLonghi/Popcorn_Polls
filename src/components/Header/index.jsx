import { Container, Brand, Search, Profile } from "./styles";
import { FiSearch } from 'react-icons/fi'

import { Link } from "react-router-dom";

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'

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
          <ButtonText 
            title='Carlos Longhi' 
            to='/profile'
          />
          <a href="#">sair</a>
        </div>

        <Link to='/profile'>
          <img src="https://github.com/CarlosLonghi.png" alt="Foto do usuário" />
        </Link>
      </Profile>
      
    </Container>
  )
}