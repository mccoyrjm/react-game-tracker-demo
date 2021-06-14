import React, { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { Container, Title, Content } from './subcomponents'

interface CardProps {
  children?: ReactNode
  title?: string
}

const Card = ({ title, children }: CardProps): ReactElement => (
  <ThemeProvider theme={theme}>
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  </ThemeProvider>
)

export default Card
