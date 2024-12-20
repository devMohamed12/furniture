import React from 'react'

const Hero = ({data : {img, title, description, buttonText}}) => {
  return (
    <div
      className="hero min-h-[800px]"
      style={{
        backgroundImage:
          `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-white text-center -translate-y-2/3">
        <div className="max-w-md">
          <h2 className="mb-5 text-5xl font-bold">{title}</h2>
          <p className="mb-5">{description}</p>
          <button className="btn  btn-outline  rounded-xl text-white hover:bg-white hover:text-main">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero