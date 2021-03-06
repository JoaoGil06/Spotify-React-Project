import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body::-webkit-scrollbar {
    display: none;
  }

  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
  }

  input {
    border: 0;

    &:focus {
      outline: none;
    }
  }

`;
