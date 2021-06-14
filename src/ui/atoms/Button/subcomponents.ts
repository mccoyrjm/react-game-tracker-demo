import styled, { css } from 'styled-components'
import query from 'styles/mediaQueries'

interface StyleButtonProps {
  isPrimary: boolean
}

// eslint-disable-next-line import/prefer-default-export
export const StyledButton = styled.button<StyleButtonProps>`
  border: none;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: 600;

  ${({ isPrimary, theme }) => {
    if (isPrimary) {
      return css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.lightGrey};
        &:active {
          background-color: ${theme.colors.secondary};
        }
      `
    }
    return css`
      border: 2px solid ${theme.colors.primary};
      background-color: ${theme.colors.lightGrey};
      color: ${theme.colors.primary};
    `
  }}

  @media (${query.greaterThanSmall}) {
    max-width: 200px;
  }
`
