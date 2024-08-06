import { createStore } from "kaioken"
import { aiMove } from "../utils/cpuPlayer"

// 1 = X , 2 = O
const initialState: GameState = {
  playerX: {
    wins: 0,
    moves: [],
  },
  playerO: {
    wins: 0,
    moves: [],
  },
  gameState: {
    isGameOver: false,
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
    set((item: GameState) => {
      //game state
      let gameCells = item.cells
      let gameState = item.gameState
      let gameRoundMoves = item.gameState.roundMoves
      let gameRoundCurrentPlayer = item.gameState.currentPlayer
      let playerXMoves = item.playerX.moves
      let playerOMoves = item.playerO.moves

      gameCells = gameCells.map((cell) =>
        cell.id === id
          ? { ...cell, value: item.gameState.currentPlayer, isClicked: true }
          : cell
      )
      gameCells = aiMove(gameCells)
      console.log(gameCells)
      gameRoundMoves = [...gameRoundMoves, id]

      gameRoundCurrentPlayer = gameRoundCurrentPlayer === 1 ? 2 : 1

      return {
        ...item,
        gameState: {
          ...item.gameState,
          roundMoves: gameRoundMoves,
          currentPlayer: gameRoundCurrentPlayer,
        },
        playerX: {
          ...item.playerX,
          moves: playerXMoves,
        },
        playerO: {
          ...item.playerO,
          moves: playerOMoves,
        },
        cells: gameCells,
      }
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
