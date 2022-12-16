const LoadingPacman = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex justify-center items-center flex-col w-full">
        <div className="relative h-16 w-32">
          <div className=" absolute top-0 h-16 w-32">
            <span className="absolute top-6 h-3 w-3 rounded-xl bg-custom-neon-green animate-AnimCircles right-10" />
            <span className="absolute top-6 h-3 w-3 rounded-xl bg-custom-neon-green animate-AnimCircles right-0" />
          </div>
          <div className="pacman h-16 relative">
            <span className="top absolute left-0 right-0 h-16 w-16 animate-Animtop" />
            <span className="bottom absolute left-0 right-0 h-16 w-16 animate-Animbottom" />
            {/* <span className="left absolute left-0 right-0 h-12 w-12" /> */}
            <div className=" absolute top-3 left-8 h-2 w-2 rounded-lg bg-custom-neon-green animate-Animtop" />
          </div>
        </div>
        <div className="text-center mt-8 text-custom-cloudy" />
      </div>
    </div>
  );
};

export default LoadingPacman;
