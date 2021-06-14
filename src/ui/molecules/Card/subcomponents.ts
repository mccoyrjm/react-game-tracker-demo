import styled, { css } from 'styled-components'
import query from 'styles/mediaQueries'

export const Container = styled.div<{ maxWidth?: string }>`
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
`

export const Content = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.primary};
  `}
`
