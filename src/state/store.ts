import { createStore } from "kaioken"

// 1 = X , 2 = O
const initialState: GameState = {
  isPaused: true,
  playerXScores: 0,
  playerOScores: 0,
  tie: 0,
  currentPlayer: "x",
  cells: [
    {
      id: 1,
      value: "",
    },
    {
      id: 2,
      value: "",
    },
    {
      id: 3,
      value: "",
    },
    {
      id: 4,
      value: "",
    },
    {
      id: 5,
      value: "",
    },
    {
      id: 6,
      value: "",
    },
    {
      id: 7,
      value: "",
    },
    {
      id: 8,
      value: "",
    },
    {
      id: 9,
      value: "",
    },
  ],
}
const winningPattern = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
export const useGameBoard = createStore(initialState, function (set) {
  const vsPlayer = (id: number) =>
    set((item: GameState) => {
      let currentPlayer = item.currentPlayer
      let updatedCells = []

      // update the board
      for (let i = 0; i < item.cells.length; i++) {
        if (item.cells[i].id == id && item.cells[i].value == "") {
          updatedCells.push({
            ...item.cells[i],
            value: item.currentPlayer,
            isClicked: true,
          })
          currentPlayer = currentPlayer === "x" ? "o" : "x"
        } else {
          updatedCells.push(item.cells[i])
        }
      }

      return {
        ...item,
        currentPlayer: currentPlayer,
        cells: updatedCells,
      }
    })

  const vsCPU = (id: number) =>
    set((item: GameState) => {
      let currentPlayer = item.currentPlayer
      let updatedCells = []
      let gameOver = item.isPaused
      console.log("onCPU")

      for (let i = 0; i < item.cells.length; i++) {
        if (item.cells[i].id == id && item.cells[i].value == "") {
          updatedCells.push({
            ...item.cells[i],
            value: item.currentPlayer,
            isClicked: true,
          })
          currentPlayer = currentPlayer === "x" ? "o" : "x"
        } else {
          updatedCells.push(item.cells[i])
        }
      }

      return {
        ...item,
        isPaused: gameOver,
        currentPlayer: currentPlayer,
        cells: updatedCells,
      }
    })

  function onRestart() {
    console.log("Restarting Game")
    return set(() => initialState)
  }

  return {
    vsPlayer,
    vsCPU,
    onRestart,
  }
})
