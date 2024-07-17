import { useGameBoard } from "../state/store"
export default function GameBoard() {
  const { value, vsCPU } = useGameBoard()
  return (
    <div className="grid grid-cols-3  grid-rows-3  gap-4 w-full">
      {
        // 3x3 grid
        value.cells.map((i) => (
          <button
            onclick={() => vsCPU(i.id)}
            key={i.id}
            className="w-[96px] h-[96px]  md:w-[140px] md:h-[140px] bg-primary rounded-2xl  shadow-[inset_0_-9px_0px_#10212A]"
          >
            {i.value === 1 ? (
              <img
                src="icon-x.svg"
                alt="icon-x"
                className="w-16 mx-auto mb-2"
              />
            ) : i.value === 2 ? (
              <img
                src="icon-o.svg"
                alt="icon-o"
                className="w-16 mx-auto mb-2"
              />
            ) : null}
          </button>
        ))
      }
    </div>
  )
}
