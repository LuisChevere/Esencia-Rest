import BackgroundVideo from "../components/BackgroundVideo";
import Navbar from "../components/Navbar";
import SectionA from "../components/homeSec2";
import SectionB from "../components/homeBanner";
import Feaured from "../components/homeFeatured";
import SectionC from "../components/homeBanner2";

export default function Home() {
  return (
    <>
      <BackgroundVideo>
        {/* NAVBAR */}
        <Navbar />

        {/* HERO CONTENT */}
        <div
          className="hero absolute inset-8 z-30 flex flex-col pt-40 pl-15"
          id="hero"
        >
          <h1 className="culture text-6xl uppercase tracking-[3px]">
            Culture
            <br />
            On a deeper
            <br />
            plate
            <hr className=" w-[60px] border-t-1 border-solid border-gray-300 my-5" />
          </h1>

          <div>
            <p className="soul uppercase tracking-[5px] py-5">
              The Soul of Modern San antonio
            </p>

            <div className="flex flex-row justify-between">
              <div>
                <p className="leading-6 tracking-[1px]">
                  A culinary journey where Mexican and Chinese <br />
                  heritage, Spanish influence, and South Texas
                  <br />
                  traditions converge.
                  <br />
                </p>
                <div className="pt-10">
                  <a
                    className="hero-button text-white border inline-flex items-center px-10 py-3 mb-3 uppercase text-[12px] tracking-[2px] uppercase hover:text-[#C3A15B] hover:border-[#C3A15B]"
                    href="https://www.opentable.com/r/esencia-san-antonio"
                    target="_blank"
                  >
                    Make A Reservation
                  </a>
                </div>
              </div>
              <div className="list uppercase tracking-[4px] text-[12px] leading-7 pl-5">
                <div>
                  <p>
                    Mexico
                    <br />
                    China
                    <br />
                    Spain
                    <br />
                    Asia
                    <br />
                    Texas
                    <br />
                    Together
                    <br />
                    Here
                  </p>

                  <hr className="w-[40px] border-t-1 border-solid border-gray-300 my-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundVideo>

      <SectionA />
      <SectionB />
      <Feaured />
      <SectionC />
    </>
  );
}
