import GameBoard from "./GameBoard"
import { useGameBoard } from "../state/store"
export default function Game() {
  const { value, onRestart } = useGameBoard()
  return (
    <div className="flex flex-col gap-5">
      {/* top */}
      <div className="flex justify-between items-center">
        {/* icons */}
        <div className="flex w-8 h-8 gap-2">
          <img src="icon-x.svg" alt="icon-x" />
          <img src="icon-o.svg" alt="icon-o" />
        </div>
        {/* turn */}
        <div className="bg-primary rounded-2xl p-3 shadow-[inset_0_-9px_0px_#10212A] w-36 ">
          <div className="flex gap-2 justify-center items-center mb-2">
            {value.currentPlayer === 1 ? (
              <img src="icon-x.svg" alt="icon-x" className=" w-5" />
            ) : (
              <img src="icon-o.svg" alt="icon-o" className=" w-5" />
            )}

            <h1>TURN</h1>
          </div>
        </div>
        {/* restart */}
        <div className="bg-[#A8BFC9] rounded-xl p-3 shadow-[inset_0_-6px_0px_#6B8997] h-full w-13">
          <button onclick={onRestart}>
            <img src="icon-restart.svg" alt="icon-restart" className="w-5" />
          </button>
        </div>
      </div>
      <GameBoard />
      {/* points/footer */}
      <div className="flex justify-between gap-2">
        <div className="bg-light-blue text-[#1A2A33] w-[140px] h-[72px]  text-center rounded-xl ">
          <div className="h-full flex flex-col justify-center items-center">
            <p>{value.playerXWins}(YOU)</p>
            <p>0</p>
          </div>
        </div>
        <div className="bg-[#A8BFC9] text-[#1A2A33] w-[140px] h-[72px] text-center rounded-xl">
          <div className="h-full flex flex-col justify-center items-center">
            <p>TIES</p>
            <p>{value.ties}</p>
          </div>
        </div>
        <div className="bg-light-yellow text-[#1A2A33] w-[140px] h-[72px] text-center rounded-xl">
          <div className="h-full flex flex-col justify-center items-center">
            <p>{value.playerOWins}(CPU)</p>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  )
}
