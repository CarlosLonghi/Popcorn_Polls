import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  height: 115px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;

  > h1 {
    color: ${({theme}) => theme.COLORS.WINE};
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  > img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    align-items: flex-end;
  }

  > strong {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  a {
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    :hover {
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`
