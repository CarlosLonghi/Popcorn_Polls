import { Container } from './styles'
import { Tag } from '../Tag'

export function Movie({data, ...rest}){
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
    </Container>
  )
}
