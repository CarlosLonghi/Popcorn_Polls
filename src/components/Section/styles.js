import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.WINE};
  
  margin: 10px 0 20px;
  padding-bottom: 10px;

  > h2 {
    font-weight: 400;
    white-space: nowrap;
  }
`