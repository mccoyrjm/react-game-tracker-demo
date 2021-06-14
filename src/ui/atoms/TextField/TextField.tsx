import React, { ReactElement } from 'react'
import { InputEvent } from 'typings/components'
import { Input } from './subcomponents'

interface TextFieldProps {
  type?: 'text' | 'password'
  placeholder?: string
  // eslint-disable-next-line no-unused-vars
  onChange: (e: InputEvent) => void
  value: string
}

const TextField = ({
  type = 'text',
  placeholder = '',
  onChange,
  value,
}: TextFieldProps): ReactElement => (
  <Input
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
)

export default TextField
