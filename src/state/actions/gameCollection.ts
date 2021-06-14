import { AnyAction } from 'redux'
import { GetGameCollectionRequest } from 'typings/gameCollection'
import { GameCollectionState } from 'typings/reducers'

export interface GameCollectionAction extends AnyAction {
  type: 'GET_GAME_COLLECTION' | 'RESET_GAME_COLLECTION_STATE'
  payload: GetGameCollectionRequest | Partial<GameCollectionState>
}

export const getGameCollection = (
  payload: GetGameCollectionRequest
): GameCollectionAction => ({
  type: 'GET_GAME_COLLECTION',
  payload,
})

export const resetGameCollectionState = (): GameCollectionAction => ({
  type: 'RESET_GAME_COLLECTION_STATE',
  payload: {},
})
