import { getEntityGames } from 'api/entityGames'
import { GameCollectionAction } from 'state/actions/gameCollection'
import { GetGameCollectionRequest } from 'typings/gameCollection'
import { GameCollectionState } from 'typings/reducers'

const initialState: GameCollectionState = {
  dataList: [],
  isLoading: true,
}

const GameCollection = (
  state = initialState,
  action: GameCollectionAction
): GameCollectionState => {
  const { type, payload } = action

  if (type === 'GET_GAME_COLLECTION') {
    const { entityId } = payload as GetGameCollectionRequest
    return {
      ...state,
      dataList: [...getEntityGames(entityId)],
      isLoading: false,
    }
  }

  if (type === 'RESET_GAME_COLLECTION_STATE') {
    return {
      ...initialState,
    }
  }

  return state
}

export default GameCollection
