import { useRouter } from "kaioken"
import { useAppContext } from "../context/appContext"

export default function GameBoard() {
  const { initialCells, setInitialCells, gameState, changePlayer } =
    useAppContext()
  const { params } = useRouter()

  const updateCell = (cellId: number) => {
    for (let i = 0; i < initialCells.length; i++) {
      if (initialCells[i].id === cellId && initialCells[i].value === "") {
        setInitialCells((prev: Cells[]) => {
          return prev.map((cell: Cells) => {
            if (cell.id === cellId) {
              changePlayer()
              return {
                ...cell,
                value: gameState.currentPlayer,
              }
            }
            return cell
          })
        })
      }
    }
  }

  return (
    <div className="grid grid-cols-3  grid-rows-3  gap-4 w-full">
      {initialCells.map((i: Cells) => (
        <button
          onclick={() =>
            params.game === "player" ? updateCell(i.id) : updateCell(i.id)
          }
          key={i.id}
          className="w-[96px] h-[96px]  md:w-[140px] md:h-[140px] bg-primary rounded-2xl  shadow-[inset_0_-9px_0px_#10212A]"
        >
          {i.value === "x" ? (
            <img
              src="icon-x.svg"
              alt="icon-x"
              className="w-12 md:w-16 mx-auto mb-2"
            />
          ) : i.value === "o" ? (
            <img
              src="icon-o.svg"
              alt="icon-o"
              className="w-12 md:w-16 mx-auto mb-2"
            />
          ) : null}
        </button>
      ))}
    </div>
  )
}
