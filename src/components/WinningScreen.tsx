import { useGameBoard } from "../state/store"

export default function WinningScreen() {
  const { onRestart } = useGameBoard()

  return (
    <div className="absolute inset-0 m-auto h-fit top bg-[#1F3641] py-5 ">
      <div className=" container mx-auto text-center flex flex-col gap-y-3">
        <p>YOU WON</p>
        <div className="flex  items-center justify-center gap-x-5">
          <img src="icon-x.svg" alt="X" className="max-w-[56px] max-h-[56px]" />
          <h3 className="text-[#F2B137]">TAKES THE ROUND</h3>
        </div>
        <div className="flex justify-center items-center gap-x-3">
          <div className=" h-full bg-[#A8BFC9] text-[#1A2A33] rounded-xl p-3 shadow-[inset_0_-6px_0px_#6B8997] px-4">
            <button>QUIT</button>
          </div>
          <div
            onclick={onRestart}
            className=" h-[56px] flex justify-center bg-light-yellow hover:bg-[#FFC860] text-[#1A2A33] rounded-xl shadow-[inset_0_-9px_0px_#CC8B13] px-4"
          >
            <button>NEXT ROUND</button>
          </div>
        </div>
      </div>
    </div>
  )
}
