/* eslint-disable no-underscore-dangle */
import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getGameCollection,
  resetGameCollectionState,
} from 'state/actions/gameCollection'
import { RootState } from 'state/store'
import { useHistory } from 'react-router-dom'
import { Page } from 'pages/subcomponents'
import Card from 'ui/molecules/Card'
import GamesList from 'ui/molecules/GamesList'
import { CardSection, GamesCount, SkeletonLoader } from './subcomponents'

const Summary = (): ReactElement => {
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    login: { accessToken, user },
    gameCollection: { dataList: gamesList, isLoading },
  } = useSelector(({ login, gameCollection }: RootState) => ({
    login,
    gameCollection,
  }))

  useEffect(() => {
    if (accessToken) {
      // simulate API call
      setTimeout(() => {
        dispatch(getGameCollection({ entityId: user.id, accessToken }))
      }, 1500)
    } else {
      history.push('/')
    }

    return () => {
      dispatch(resetGameCollectionState())
    }
  }, [])

  return (
    <Page>
      <CardSection>
        <Card title="Titles Owned">
          {isLoading ? (
            <SkeletonLoader>Loading...</SkeletonLoader>
          ) : (
            <GamesCount>{gamesList.length}</GamesCount>
          )}
        </Card>
        <Card title="Recent Games">
          {isLoading ? (
            <SkeletonLoader>Loading...</SkeletonLoader>
          ) : (
            <GamesList games={gamesList} max={5} />
          )}
        </Card>
      </CardSection>
    </Page>
  )
}

export default Summary
