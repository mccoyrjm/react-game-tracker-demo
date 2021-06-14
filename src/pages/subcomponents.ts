import styled from 'styled-components'
import query from 'styles/mediaQueries'

// eslint-disable-next-line import/prefer-default-export
export const Page = styled.div`
  padding: 32px 16px;
  @media ${query.greaterThanSmall} {
    padding: 32px;
  }
`
