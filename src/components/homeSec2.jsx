import Plate from "../assets/section1.png";
import Chef from "../assets/Chefleo.JPG";
import Drink from "../assets/section3.png";

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
      <a className="group relative h-[60vh] min-h-[600px] overflow-hidden">
        <img
          src={Chef}
          alt="About Us"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/85 via-[#14120F]/45 to-transparent" />

        <div className="absolute bottom-12 left-10 right-10 z-10 px-6">
          <span className="uppercase tracking-[4px] text-[#C3A15B]">
            About the chef
          </span>
          <h2 className="mb-7 text-5xl font-thin uppercase leading-16 lg:text-6xl">
            Leo
            <br />
            Dávila
            <hr className=" w-[60px] border-t-1 border-solid border-gray-300 my-5" />
          </h2>

          <span
            id="meal"
            className="mb-5 block text-[12px] tracking-[0.28em] leading-6 font-bondoni"
          >
            Chef Leo Dávila brings together heritage,
            <br />
            curiousity, and the flavors of San Antonio
            <br />
            to create a cuisine rooted in culture
            <br />
            and shaped by possibility.
          </span>

          <span className=" pb-2 text-[14px] uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-[#C3A15B]">
              Meet Chef Leo →
            </a>
          </span>
        </div>
      </a>

      {/* Right Hero */}
      <a className="group relative h-[60vh] min-h-[600px] overflow-hidden">
        <img
          src={Drink}
          alt="Drink"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-esencia-black/95 via-esencia-black/40 to-transparent" />

        <div className="absolute top-5 left-105 z-10">
          <span className="mb-5 block text-[13px] uppercase tracking-[0.28em] leading-8 uppercase">
            Tradition
            <br />
            Meets
            <br />
            What's
            <br />
            Next.
            <hr className=" w-[50px] border-t-1 border-solid border-gray-300 my-5" />
          </span>
        </div>
      </a>
    </section>
  );
}
