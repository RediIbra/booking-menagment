import styled from "styled-components";

// export const Container = styled.div `
//   width: 80%;
//   height: 90vh;
//   position: fixed;
//   margin: auto;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

export const DividerLine = styled.div `
  /* width: 
  
  
  
  
  0%; */
  height: 0px;
  border: 1px solid black;
`;

export const DnDZone = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed grey;
  padding: 30px;
  &:hover {
    cursor: pointer;
  }
`;