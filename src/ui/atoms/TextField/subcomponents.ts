import styled from 'styled-components'
import { breakPoints } from 'styles/mediaQueries'

// eslint-disable-next-line import/prefer-default-export
export const Input = styled.input`
  display: block;
  margin: 0 0 16px;
  border-radius: 4px;
  padding: 0 8px;
  height: 40px;
  width: 100%;
  max-width: ${breakPoints.tiny};
  font-size: 14px;
`
