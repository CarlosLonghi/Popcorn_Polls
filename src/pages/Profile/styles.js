import styled from 'styled-components'

import backgroundImg from '../../assets/bg_profile.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 145px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15%;
  }
`

export const Form = styled.form`
  max-width: 400px;
  margin: 30px auto 0;

  > div:nth-child(3) {
    margin-bottom: 24px;
  }

  > Button {
    margin-top: 24px;
    :hover {
      scale: 1.05;
    }
  }
`
export const Avatar = styled.div`
  position: relative;
  margin: -100px auto 64px;

  width: 185px;
  height: 185px;

  > img {
    width: 185px;
    height: 185px;
    border-radius: 50%;
    box-shadow: 8px 5px 5px ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.WINE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    transition: all 0.2s ease-in;
    :hover {
      scale: 1.1;
      filter: brightness(1.1);
    }

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  position: fixed;
  top: 0;
  z-index: -100;
  height: 100vh;
  width: 100%;
`
