import { createContext, useContext, useState } from "kaioken"

const appContext = createContext({})

function AppContextProvider({ children }: { children: any }) {
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

  const onRestart = () => {}

  return (
    <appContext.Provider
      value={{
        initialCells,
        setInitialCells,
      }}
    >
      {children}
    </appContext.Provider>
  )
}

const useAppContext = () => useContext(appContext)
export { AppContextProvider, useAppContext }
