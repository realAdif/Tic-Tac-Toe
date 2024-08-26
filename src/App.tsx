import { Route, Router } from "kaioken"
import HomePage from "./components/HomePage"
import Game from "./components/Game"
import { AppContextProvider } from "./context/appContext"
export function App() {
  return (
    <div className="w-[360px] md:w-[460px]">
      <AppContextProvider>
        <main>
          <Router>
            <Route path="/" element={<HomePage />} />
            <Route path="/:game" element={<Game />} />
          </Router>
        </main>
      </AppContextProvider>
    </div>
  )
}
// make the context
// remove the other code
// work on  user vs cpu
// work on the winning
// do the same for the user vs user
