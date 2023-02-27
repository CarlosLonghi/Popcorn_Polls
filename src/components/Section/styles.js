import styled from "styled-components";

export const Container = styled.section`
  margin: 25px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.WINE};

  padding-bottom: 10px;
  margin-bottom: 20px;

  > h2 {
    font-weight: 400;
    white-space: nowrap;
  }
`