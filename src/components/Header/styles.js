import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  min-height: 115px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 10%;
  > h1 {
    color: ${({theme}) => theme.COLORS.WINE};
    white-space: nowrap;
    text-shadow: 5px 5px 5px ${({theme}) => theme.COLORS.BACKGROUND_900};
  }
  > svg {
    font-size: 40px;
  }
`

export const Search = styled.div`
  width: 100%;
  grid-area: search;
  padding: 0 5% 0;
`

export const Profile = styled.div`
  padding-right: 10%;
  grid-area: profile;
  display: flex;
  align-items: center;
  white-space: nowrap;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;

    > strong {
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
`
