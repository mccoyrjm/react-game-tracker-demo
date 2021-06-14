import styled from 'styled-components'
import colors from 'styles/colors'
import { Type } from './AlertBanner'

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div<{ type: Type }>`
  margin: 0 0 32px;
  padding: 16px;
  border: 2px solid black;
  border-radius: 8px;
  max-width: 400px;

  ${({ type }) => {
    if (type === 'error') {
      return `
        background-color: ${colors.lightRed};
        color: ${colors.black};
      `
    }
    return `
      background-color: ${colors.lightBlue};
    `
  }}
`
