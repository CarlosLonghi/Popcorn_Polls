import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  svg{
    font-size: 25px;
    flex-direction: row;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  input[type='radio'] {
    display: none;
  }

  .star {
    cursor: pointer;
    transition: color 200ms;
  }
`