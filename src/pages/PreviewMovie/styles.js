import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 5%;

  display: grid;
  grid-template-rows: 115px auto;
  grid-template-areas:
    'header'
    'content';

  >Header {
    div:nth-child(2) {
      display: none;
    }
  }
`

export const Content = styled.div`
  grid-area: content;
  width: 80%;
  margin: 30px auto;

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

  .title {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 15px 0;
  }

  .update {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.GREEN};
      font-size: 25px;
    }
  }

  .tags {
    display: flex;
    padding: 30px 0;
  }
`
export const Text = styled.div`
  grid-area: text;
  margin-right: 20px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  > p {
    margin-bottom: 10px;
  }
`
