import React, { ReactElement } from 'react'
import Button from 'ui/atoms/Button'
import TextField from 'ui/atoms/TextField'
import HorizontalBreak from 'ui/atoms/HorizontalBreak'
import { Form, ButtonSection } from './subcomponents'

const LoginForm = (): ReactElement => (
  <Form>
    <TextField placeholder="User ID" />
    <TextField type="password" placeholder="Password" />
    <HorizontalBreak />
    <ButtonSection>
      <Button
        isPrimary
        onClick={() => { console.log('login click') }}
      >
        Login
      </Button>
    </ButtonSection>
  </Form>
)

export default LoginForm
