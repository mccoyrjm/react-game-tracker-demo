import React, { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { StyledButton } from './subcomponents'

interface ButtonProps {
  children: ReactNode
  type?: 'button' | 'submit'
  isPrimary?: boolean
  isDisabled?: boolean
  onClick: () => void
}

const Button = ({
  children,
  type = 'button',
  isPrimary = false,
  isDisabled = false,
  onClick,
}: ButtonProps): ReactElement => (
  <ThemeProvider theme={theme}>
    <StyledButton
      type={type}
      isPrimary={isPrimary}
      onClick={(event) => {
        event.preventDefault()
        onClick()
      }}
      disabled={isDisabled}
    >
      {children}
    </StyledButton>
  </ThemeProvider>
)

export default Button
