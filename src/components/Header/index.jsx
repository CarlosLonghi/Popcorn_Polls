import { useAuth } from '../../hooks/auth'
import { Container, Brand, Search, Profile } from "./styles";
import { FiSearch, FiLogOut } from 'react-icons/fi'

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
          <Link to='/profile'>
            <strong>Carlos Longhi</strong>
            <img 
              src="https://github.com/CarlosLonghi.png" 
              alt="Foto do usuário" 
            />
          </Link>

          <ButtonText 
            title='sair'
            icon={FiLogOut}
            onClick={signOut}
          />
        </div>
      </Profile>
      
    </Container>
  )
}