import BackgroundVideo from "../components/BackgroundVideo";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <BackgroundVideo>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO CONTENT */}
      <div className="absolute inset-25 z-30 flex flex-col pt-20">
        <h1 className="text-6xl uppercase tracking-[3px]">
          Culture<br/>
          On a deeperS<br/>
          plate
          <hr className=" w-[60px] border-t-1 border-solid border-gray-300 my-5" />
        </h1>


        <div className="flex flex-row gap-250">

            <div id="INfo-button">
                        <p className="uppercase tracking-[5px] py-5">The Soul of Modern San antonio</p>
                        <p className="leading-6">A culinary journey where Mexican and Chinese <br/>
                        heritage, Spanish influence, and South Texas<br/>
                        traditions converge.<br/>
                        </p>
                        <div id="button" className="pt-10">
                            <a className=" text-white border inline-flex items-center px-10 py-3 mb-3 uppercase text-[12px] tracking-[2px] uppercase" href="https://www.opentable.com/r/esencia-san-antonio" target="_blank">
                            Make A Reservastion
                            </a>
                            
                        </div>
                    </div>
                    <div id="list" className="uppercase tracking-[4px] text-[12px] leading-7 pt-30">
                            <p>Mexico<br/>
                            China<br/>
                            Spain<br/>
                            Asia<br/>
                            Texas<br/>
                            Together<br/>
                            Here
                            <hr className=" w-[40px] border-t-1 border-solid border-gray-300 my-5" />
                            </p>
                        </div>
            
        </div>

        
         
      </div>
    </BackgroundVideo>
  );
}