import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 5%;

  display: flex;
  flex-direction: column;

  > Section {
    width: 80%;
    button {
      width: fit-content;
    }
  }
`
export const NewMovie = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
  
  h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-weight: 500;
  }

  button {
    width: fit-content;
  }
`

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;

  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.WINE};
    border-radius: 30px;
  }
`
