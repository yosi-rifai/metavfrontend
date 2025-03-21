const MyComponent = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center text-center">
        {/* Background Image Absolute */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: "url('/images/pattern-title.png')" }}></div>

        {/* Konten */}
        <div className="relative z-10 text-black px-6 pt-10">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">METAVFEST 2025</h1>
            <p className="text-lg md:text-xl drop-shadow-md">
            Your ultimate guide to the anime, gaming & crypto community event
            </p>
        </div>
    </div>
  );
};

export default MyComponent;