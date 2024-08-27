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

interface GameState {
  playerOScores: number
  playerXScores: number
  tie: number
  currentPlayer: "x" | "o"
}
