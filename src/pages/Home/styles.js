import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 115px auto;
  grid-template-areas:
    'header'
    'content';
`
export const Content = styled.div`
  grid-area: content;
  padding: 0 10%;

  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.WINE};
    border-radius: 30px;
  }

  button {
    width: fit-content;
  }
`
