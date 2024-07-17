export default function GameBoard() {
  const gameBoard = [1, 2, 4, 3, 4, 6, 6, 7, 8]

  return (
    <div className="grid grid-cols-3 grid-rows-3  gap-4 ">
      {
        // 3x3 grid
        gameBoard.map((i) => (
          <div
            key={i}
            className="w-[140px] h-[140px] bg-primary rounded-2xl  shadow-[inset_0_-9px_0px_#10212A] "
          ></div>
        ))
      }
    </div>
  )
}
