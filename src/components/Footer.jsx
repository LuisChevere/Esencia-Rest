import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdOutlineTableBar } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer flex flex-col bg-[#14120F] py-10">
      {/* TOP FOOTER */}
      <nav className="footer-nav flex flex-row pl-115 justify-evenly">
        {/* NAVIGATION */}
        <ul className="footer-links flex flex-row uppercase justify-center gap-30 tracking-[2px] text-[12px]">
          <li>
            <a href="/press">Press</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
          <li>
            <a href="/gift-cards">Gift Cards</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        {/* SOCIAL ICONS */}
        <ul className="footer-socials flex flex-row pl-80 gap-10">
          <li>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
          </li>

          <li>
            <a href="#" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
          </li>

          <li>
            <a href="#" aria-label="Reservations">
              <MdOutlineTableBar size={20} />
            </a>
          </li>
        </ul>

        {/* DIVIDER */}
      </nav>

      <hr className=" footer-h w-[90%] item-center border-t-1 border-solid border-[#c3a15b] mt-10 mb-5 mx-20" />

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom flex flex-row justify-between pl-20 pr-27">
        <p className="text-[12px] uppercase tracking-[2px]">
          &copy; {currentYear} Esencia. All rights reserved.
        </p>

        <p className="text-[12px] tracking-[2px] uppercase">
          A restaurant at the St. Anthony
        </p>
      </div>
    </footer>
  );
}
