import { Route, Router } from "kaioken"
import HomePage from "./components/HomePage"

export function App() {
  return (
    <main className="">
      <Router>
        <Route path="/" element={() => <HomePage />} />
      </Router>
    </main>
  )
}
