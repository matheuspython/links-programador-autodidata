import { createGlobalStyle } from 'styled-components'

export const Globals = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html, body{
    font-family: 'Roboto', sans-serif;
  }
  body{
    background: #222;
    font-size: 14px;
    color: #fff;
  }
`