import Background from "../assets/section5.png"
import Icon from "../assets/esencia-icon-dark.png"

export default function Section5 () {
    return (
   <section className="">
   
         {/* Hero Image */}
         <div className="group relative w-full overflow-hidden">
           <img
             src={Background}
             alt="Background"
             className="w-full h-[40vh] object-cover"
           />

        <div className="absolute bottom-0 left-10 right-10 z-10 pr-20 pb-10 flex flex-col items-center gap-10">
          
          <img src={Icon} className="w-40" />
          <h4 className=" text-[40px] text-[#211A15] font-thin uppercase item-center leading-0 tracking-[6px]">
            Flavor has a place here
          </h4>
                      <div id="button" className="pt-">
                <a className="hover:bg-black hover:text-[#e9e0d2] hover:border-[#e9e0d2] text-[#211A15] border inline-flex items-center px-10 py-3 mb-3 uppercase text-[18px] tracking-[2px]" href="https://www.opentable.com/r/esencia-san-antonio" target="_blank">
                    Make A Reservastion
                </a>
                            
            </div>
          <hr className=" w-[60px] border-t-2 border-solid border-[#211A15]" />

        <span className="block w-full text-center text-[#211A15] text-[20px] uppercase tracking-[5px] font-normal">The St. Anthony<br/>
          300 E. Travis St. San Antonio, TX 
          </span> 
          
        </div>
         </div>
      
    </section>
    )
}