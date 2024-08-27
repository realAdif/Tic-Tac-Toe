import { createContext, useContext, useState } from "kaioken"

const appContext = createContext({})

function AppContextProvider({ children }: { children: any }) {
  const [gameState, setGameState] = useState({
    playerOScores: 0,
    playerXScores: 0,
    tie: 0,
    currentPlayer: "x",
  })
  const [initialCells, setInitialCells] = useState<Cells[]>([
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
  ])

  const changePlayer = () => {
    return setGameState((prev: any) => {
      return {
        ...prev,
        currentPlayer: prev.currentPlayer === "x" ? "o" : "x",
      }
    })
  }

  const restartGame = () => {
    setGameState({
      playerOScores: 0,
      playerXScores: 0,
      tie: 0,
      currentPlayer: "x",
    })
    setInitialCells([
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
    ])
  }
  const nextRound = () => {
    return console.log("next round")
  }

  return (
    <appContext.Provider
      value={{
        initialCells,
        setInitialCells,
        gameState,
        setGameState,
        changePlayer,
        restartGame,
      }}
    >
      {children}
    </appContext.Provider>
  )
}

const useAppContext = () => useContext(appContext)
export { AppContextProvider, useAppContext }
