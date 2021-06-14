import React, { ReactElement } from 'react'
import { Input } from './subcomponents'

interface TextFieldProps {
  type?: 'text' | 'password'
  placeholder?: string
}

const TextField = ({ type = 'text', placeholder = '' }: TextFieldProps): ReactElement => (
  <Input type={type} placeholder={placeholder} />
)

export default TextField
