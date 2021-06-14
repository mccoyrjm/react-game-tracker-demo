import React, { ReactElement, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authenticateLogin } from 'state/actions/login'
import { RootState } from 'state/store'
import { useHistory } from 'react-router-dom'
import { InputEvent } from 'typings/components'
import AlertBanner from 'ui/molecules/AlertBanner'
import TextField from 'ui/atoms/TextField'
import HorizontalBreak from 'ui/atoms/HorizontalBreak'
import Button from 'ui/atoms/Button'
import { Form, ButtonSection } from './subcomponents'

const LoginForm = (): ReactElement => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { error, loggedInUser } = useSelector(({ login }: RootState) => login)

  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (loggedInUser) {
      history.push('/summary')
    }
  }, [loggedInUser])

  return (
    <Form>
      {error && (
        <AlertBanner type="error">
          Incorrect User ID or Password. Please try again.
        </AlertBanner>
      )}
      <TextField
        placeholder="User ID"
        value={userId}
        onChange={(event: InputEvent) => {
          setUserId((event.target as HTMLInputElement).value)
        }}
      />
      <TextField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event: InputEvent) => {
          setPassword((event.target as HTMLInputElement).value)
        }}
      />
      <HorizontalBreak />
      <ButtonSection>
        <Button
          isPrimary
          onClick={() => {
            dispatch(authenticateLogin({ userId, password }))
          }}
        >
          Login
        </Button>
      </ButtonSection>
    </Form>
  )
}
export default LoginForm
