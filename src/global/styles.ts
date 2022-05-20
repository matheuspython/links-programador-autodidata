import {createGlobalStyle} from 'styled-components'

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
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
  }
`