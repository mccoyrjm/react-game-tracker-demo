import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { StyledHeader } from './subcomponents'

const Header = (): ReactElement => {

  return (
    <ThemeProvider theme={theme}>
      <StyledHeader>This is my header.</StyledHeader>
    </ThemeProvider>
  )
}

export default Header
