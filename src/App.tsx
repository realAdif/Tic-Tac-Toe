import { Route, Router } from "kaioken"
import HomePage from "./components/HomePage"
import Game from "./components/Game"
// import WinningScreen from "./components/WinningScreen"

export function App() {
  return (
    <main className=" w-[360px] md:w-[460px]">
      <Router>
        <Route path="/" element={<HomePage />} />
        <Route path="/:game" element={<Game />} />
      </Router>
    </main>
  )
}
