import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.WINE : theme.COLORS.GRAY_100};

  border: none;
  font-size: 16px;

  transition: all 0.2s;
  
`