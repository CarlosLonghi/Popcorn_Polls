import {Container} from './styles'
import { Button } from '../Button'
import { FiPlus } from 'react-icons/fi'
 
export function Section({title, children}){
  return (
    <Container>
      <h2>{title}</h2>

      {children}
    </Container>
  )
}