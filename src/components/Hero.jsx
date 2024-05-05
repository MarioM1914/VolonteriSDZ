import React from "react";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <div className="max-w-full h-[34vw]">
          <img
            src={props.heroImg}
            alt="HeroImg"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 md:pb-24">
          <h1 className="text-white font-bold text-xl sm:text-2xl md:text-5xl pb-4">
            {props.title}
          </h1>
            <p className="text-white text-sm md:text-2xl mx-12">{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
