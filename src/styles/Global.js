import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary}
  }

  body {
    background: #fff;
  }

   /*  max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
 */

  button {
    cursor: pointer;
  }
`
