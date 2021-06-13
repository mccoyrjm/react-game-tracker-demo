import { createGlobalStyle } from 'styled-components'

//     Support: Consistent Box Model Sizing
// Description: Different browsers handled box model differently.
//         Fix: Explicitly set `box-sizing: border-box` to prevent unintended
//              sizing behavior.
//    Resource: https://css-tricks.com/box-sizing/
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 14px;
  }

  p {
    margin: 0;
  }
`

export default GlobalStyle
