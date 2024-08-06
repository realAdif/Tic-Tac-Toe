import { useGameBoard } from "../state/store"
import { useRouter } from "kaioken"
export default function GameBoard() {
  const { value, vsPlayer, vsCPU } = useGameBoard()
  const { params } = useRouter()

  return (
    <div className="grid grid-cols-3  grid-rows-3  gap-4 w-full">
      {
        // 3x3 grid
        value.cells.map((i: Cells) => (
          <button
            onclick={() =>
              params.game === "player" ? vsPlayer(i.id) : vsCPU(i.id)
            }
            key={i.id}
            className="w-[96px] h-[96px]  md:w-[140px] md:h-[140px] bg-primary rounded-2xl  shadow-[inset_0_-9px_0px_#10212A]"
          >
            <p>{i.id}</p>
            {i.value === "x" ? (
              <img
                src="icon-x.svg"
                alt="icon-x"
                className="w-16 mx-auto mb-2"
              />
            ) : i.value === "o" ? (
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
