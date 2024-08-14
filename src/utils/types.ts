interface Cells {
  id: number
  value: "x" | "o" | ""
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

  roundMoves: number[]
  isGameOver: boolean
}

interface GameState {
  isPaused: boolean
  playerOScores: number
  playerXScores: number
  tie: number
  currentPlayer: "x" | "o"
  cells: Cells[]
}
