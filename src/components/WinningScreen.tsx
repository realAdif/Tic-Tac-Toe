export default function WinningScreen() {
  return (
    <div className="absolute top-0  top bg-[#1F3641]">
      <div className="">
        <h1>OH NO, YOU LOST...</h1>
        <div>
          <img src="icon-o.svg" alt="icon-o" />
          <h4>TAKE THE ROUND</h4>
        </div>
        <div>
          <button>QUIT</button>
          <button>NEXT ROUND</button>
        </div>
      </div>
    </div>
  )
}
