import styled from 'styled-components'
import query from 'styles/mediaQueries'

// eslint-disable-next-line import/prefer-default-export
export const CardSection = styled.div`
  @media ${query.greaterThanMedium} {
    display: flex;
    justify-content: space-between;
  }
`
