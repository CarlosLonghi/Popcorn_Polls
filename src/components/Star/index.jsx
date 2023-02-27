import {Container} from './styles'
import { RiStarLine, RiStarFill } from 'react-icons/ri'

export function Star({ data, className, ...rest }) {
  return(
    <Container {...rest}>
      <RiStarFill/>
      <RiStarFill/>
      <RiStarFill/>
      <RiStarFill/>
      <RiStarLine/>
    </Container>
  )
}