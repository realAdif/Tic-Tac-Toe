import { createStore, useState } from "kaioken"
import { aiMove } from "../utils/cpuPlayer"

// 1 = X , 2 = O
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
const winningPattern = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

export const useGameBoard = createStore(initialState, function (set, get) {
  function vsCPU(id: number) {
    set((item: State) => {
      //Update the user cell
      const newCells = item.cells.map((cell) =>
        cell.id === id
          ? { ...cell, value: item.gameState.currentPlayer, isClicked: true }
          : cell
      )
      const newMove = [...item.gameState.roundMoves, id]

      //update user gameMove
      const newPlayerXMoves = [...item.playerX.moves, id]

      //check winner
      const isPlayerXWinner = winningPattern.some((pattern) =>
        pattern.every((move) => newPlayerXMoves.includes(move))
      )
      const newCurrentPlayer = item.gameState.currentPlayer === 1 ? 2 : 1
      if (isPlayerXWinner) {
        return {
          ...item,
          gameState: {
            ...item.gameState,
            rounds: item.gameState.rounds + 1,
          },
          playerX: {
            ...item.playerX,
            wins: item.playerX.wins + 1,
          },
          cells: newCells,
          isGameOver: true,
        }
      } else {
        if (item.gameState.currentPlayer === 2) {
          const aiMoveResult = aiMove(item)
        }
      }

      const newItem = {
        ...item,
        gameState: {
          ...item.gameState,
          roundMoves: newMove,
          currentPlayer: newCurrentPlayer,
        },
        playerX: {
          ...item.playerX,
          moves: newPlayerXMoves,
        },
        playerO: {
          ...item.playerO,
        },
        cells: newCells,
      }

      return newItem
    })
  }

  function onRestart() {
    console.log("Restarting Game")
    return set(() => initialState)
  }

  return {
    vsCPU,
    onRestart,
  }
})
