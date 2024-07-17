export function aiMove(state: State) {
  console.log("AI's turn")
  const { cells, currentPlayer } = state

  let updatedCells = [...cells]

  // Keep trying to find a random move until an empty cell is found
  while (true) {
    let totalLoops = 0
    const randomMove = Math.floor(Math.random() * 9)
    if (!cells[randomMove].isClicked) {
      // Update the random cell with the CPU's move
      updatedCells[randomMove] = {
        ...cells[randomMove],
        value: 2,
        isClicked: true,
      }
      break
    }
    totalLoops++
    if (totalLoops === cells.length) break
  }

  return {
    ...state,
    cells: updatedCells,
    currentPlayer: 1, // Switch back to the player's turn
  }
}
