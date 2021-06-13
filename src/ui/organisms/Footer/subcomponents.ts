import styled, { css } from 'styled-components'

export const StyledFooter = styled.footer`
  height: 120px;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`
