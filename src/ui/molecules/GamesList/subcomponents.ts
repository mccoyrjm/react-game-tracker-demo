import styled from 'styled-components'
import colors from 'styles/colors'

export const UL = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const LI = styled.li`
  padding: 8px 0 8px 8px;
  &:nth-child(odd) {
    background-color: ${colors.lightGrey};
  }
  &:nth-child(even) {
    background-color: ${colors.lightBlue};
  }
`

export const Text = styled.p`
  padding: 8px;
  font-size: 16px;
  text-align: center;
`
