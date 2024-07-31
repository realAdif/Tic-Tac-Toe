import { createStore, useState } from "kaioken"
import { aiMove } from "../utils/cpuPlayer"

// 0 = no vaule, 1 = X , 2 = O
const initialState: State = {
  isGameOver: false,
  playerX: {
    wins: 0,
    moves: [],
  },
  playerO: {
    wins: 0,
    moves: [],
  },
  gameState: {
    rounds: 0,
    roundMoves: [],
    ties: 0,
    currentPlayer: 1,
  },
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
    // update game cells
    set((item: State) => {
      const newCells = item.cells.map((cell) => {
        if (cell.id === id) {
          return {
            ...cell,
            value: item.gameState.currentPlayer,
            isClicked: true,
          }
        }
        return cell
      })
      // console.log("cells:", newCells)
      return { ...item, cells: newCells }
    })
    // update gameState
    set((item: State) => {
      //Game state round
      const newMove = [...item.gameState.roundMoves, id]
      //Game state player
      const newCurrentPlayer = item.gameState.currentPlayer === 1 ? 2 : 1

      const newItem = {
        ...item,
        gameState: {
          ...item.gameState,
          roundMoves: newMove,
          currentPlayer: newCurrentPlayer,
        },
        playerX: {
          ...item.playerX,
          moves: [...item.playerX.moves, id],
        },
      }
      return newItem
    })

    //cheack winner
    set((item: State) => {
      const winningPattern = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]
      const isPlayerXWinner = winningPattern.some((pattern) =>
        pattern.every((move) => item.playerX.moves.includes(move))
      )

      if (isPlayerXWinner) {
        console.log("Player X is the winner")
        return {
          ...item,
          playerX: {
            ...item.playerX,
            wins: item.playerX.wins + 1,
          },
          isGameOver: true,
        }
      } else {
        console.log("No winner for Player X yet.")
      }
      return item
    })

    // update ai Move
    set((item: State) => {
      if (item.gameState.currentPlayer === 2) {
        // send back update cell
        const aiMoveResult = aiMove(item)
        console.log("AI Move:", aiMoveResult)
        const newCurrentPlayer = item.gameState.currentPlayer === 2 ? 1 : 2
        return {
          ...item,
          gameState: {
            ...item.gameState,
            currentPlayer: newCurrentPlayer,
          },
          cells: aiMoveResult.cells,
        }
      }

      return item
    })
    //check game
    let currentMove = get().gameState.roundMoves
    if (currentMove.length === get().cells.length - 4) {
      return set(() => ({ ...get(), isGameOver: true }))
    }

    // console.log("currentGame:", get())
  }
  function onRestart() {
    console.log("Restarting Game", get())

    return set(() => initialState)
  }

  return {
    vsCPU,
    onRestart,
  }
})
