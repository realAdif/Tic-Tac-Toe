import { createStore } from "kaioken"
// 0 = no vaule, 1 = X , 2 = O
const initialState = [
  {
    id: 1,
    value: 0,
    isClicked: false,
  },
  {
    id: 2,
    value: 1,
    isClicked: false,
  },
  {
    id: 3,
    value: 2,
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
]

export const useGameBoard = createStore(initialState, (set, get) => ({}))
