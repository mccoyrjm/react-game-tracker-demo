import styled, { css } from 'styled-components'
import query from 'styles/mediaQueries'

export const Container = styled.div`
  margin: 0 0 16px;
  width: 100%;
  @media ${query.greaterThanMedium} {
    max-width: 320px;
  }
`

export const Title = styled.h2`
  margin: 0;
  padding: 16px;
  border-radius: 8px 8px 0 0;
  text-align: center;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.lightGrey};
  `}

  @media ${query.greaterThanMedium} {
    text-align: left;
  }
`

export const Content = styled.div`
  padding: 16px;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.primary};
  `}
`
