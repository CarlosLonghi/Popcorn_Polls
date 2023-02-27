import styled from 'styled-components'

export const Container = styled.span`
  font-size: 14px;
  font-weight: 500;
  padding: 5px 14px;
  border-radius: 5px;
  margin-right: 10px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.WINE};
  box-shadow: 5px 5px 5px ${({theme}) => theme.COLORS.BACKGROUND_900};
`