import { Entity } from './entities'
import { Game } from './games'

export interface LoginState {
  accessToken: string
  error: boolean
  user: Entity
}

export interface GameCollectionState {
  dataList: Array<Game>
  isLoading: boolean
}
