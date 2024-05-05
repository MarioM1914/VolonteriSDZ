import React from "react";

function AboutMeCard() {
  return (
    <div className="w-full h-auto pt-10">
      <div className="relative rounded-lg mt-24 mb-32 max-w-full md:max-w-xl mx-auto">
        <div className="rounded overflow-hidden shadow-md bg-white">
          {/* Image */}
          <div className="absolute -mt-20 w-full flex justify-center">
            <div className="h-32 w-32">
              <img
                src="/src/assets/profileCard.jpg"
                className="rounded-full object-cover h-full w-full shadow-lg"
              />
            </div>
          </div>
          <div className="px-6 mt-16">
            <h1 className="font-bold text-3xl text-center mb-1">Mario Marić</h1>
            <p className="text-gray-700 text-sm text-center">
              Software Engineer
            </p>
            <p className="text-center text-gray-700 text-base pt-3 font-normal">
              Student sam 5. godine računarstva na splitskom FESB-u. JuniorDEV
              REACTjs tečaj mi je pomogao u unaprijeđenju dosadašnjih vještina
              zahvaljujući iskusnim predavačima i odlično napravljanoj
              literaturi.
            </p>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a
                href="https://github.com/MarioM1914"
                target="_blank"
                className="mx-5 text-2xl"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mario-mari%C4%87-472642254/"
                target="_blank"
                className="mx-5 text-2xl"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeCard;
