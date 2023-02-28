import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 145px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 120px;

    background: ${({ theme }) => theme.COLORS.WINE};
    opacity: 0.9;

    > Button {
      width: fit-content;
      justify-content: left;
      background-color: transparent;
    }
  }
`

export const Form = styled.form`
  max-width: 350px;
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
  margin: -120px auto 64px;

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
