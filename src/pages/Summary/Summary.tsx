/* eslint-disable no-underscore-dangle */
import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGameCollection } from 'state/actions/gameCollection'
import { RootState } from 'state/store'
import { useHistory } from 'react-router-dom'
import { Page } from 'pages/subcomponents'
import Card from 'ui/molecules/Card'
import GamesList from 'ui/molecules/GamesList'
import { CardSection, GamesCount } from './subcomponents'

const Summary = (): ReactElement => {
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    login: { accessToken, user },
    gameCollection: { dataList: gamesList },
  } = useSelector(({ login, gameCollection }: RootState) => ({
    login,
    gameCollection,
  }))

  useEffect((): void => {
    if (accessToken) {
      dispatch(getGameCollection({ entityId: user.id, accessToken }))
    } else {
      history.push('/')
    }
  }, [])

  return (
    <Page>
      <CardSection>
        <Card title="Titles Owned">
          <GamesCount>{gamesList.length}</GamesCount>
        </Card>
        <Card title="Recent Games">
          <GamesList games={gamesList} max={5} />
        </Card>
      </CardSection>
    </Page>
  )
}

export default Summary
