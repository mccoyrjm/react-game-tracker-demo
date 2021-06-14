import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { StyledFooter } from './subcomponents'

const Footer = (): ReactElement => (
  <ThemeProvider theme={theme}>
    <StyledFooter>
      <p>Game Tracker Demo written by Ryan McCoy</p>
      <a
        href="https://www.vecteezy.com/free-vector/arcade-joystick"
        target="_blank"
        rel="noreferrer"
      >
        Arcade Joystick Vectors by Vecteezy
      </a>
    </StyledFooter>
  </ThemeProvider>
)

export default Footer
