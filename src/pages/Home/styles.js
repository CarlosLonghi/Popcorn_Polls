import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 10% 50px;

  display: grid;
  grid-template-rows: 115px auto;
  grid-template-areas:
    'header'
    'section'
    'content';
    
  > Section {
    button {
      width: fit-content;
    }
  }
`
export const Content = styled.div`
  grid-area: content;
  padding-right: 10px;
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
