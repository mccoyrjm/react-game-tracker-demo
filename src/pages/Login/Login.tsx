import React, { ReactElement } from 'react'
import { Page } from 'pages/subcomponents'
import LoginForm from 'ui/organisms/LoginForm'

const Login = (): ReactElement => {
  return (
    <Page>
      <LoginForm />
    </Page>
  )
}

export default Login
