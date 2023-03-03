import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 5%;

  display: grid;
  grid-template-rows: 115px auto;
  grid-template-areas:
    'header'
    'form';
`

export const Form = styled.form`
  grid-area: form;
  width: 80%;
  margin: 30px auto;

  > header {
    h1 {
      margin-top: 20px;
      font-weight: 400;
    }
  }

  .title {
    display: flex;
    gap: 30px;
    padding: 20px 0;
  }

  > Section {
    margin-bottom: 20px;
  }

  .tags {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 10px;
    padding: 16px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    gap: 30px;

    button:nth-child(2) {
      background-color: ${({ theme }) => theme.COLORS.GREEN};
    }
  }
`
