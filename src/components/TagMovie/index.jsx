import { FiPlus, FiTrash2 } from 'react-icons/fi'

import { Container } from './styles'

export function TagMovie({ isNew, value, onClick, ...rest}){
  return (
    <Container isNew={isNew}>
      <input 
        type="text" 
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type='button'
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        { isNew ? <FiPlus/> : <FiTrash2/>}
      </button>
    </Container>
  )
}