import styled, { css } from 'styled-components'

interface StyleButtonProps {
  isPrimary: boolean
}

export const StyledButton = styled.button<StyleButtonProps>`
  border: none;
  border-radius: 4px;
  width: 100%;
  max-width: 200px;
  height: 40px;
  font-size: 14px;

  ${({ isPrimary, theme }) =>
    isPrimary ? css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.secondary};
    ` : css`
      border: 2px solid ${theme.colors.primary};
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.primary};
    `
  }}
`
