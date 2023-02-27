import { Container } from './styles'
import { Tag } from '../Tag'
import { Star } from '../Star'

export function Movie({data, ...rest}){
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Star/>

      <p>
        {data.description}
      </p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => (
              <Tag key={tag.id} title={tag.name}/>
            ))
          }
        </footer>
      }
    </Container>
  )
}
