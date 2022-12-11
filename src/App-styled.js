import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const WrapperContainer = styled.div`
  width: 1340px;
  margin: 0 auto;
  padding: 0 10px;
  border: 1px solid black;
`;

export const GlobalStyle = createGlobalStyle`
body {
margin: 0;
padding: 0;
box-sizing: border-box;
}
`;

