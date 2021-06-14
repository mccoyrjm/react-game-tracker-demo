import React, { ReactElement } from 'react'
import LoginForm from 'ui/organisms/LoginForm'
import { Page } from './subcomponents'

const Login = (): ReactElement => {
  return (
    <Page>
      <LoginForm />
    </Page>
  )
}

export default Login
