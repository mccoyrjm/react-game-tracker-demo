import styled from 'styled-components'
import query from 'styles/mediaQueries'

export const CardSection = styled.div`
  @media ${query.greaterThanMedium} {
    display: flex;
    justify-content: space-between;
  }
`

export const GamesCount = styled.p`
  padding: 16px;
  width: 100%;
  font-size: 40px;
  text-align: center;
`

export const SkeletonLoader = styled.div`
  padding: 16px;
  width: 100%;
  text-align: center;
`
