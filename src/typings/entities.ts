export interface Entity {
  id: string
  username: string
  password: string
  firstName: string
  lastName: string
}

export interface EntityGame {
  entityId: string
  gameId: string
  title: string
}
