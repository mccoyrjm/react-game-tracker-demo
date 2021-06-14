import { Entity, EntityGame } from './entities'

export interface LoginState {
  accessToken: string
  error: boolean
  user: Entity
}

export interface GameCollectionState {
  dataList: Array<EntityGame>
  isLoading: boolean
}
