interface State {
  currentPlayer: number
  playerXWins: number
  playerXMoves: number[]
  playerOMoves: number[]
  playerOWins: number
  rounds: number
  ties: number
  cells: {
    id: number
    value: number
    isClicked: boolean
  }[]
}
