import { createStore } from "kaioken"
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

export const useGameBoard = createStore(initialState, (set, get) => ({
  onPress: (id: number) => {
    set((item) => {
      return {
        ...item,
        cells: item.cells.map((cell) => {
          if (cell.id === id && cell.value === 0) {
            return {
              ...cell,
              value: item.currentPlayer,
              isClicked: true,
            }
          }
          return cell
        }),
        currentPlayer: item.currentPlayer === 1 ? 2 : 1,
      }
    })
  },
  onRestart: () => {
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
  },
}))
