import React, { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { resetLoginState } from 'state/actions/login'
import { RootState } from 'state/store'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import Button from 'ui/atoms/Button'
import { StyledHeader, WelcomeText } from './subcomponents'

const Header = (): ReactElement => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {
    accessToken,
    user: { firstName },
  } = useSelector(({ login }: RootState) => login)

  return (
    <ThemeProvider theme={theme}>
      <StyledHeader>
        {accessToken && (
          <>
            <WelcomeText>Welcome {firstName}!</WelcomeText>
            <Button
              onClick={() => {
                dispatch(resetLoginState())
                history.push('/')
              }}
            >
              Logout
            </Button>
          </>
        )}
      </StyledHeader>
    </ThemeProvider>
  )
}

export default Header
