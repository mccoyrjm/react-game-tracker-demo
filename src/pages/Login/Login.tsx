import React, { ReactElement } from 'react'
import LoginForm from 'ui/molecules/LoginForm'
import { Page, PageHeader } from 'pages/subcomponents'
import { LoginContainer } from './subcomponents'

const Login = (): ReactElement => (
  <Page>
    <PageHeader>Welcome to Game Tracker Demo!</PageHeader>
    <LoginContainer>
      <LoginForm />
    </LoginContainer>
  </Page>
)

export default Login
