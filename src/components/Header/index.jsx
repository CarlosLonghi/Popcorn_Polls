import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>

      <h1>Popcorn Polls</h1>

      <input type="text" />

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