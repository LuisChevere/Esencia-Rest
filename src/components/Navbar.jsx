import Name from "../assets/esencia-name.png"

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 flex justify-center uppercase text-[10px] tracking-[5px] p-10">
            <ul className="text-white flex flex-row gap-12 pr-40 mt-3">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menus</a></li>
            </ul>
            
            <a>
             <img className="w-70" src={Name} alt="Restaurant name" />   
            </a>
            

            <ul className="text-white flex flex-row gap-12 pl-30 pr-20 mt-3">
                <li><a>Private Dinning</a></li>
                <li><a>Gallery</a></li>
                <li><a>contact</a></li>
                
                
            </ul>
            <a className=" text-white bg-black border inline-flex items-center px-6  mb-3 uppercase text-[10px]" href="https://www.opentable.com/r/esencia-san-antonio" target="_blank">
             Reservastions
            </a>
           
        </nav>
    )

}