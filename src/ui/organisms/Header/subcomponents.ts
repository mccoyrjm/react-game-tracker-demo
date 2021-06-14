import styled, { css } from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const StyledHeader = styled.header`
  height: 80px;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`
