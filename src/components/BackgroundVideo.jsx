import bgvid from "../assets/WokVideo.mp4";

export default function BackgroundVideo({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* VIDEO */}
      <video
        className="absolute inset-0 w-full h-200 object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={bgvid} type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 min-h-screen w-full">
        {children}
      </div>

    </div>
  );
}