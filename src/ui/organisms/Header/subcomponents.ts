import styled, { css } from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 80px;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`

export const WelcomeText = styled.p`
  font-size: 18px;

  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`
