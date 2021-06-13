import styled from 'styled-components'

//     Support: Sticky Footer
// Description: Footer should stick to bottom of device no matter the height.
//         Fix: Use flexbox since it's the most cross-browser compatible.
//    Resource: https://css-tricks.com/couple-takes-sticky-footer/#there-is-flexbox
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Main = styled.main`
  flex: 1 0 auto;
`
