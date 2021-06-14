import styled from 'styled-components'
import query from 'styles/mediaQueries'

export const Page = styled.div`
  padding: 32px 16px;
  @media ${query.greaterThanSmall} {
    padding: 32px;
  }
`

export const PageHeader = styled.h1`
  margin: 0 0 16px;
  text-align: center;
`
