import { useAuth } from '../../hooks/auth'
import { Container, Brand, Search, Profile } from "./styles";
import { FiSearch } from 'react-icons/fi'

import { Link } from "react-router-dom";

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'

export function Header() {
  const { signOut } = useAuth()

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
          <button onClick={signOut}>sair</button>
        </div>

        <Link to='/profile'>
          <img src="https://github.com/CarlosLonghi.png" alt="Foto do usuário" />
        </Link>
      </Profile>
      
    </Container>
  )
}