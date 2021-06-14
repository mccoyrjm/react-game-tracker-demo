import { EntityGame } from 'typings/entities'
import entityGames from 'database/entityGame.json'

const { entityGame } = entityGames

// eslint-disable-next-line import/prefer-default-export
export const getEntityGames = (entityId: string): Array<EntityGame> =>
  entityGame.filter((eg) => eg.entityId === entityId)
