import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 5%;

  display: grid;
  grid-template-rows: 115px auto;
  grid-template-areas:
    'header'
    'section'
    'content';

  > Section {
    width: 80%;
    button {
      width: fit-content;
    }
  }
`
export const NewMovie = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.WINE : theme.COLORS.GRAY_100};

  background-color: ${({theme}) => theme.COLORS.WINE};
  padding: 16px 30px;
  border-radius: 10px;

  svg {
    font-size: 20px;
  }
`

export const Content = styled.div`
  grid-area: content;
  width: 80%;
  margin: 0 auto;

  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.WINE};
    border-radius: 30px;
  }
`

export const Films = styled.div`
  padding-right: 10px;
`
