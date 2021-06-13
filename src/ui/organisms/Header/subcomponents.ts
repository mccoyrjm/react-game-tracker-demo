import styled, { css } from 'styled-components'

export const StyledHeader = styled.header`
  height: 80px;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`
