import React, { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { Container, Title, Content } from './subcomponents'

interface CardProps {
  children?: ReactNode
  title?: string
  maxWidth?: string
}

const Card = ({ title, children, maxWidth }: CardProps): ReactElement => (
  <ThemeProvider theme={theme}>
    <Container maxWidth={maxWidth}>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  </ThemeProvider>
)

export default Card
