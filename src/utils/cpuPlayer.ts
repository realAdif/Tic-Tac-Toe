export function aiMove(state: State) {
  const cells = state.cells
  let updatedCells = [...cells]
  let playerCPUMove = state.playerO

  let newMove
  let attempts = 0
  const maxAttempts = cells.length

  // Keep trying to find a random move until an empty cell is found
  while (attempts < maxAttempts) {
    const randomMove = Math.floor(Math.random() * cells.length)
    newMove = [...state.gameState.roundMoves, randomMove]

    if (!cells[randomMove].isClicked) {
      // Update the random cell with the CPU's move
      playerCPUMove: randomMove

      updatedCells[randomMove] = {
        ...cells[randomMove],
        value: 2, // Assuming 2 is the AI's move value
        isClicked: true,
      }
      break
    }
    attempts++
  }

  return {
    ...state,
    gameState: {
      ...state.gameState,
      roundMoves: newMove,
      currentPlayer: 1,
    },
    playerO: {
      ...state.playerO,
      moves: [...state.playerO.moves, playerCPUMove],
    },
    cells: updatedCells,
  }
}
