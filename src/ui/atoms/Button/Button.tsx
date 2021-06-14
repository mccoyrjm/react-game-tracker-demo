import React, { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { StyledButton } from './subcomponents'

interface ButtonProps {
  children: ReactNode
  isPrimary?: boolean
  isDisabled?: boolean
  onClick: () => void
}

const Button = ({
  children,
  isPrimary = false,
  isDisabled = false,
  onClick
}: ButtonProps): ReactElement => (
  <ThemeProvider theme={theme}>
    <StyledButton
      type="button"
      isPrimary={isPrimary}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </StyledButton>
  </ThemeProvider>
)

export default Button
