import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { StyledFooter } from './subcomponents'

const Footer = (): ReactElement => (
  <ThemeProvider theme={theme}>
    <StyledFooter>
      <p>Demo web app developed by Ryan McCoy.</p>
    </StyledFooter>
  </ThemeProvider>
)

export default Footer
