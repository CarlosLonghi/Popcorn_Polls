import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;

  grid-area: section;
  width: 80%;
  margin: 10px auto 10px;
  
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.WINE};

  > h2 {
    font-weight: 400;
  }
`