import Background from "../assets/section4.png";

export default function Section3() {
  return (
    <section className="">
      {/* Hero Image */}
      <div className="group relative w-full overflow-hidden">
        <img
          src={Background}
          alt="Background"
          className="w-full h-[30vh] object-cover"
        />

        <div className="absolute bottom-12 left-10 right-10 z-10 pr-20 flex flex-col items-center">
          <h4 className="mb-8 text-[60px] font-thin uppercase item-center leading-0">
            "Where Cowbot Boots
          </h4>
          <h2 className="mb-7 text-[60px] font-thin uppercase item-center pl-15 leading-15">
            Meets Streetwear."
          </h2>

          <hr className=" w-[60px] border-t-2 border-solid border-gray-300 my-3" />
        </div>
      </div>
    </section>
  );
}
