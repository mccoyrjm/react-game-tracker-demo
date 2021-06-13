import styled, { css } from 'styled-components'

export const StyledFooter = styled.footer`
  padding: 16px;
  height: 80px;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
  `}
`
