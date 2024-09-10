import { createContext, useContext, useEffect, useState } from "kaioken"
interface AppContextType {
  initialCells: Cells[]
  setInitialCells: any
  gameState: {
    playerOScores: number
    playerXScores: number
    tie: number
    currentPlayer: "x" | "o"
  }
  setGameState: any
  changePlayer: () => void
  restartGame: () => void
  isWinner: boolean
  nextRound: () => void
}

const appContext = createContext<AppContextType | undefined>(undefined)

function AppContextProvider({ children }: { children: any }) {
  const [gameState, setGameState] = useState<{
    playerOScores: number
    playerXScores: number
    tie: number
    currentPlayer: "x" | "o"
  }>({
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
  const [isWinner, setIsWiner] = useState<boolean>(false)
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
    setIsWiner(false)
  }

  const nextRound = () => {
    console.log("next round")
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
    setIsWiner(false)
  }

  useEffect(() => {
    const checkWinner = (cells: Cells[]) => {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]
      for (let i = 0; i < winningCombinations.length; i++) {
        for (let j = 0; j < cells.length; j++) {
          const [a, b, c] = winningCombinations[i]
          if (
            cells[a].value &&
            cells[a].value === cells[b].value &&
            cells[a].value === cells[c].value
          ) {
            return setIsWiner(true)
          }
        }
      }
    }
    return checkWinner(initialCells)
  }, [initialCells])

  if (isWinner) {
    if (gameState.currentPlayer === "o") {
      setGameState((prev: any) => ({
        ...prev,
        playerXScores: prev.playerXScores + 1,
      }))
    } else if (gameState.currentPlayer === "x") {
      setGameState((prev: any) => ({
        ...prev,
        playerOScores: prev.playerOScores + 1,
      }))
    }
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
        isWinner,
        nextRound,
      }}
    >
      {children}
    </appContext.Provider>
  )
}

const useAppContext = () => {
  const context = useContext(appContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider")
  }
  return context
}
export { AppContextProvider, useAppContext }
