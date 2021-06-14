import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { StyledFooter } from './subcomponents'

const Footer = (): ReactElement => (
  <ThemeProvider theme={theme}>
    <StyledFooter>
      <p>This is my footer.</p>
      <p>This is my footer.</p>
    </StyledFooter>
  </ThemeProvider>
)

export default Footer
