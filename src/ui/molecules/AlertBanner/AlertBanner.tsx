import React, { ReactElement, ReactNode } from 'react'
import { Container } from './subcomponents'

export type Type = 'info' | 'error'

interface AlertBannerProps {
  children?: ReactNode
  type: Type
}

const AlertBanner = ({ children, type }: AlertBannerProps): ReactElement => (
  <Container type={type}>
    <p>{children}</p>
  </Container>
)

export default AlertBanner
