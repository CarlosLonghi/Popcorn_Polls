import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  svg{
    flex-direction: row;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }
`