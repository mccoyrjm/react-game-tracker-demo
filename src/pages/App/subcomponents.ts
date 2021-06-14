import styled from 'styled-components'
import colors from 'styles/colors'

//     Support: Sticky Footer
// Description: Footer should stick to bottom of device no matter the height.
//         Fix: Use flexbox since it's the most cross-browser compatible.
//    Resource: https://css-tricks.com/couple-takes-sticky-footer/#there-is-flexbox
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1024px;
  background-color: ${colors.white};
`

export const Main = styled.main`
  flex: 1 0 auto;
`
