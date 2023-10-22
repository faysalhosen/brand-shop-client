import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/rFR8YSy/screen.webp)",
            //https://www.gadstyle.com/wp-content/uploads/2023/05/screen-protector-web-banner-Design-small-768x384.webp
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Discover the Perfect Phone for You</h1>
            <p className="mb-5">
              Explore our wide range of mobile phones designed to suit your unique needs. From flagship devices to budget-friendly options, we have something for everyone.
            </p>
            <button className="btn btn-primary">Shop Phones</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
