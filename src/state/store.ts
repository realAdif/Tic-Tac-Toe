import { createStore } from "kaioken"
import { aiMove } from "../utils/cpuPlayer"

// 0 = no vaule, 1 = X , 2 = O
const initialState = {
  currentPlayer: 1,
  playerXWins: 0,
  playerOWins: 0,
  rounds: 0,
  ties: 0,
  cells: [
    {
      id: 1,
      value: 0,
      isClicked: false,
    },
    {
      id: 2,
      value: 0,
      isClicked: false,
    },
    {
      id: 3,
      value: 0,
      isClicked: false,
    },
    {
      id: 4,
      value: 0,
      isClicked: false,
    },
    {
      id: 5,
      value: 0,
      isClicked: false,
    },
    {
      id: 6,
      value: 0,
      isClicked: false,
    },
    {
      id: 7,
      value: 0,
      isClicked: false,
    },
    {
      id: 8,
      value: 0,
      isClicked: false,
    },
    {
      id: 9,
      value: 0,
      isClicked: false,
    },
  ],
}

export const useGameBoard = createStore(initialState, function (set, get) {
  function vsCPU(id: number) {
    // user move
    set((item) => {
      //current value of item.currentPlayer
      let newCurrentPlayer = item.currentPlayer
      // Loop through the cells in the game board and update the cell that was clicked
      const newCells = item.cells.map((cell) => {
        if (cell.id === id && cell.value === 0) {
          newCurrentPlayer = item.currentPlayer === 1 ? 2 : 1

          return {
            ...cell,
            value: item.currentPlayer,
            isClicked: true,
          }
        }
        // If the cell is not the one clicked, return it unchanged
        return cell
      })
      // Update the clicked cell with the current player's value
      return {
        ...item,
        currentPlayer: newCurrentPlayer,
        cells: newCells,
      }
    })
    // ai move
    set((item) => {
      console.log("ai", item.currentPlayer)
      if (item.currentPlayer === 2) {
        return aiMove(item)
      }
      return item
    })
    // check for winner
  }

  function vsPlayer(id: number) {
    set((item) => {
      //current value of item.currentPlayer
      let newCurrentPlayer = item.currentPlayer
      // Loop through the cells in the game board and update the cell that was clicked
      const newCells = item.cells.map((cell) => {
        if (cell.id === id && cell.value === 0) {
          newCurrentPlayer = item.currentPlayer === 1 ? 2 : 1
          console.log(newCurrentPlayer)
          return {
            ...cell,
            value: item.currentPlayer,
            isClicked: true,
          }
        }
        // If the cell is not the one clicked, return it unchanged
        return cell
      })
      // Update the clicked cell with the current player's value
      return {
        ...item,
        currentPlayer: newCurrentPlayer,
        cells: newCells,
      }
    })
  }
  function updateScore() {}
  function onRestart() {
    set((item) => {
      return {
        ...item,
        currentPlayer: initialState.currentPlayer,
        playerXWins: initialState.playerXWins,
        playerOWins: initialState.playerOWins,
        rounds: initialState.rounds,
        ties: initialState.ties,
        cells: initialState.cells.map((cell) => ({
          ...cell,
        })),
      }
    })
  }
  return {
    vsCPU,
    vsPlayer,
    onRestart,
    updateScore,
  }
})
