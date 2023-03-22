import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: none;
  border-radius: 10px;
  padding: 20px;
  margin: 0 8px 10px 0;

`
export const Content = styled(Link)`
  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  > p {
    padding: 15px 0;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
  > footer {
    width: 100%;
    display: flex;
  }
`