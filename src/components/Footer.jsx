import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineTableBar } from "react-icons/md";

export default function Footer() {
  return (
    <div className="flex flex-col bg-[#14120F] py-10">
      <nav className=" flex flex-row pl-105 justify-evenly">
        <ul className=" flex flex-row uppercase justify-center gap-20 tracking-[2px] text-[12px]">
          <li>
            <a>Press</a>
          </li>
          <li>
            <a>Careers</a>
          </li>
          <li>
            <a>Gift Cards</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>

        <ul className="flex flex-row pl-70 gap-10">
          <li>
            <a>
              <FaInstagram size={20} />
            </a>
          </li>
          <li>
            <a>
              <FaFacebookF size={20} />
            </a>
          </li>
          <li>
            <a>
              <MdOutlineTableBar size={20} />
            </a>
          </li>
        </ul>
      </nav>
      <hr className="w-[90%] item-center border-t-1 border-solid border-[#c3a15b] mt-10 mb-5 mx-20" />
      <div className="flex flex-row justify-between pl-20 pr-5">
        <p className=" text-[12px] uppercase tracking-[2px]">
          &copy; {new Date().getFullYear()} Esencia. All rights reserved.
        </p>
        <p className="text-[12px] pr-15 flex justify-end tracking-[2px] uppercase">
          A restaurant at the St. Anthony
        </p>
      </div>
    </div>
  );
}
