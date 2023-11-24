import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: 'Lexend', sans-serif;
}

body {
    background-color: #221f1f;
    margin: 0;
}

a {
  text-decoration: none;
}

`;

export default GlobalStyle;
