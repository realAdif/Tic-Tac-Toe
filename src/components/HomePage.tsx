import { Link } from "kaioken"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10 w-full">
      {/* top icon */}
      <div className="flex justify-center gap-2">
        <img src="icon-x.svg" alt="icon-x" className="w-8 h-8" />
        <img src="icon-o.svg" alt="icon-o" className="w-8 h-8" />
      </div>
      {/* pick a player */}
      <div className=" bg-primary rounded-2xl p-3 w-full shadow-[inset_0_-9px_0px_#10212A]">
        <h1 className=" uppercase text-center py-2 tracking-[1px]">
          Pick player 1's Mark
        </h1>
        <div className="bg-[#1A2A33] flex p-2 rounded-xl">
          <button className="w-1/2 h-14 rounded-xl mx-auto hover:bg-[#A8BFC9] opacity-50">
            <img
              src="/icon-x-silver.svg"
              alt="x-outline"
              className="mx-auto w-8 h-8"
            />
          </button>
          <button className="w-1/2 h-14 rounded-xl bg-[#A8BFC9]">
            <img
              src="/icon-o-silver.svg"
              alt="x-outline"
              className="mx-auto w-8 h-8"
            />
          </button>
        </div>
        <p className="uppercase text-center py-2">Remember: X Goes first</p>
      </div>
      {/* button */}
      <div className="flex flex-col gap-5">
        <Link
          to="/cpu"
          className="w-full  bg-light-yellow hover:bg-[#FFC860] text-[#1A2A33] h-[67px] rounded-xl shadow-[inset_0_-9px_0px_#CC8B13]"
        >
          <h2 className="mt-2 text-center">NEW GAME (VS CPU)</h2>
        </Link>
        <Link
          to="/player"
          className="w-full bg-light-blue hover:bg-[#65E9E4] text-[#1A2A33] h-[67px] rounded-xl shadow-[inset_0_-9px_0px_#118C87]"
        >
          <h2 className="mt-2 text-center">NEW GAME (VS PLAYER)</h2>
        </Link>
      </div>
    </div>
  )
}
