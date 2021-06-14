import React, { ReactElement } from 'react'
import { EntityGame } from 'typings/entities'
import { UL, LI, Text } from './subcomponents'

interface GamesListProps {
  games: Array<EntityGame>
  max?: number
}

const GamesList = ({ games, max }: GamesListProps): ReactElement => {
  let gamesList: Array<EntityGame> = []

  if (max) {
    gamesList = [...games.slice(0, max)]
  }

  return (
    <>
      <UL>
        {gamesList.map((game) => (
          <LI key={game.gameId}>{game.title}</LI>
        ))}
      </UL>
      {!!max && games.length > max && <Text>...and more!</Text>}
    </>
  )
}

export default GamesList
