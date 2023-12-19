const Banner = () => {
  return (
    <>
      <div
        className="hero h-96"
        style={{
          backgroundImage:
            "url(https://e0.pxfuel.com/wallpapers/761/257/desktop-wallpaper-background-for-student-portal-tip-college-student.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold italic">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-sm btn-primary ">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
