import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Outfit', sans-serif;
      color: white;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px transparent;
  }

  #root {
      margin: 0 auto;
  }
`