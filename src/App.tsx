import { Route, Router } from "kaioken"
import HomePage from "./components/HomePage"

export function App() {
  return (
    <main className=" w-[360px] md:w-[460px]">
      <Router>
        <Route path="/" element={() => <HomePage />} />
        <Route path="/cpu" element={() => <h1>CPU</h1>} />
        <Route path="/player" element={() => <h1>Player</h1>} />
      </Router>
    </main>
  )
}
