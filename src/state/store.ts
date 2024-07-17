import { createStore } from "kaioken"
import { aiMove } from "../utils/cpuPlayer"

// 0 = no vaule, 1 = X , 2 = O
const initialState: State = {
  currentPlayer: 1,
  playerXWins: 0,
  playerXMoves: [],
  playerOMoves: [],
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
    // 1. user move
    set((item) => {
      // Get the current value of item.currentPlayer
      let newCurrentPlayer = item.currentPlayer
      // Create a new array with the updated moves for player X
      const currentPlayerMoves = [...item.playerXMoves, id]
      // Loop through the cells in the game board and update the cell that was clicked
      const newCells = item.cells.map((cell) => {
        if (cell.id === id && cell.value === 0) {
          // Toggle the current player for the next move
          newCurrentPlayer = item.currentPlayer === 1 ? 2 : 1

          // Update the clicked cell with the current player's value
          return {
            ...cell,
            value: item.currentPlayer,
            isClicked: true,
          }
        }
        // If the cell is not the one clicked, return it unchanged
        return cell
      })

      // Return the updated state with the new current player, moves, and cells
      return {
        ...item,
        currentPlayer: newCurrentPlayer,
        playerXMoves: currentPlayerMoves,
        cells: newCells,
      }
    })

    // 2.check for winner
    set((item) => {
      const winningPattern = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]
      console.log("check for winner")
      console.log("player X moves", item.playerXMoves)
      console.log("player O moves", item.playerOMoves)

      // Check if any winning pattern matches player X's moves
      const isPlayerXWinner = winningPattern.some((pattern) =>
        pattern.every((move) => item.playerXMoves.includes(move))
      )

      if (isPlayerXWinner) {
        console.log("Player X wins!")
      } else {
        console.log("No winner for Player X yet.")
      }

      return item // Return the unchanged item
    })

    // 3. ai move
    set((item) => {
      if (item.currentPlayer === 2) {
        return aiMove(item)
      }
      return item
    })
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
        playerXMoves: initialState.playerXMoves,
        playerOMoves: initialState.playerOMoves,
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
