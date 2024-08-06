const winningPattern = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

export function aiMove(cells: Cells[]) {
  // const cells = state.cells
  let updatedCells = [...cells]

  let attempts = 0
  const maxAttempts = cells.length
  let randomMove

  // Keep trying to find a random move until an empty cell is found
  while (attempts < maxAttempts) {
    randomMove = Math.floor(Math.random() * cells.length)

    if (!cells[randomMove].isClicked) {
      // Update the random cell with the CPU's move

      updatedCells[randomMove] = {
        ...cells[randomMove],
        value: 2, // Assuming 2 is the AI's move value
        isClicked: true,
      }
      break
    }
    attempts++
  }
  return updatedCells
}

// update user movement state
// check winner
// update AI Movement state
// update game state
