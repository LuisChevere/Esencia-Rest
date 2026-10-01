import { useState } from "react";
import Name from "../assets/esencia-name.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menus", href: "/menus" },
    { name: "Private Dining", href: "/private-dining" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="esencia-navbar">
      {/* DESKTOP NAVBAR */}
      <div className="desktop-navbar uppercase text-[10px] tracking-[5px] p-10">
        {/* LEFT LINKS */}
        <ul className="text-white flex flex-row gap-12 pr-40 mt-3">
          {navLinks.slice(0, 3).map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-[#C3A15B]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* LOGO */}
        <a href="/" className="shrink-0">
          <img className="w-70" src={Name} alt="Esencia San Antonio" />
        </a>

        {/* RIGHT LINKS */}
        <ul className="text-white flex flex-row gap-12 pl-30 pr-20 mt-3">
          {navLinks.slice(3).map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-[#C3A15B]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* RESERVATIONS */}
        <a
          className="text-white bg-black border border-white/50 inline-flex items-center px-6 py-3 mt-2 uppercase text-[10px] whitespace-nowrap transition-all duration-300 hover:text-[#C3A15B] hover:border-[#C3A15B] hover:bg-transparent"
          href="https://www.opentable.com/r/esencia-san-antonio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reservations
        </a>
      </div>

      {/* TABLET AND MOBILE NAVBAR */}
      <div className="mobile-navbar relative z-[60] items-center justify-between px-6 sm:px-10 lg:px-16 py-5">
        {/* LOGO */}
        <a href="/" onClick={closeMenu}>
          <img className="w-48 sm:w-56" src={Name} alt="Esencia San Antonio" />
        </a>

        {/* HAMBURGER BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-[70] flex flex-col justify-center items-end gap-[6px] w-10 h-10 cursor-pointer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-[1px] w-8 bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />

          <span
            className={`block h-[1px] w-6 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block h-[1px] w-8 bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu fixed inset-0 z-50 bg-[#14120F] flex flex-col justify-center px-10 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-full"
        }`}
      >
        <ul className="flex flex-col">
          {navLinks.map((link, index) => (
            <li key={link.name} className="border-b border-[#C3A15B]/20">
              <a
                href={link.href}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className="flex items-center gap-6 py-5 text-[#E9E0D2] font-serif text-2xl tracking-[2px] uppercase cursor-pointer transition-colors duration-300 hover:!text-[#C3A15B] focus-visible:!text-[#C3A15B] active:!text-[#C3A15B]"
              >
                <span className="text-[#C3A15B] text-[10px] font-sans tracking-widest">
                  0{index + 1}
                </span>

                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* RESERVATIONS */}
        <a
          href="https://www.opentable.com/r/esencia-san-antonio"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
          className="mt-10 border border-[#C3A15B] text-[#E9E0D2] text-center py-5 uppercase text-[10px] tracking-[4px] transition-all duration-300 hover:bg-[#C3A15B] hover:text-[#14120F]"
        >
          Make a Reservation →
        </a>

        {/* FOOTER */}
        <div className="absolute bottom-8 left-0 w-full text-center text-[#A99D8A] text-[9px] tracking-[3px]">
          THE ST. ANTHONY · SAN ANTONIO, TEXAS
        </div>
      </div>

      {/* BACKDROP */}
      <div
        onClick={closeMenu}
        className={`mobile-backdrop fixed inset-0 z-40 bg-black/60 transition-opacity duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
    </nav>
  );
}
