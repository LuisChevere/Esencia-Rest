import Plate from "../assets/section1.png"
import Background from "../assets/section2.png"
import Drink from "../assets/section3.png"

export default function Section2() {
  return (
    <section className="grid w-full grid-cols-1 bg-esencia-black md:grid-cols-3">

      {/* Left Hero */}
      <div className="group relative h-[60vh] min-h-6500px] overflow-hidden">
        <img
          src={Plate}
          alt="Esencia signature dish"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>

      {/* Center Hero */}
      <a
        className="group relative h-[60vh] min-h-[600px] overflow-hidden"
      >
        <img
          src={Background}
          alt="About Us"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-esencia-black/95 via-esencia-black/40 to-transparent" />

        <div className="absolute bottom-12 left-10 right-10 z-10 px-6">
          
          <h2 className="mb-7 text-5xl font-thin uppercase leading-[0.9] lg:text-6xl uppercase">
            More
            <br />
            Than A Meal
            <hr className=" w-[60px] border-t-1 border-solid border-gray-300 my-5" />
          </h2>

            <span id="meal" className="mb-5 block text-[14px] tracking-[0.28em] leading-8 font-bondoni">
                Esencia is a reflection of place, people,<br/>
                and posibility. Rooted in heritage,<br/>
                shaped by travel, and inspired by the<br/>
                energy of San Antonio, our menu<br/>
                brings unexpected flavors into harmony.
            </span>

          <span className=" pb-2 font-manrope text-[14px] font-semibold uppercase tracking-[0.2em]">
            Our Story →
          </span>
        </div>
      </a>

      {/* Right Hero */}
      <a
        className="group relative h-[60vh] min-h-[600px] overflow-hidden"
      >
        <img
          src={Drink}
          alt="Drink"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-esencia-black/95 via-esencia-black/40 to-transparent" />

        <div className="absolute top-5 left-105 z-10">
          <span className="mb-5 block text-[13px] uppercase tracking-[0.28em] leading-8 uppercase">
            Tradition<br/>
            Meets<br/>
            What's<br/>
            Next.
            <hr className=" w-[50px] border-t-1 border-solid border-gray-300 my-5" />
          </span>

          
        </div>
      </a>

    </section>
  )
}