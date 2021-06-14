/* eslint-disable no-underscore-dangle */
import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGameCollection } from 'state/actions/gameCollection'
import { RootState } from 'state/store'
import { Page } from 'pages/subcomponents'
import Card from 'ui/molecules/Card'
import { CardSection } from './subcomponents'

const Summary = (): ReactElement => {
  const dispatch = useDispatch()
  const {
    login: { accessToken, user },
    gameCollection: { dataList: gamesList },
  } = useSelector(({ login, gameCollection }: RootState) => ({
    login,
    gameCollection,
  }))

  useEffect((): void => {
    dispatch(getGameCollection({ entityId: user._id, accessToken }))
  }, [])

  return (
    <Page>
      <CardSection>
        <Card title="Titles Owned">{gamesList.length}</Card>
        <Card title="Recent Games">
          <ul>
            {gamesList.map((game) => (
              <li>{game.title}</li>
            ))}
          </ul>
        </Card>
      </CardSection>
    </Page>
  )
}

export default Summary
