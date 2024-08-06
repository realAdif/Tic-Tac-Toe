interface Cells {
  id: number
  value: 1 | 2
  isClicked: boolean
}
interface playerO {
  wins: number
  moves: number[]
}
interface playerX {
  wins: number
  moves: number[]
}
interface gameState {
  rounds: number
  ties: number
  currentPlayer: number
  roundMoves: number[]
  isGameOver: boolean
}

interface GameState {
  gameState: gameState
  playerX: playerX
  playerO: playerO
  cells: Cells[]
}
