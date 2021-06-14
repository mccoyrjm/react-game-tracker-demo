import styled, { css } from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const StyledFooter = styled.footer`
  padding: 16px;
  height: 80px;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
  `}
`
