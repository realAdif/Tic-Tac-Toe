interface State {
  isGameOver: boolean
  gameState: {
    rounds: number
    ties: number
    currentPlayer: number
    roundMoves: number[]
  }
  playerX: {
    wins: number
    moves: number[]
  }
  playerO: {
    wins: number
    moves: number[]
  }

  cells: {
    id: number
    value: number
    isClicked: boolean
  }[]
}
