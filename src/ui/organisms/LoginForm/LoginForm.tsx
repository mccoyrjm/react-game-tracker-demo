import React, { ReactElement } from 'react'
import Button from 'ui/atoms/Button'
import TextField from 'ui/atoms/TextField'
import HorizontalBreak from 'ui/atoms/HorizontalBreak'
import { Form } from './subcomponents'

const LoginForm = (): ReactElement => {
  return (
    <Form>
      <TextField />
      <TextField />
      <HorizontalBreak />
      <Button isPrimary onClick={() => { console.log('login click') }}>Login</Button>
    </Form>
  )
}

export default LoginForm
