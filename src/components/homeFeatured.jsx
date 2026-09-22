import Menu from "../assets/themenu.png";
import Space from "../assets/thespace.png";
import Private from "../assets/theprivate.png";
import Gallery from "../assets/thegallery.png";

export default function Featured() {
  return (
    <section className="grid w-full grid-cols-1 md:grid-cols-4">
      {/*MENU PANEL MENU */}
      <a className="group relative min-h-[600px] overflow-hidden">
        <img
          src={Menu}
          alt="Menus"
          className="border-1 border-[#E9E0D2]/20 absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/95 via-[#14120F]/45 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-10 left-7 right-7 z-10 md:bottom-12 md:left-10 md:right-10">
          <h2 className="mb-7 text-4xl font-normal uppercase leading-[0.92] tracking-wide ">
            Menus
          </h2>

          <span className="mb-5 block text-[14px] uppercase tracking-[0.28em]">
            Bold Flavors.
            <br />
            Deep Roots.
          </span>

          <span className="inline-block pb-2 text-[12px] uppercase tracking-[0.2em] transition-colors duration-300 group-hover:text-[#C3A15B]">
            View Menu →
          </span>
        </div>
      </a>

      {/*SPACE PANEL MENU */}
      <a className="group relative min-h-[600px] overflow-hidden">
        <img
          src={Space}
          alt="The Space"
          className=" border-1 border-[#E9E0D2]/20 absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/95 via-[#14120F]/45 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-10 left-7 right-7 z-10 md:bottom-12 md:left-10 md:right-10">
          <h2 className="mb-7 text-4xl font-normal uppercase leading-[0.92] tracking-wide ">
            The Space
          </h2>

          <span className="mb-5 block text-[14px] uppercase tracking-[0.28em]">
            History in
            <br />
            Every Detail.
          </span>

          <span className="inline-block pb-2 text-[12px] uppercase tracking-[0.2em] transition-colors duration-300 group-hover:text-[#C3A15B]">
            Explore →
          </span>
        </div>
      </a>

      {/*PRIVATE PANEL MENU */}
      <a className="group relative min-h-[600px] overflow-hidden">
        <img
          src={Private}
          alt="Private Dinning"
          className="border-1 border-[#E9E0D2]/20 absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/95 via-[#14120F]/45 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-10 left-7 right-7 z-10 md:bottom-12 md:left-10 md:right-10">
          <h2 className="mb-7 text-4xl font-normal uppercase leading-[0.92] tracking-wide ">
            Private Dining
          </h2>

          <span className="mb-5 block text-[14px] uppercase tracking-[0.28em]">
            Intimate moments.
            <br />
            Extraordinary flavor.
          </span>

          <span className="inline-block pb-2 text-[12px] uppercase tracking-[0.2em] transition-colors duration-300 group-hover:text-[#C3A15B]">
            Learn More →
          </span>
        </div>
      </a>

      {/*GALLERY PANEL MENU */}
      <a className="group relative min-h-[600px] overflow-hidden">
        <img
          src={Gallery}
          alt="Gallery"
          className="border-1 border-[#E9E0D2]/20 absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/95 via-[#14120F]/45 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-10 left-7 right-7 z-10 md:bottom-12 md:left-10 md:right-10">
          <h2 className="mb-7 text-4xl font-normal uppercase leading-[0.92] tracking-wide ">
            Gallery
          </h2>

          <span className="mb-5 block text-[14px] uppercase tracking-[0.28em]">
            A look inside
            <br />
            Esencia.
          </span>

          <span className="inline-block pb-2 text-[12px] uppercase tracking-[0.2em] transition-colors duration-300 group-hover:text-[#C3A15B]">
            View Gallery →
          </span>
        </div>
      </a>
    </section>
  );
}
