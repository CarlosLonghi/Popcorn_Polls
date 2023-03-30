import { Link } from "react-router-dom";

import { FiSearch, FiLogOut } from 'react-icons/fi'
import { GiPopcorn } from 'react-icons/gi'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Container, Brand, Search, Profile } from "./styles";

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'

export function Header({onChange}) {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>

      <Brand>
        <h1>Popcorn Polls</h1>
        <GiPopcorn/>
      </Brand>

      <Search>
        <Input
          placeholder='Pesquisar pelo título'
          icon={FiSearch}
          onChange={onChange}
        />
      </Search>

      <Profile>
        <div>
          <Link to='/profile'>
            <strong>{user.name}</strong>
            <img 
              src={avatarUrl}
              alt={`Foto de perfil de ${user.name}`} 
            />
          </Link>

          <ButtonText 
            title='sair'
            icon={FiLogOut}
            onClick={signOut}
            to='/'
          />
        </div>
      </Profile>
      
    </Container>
  )
}