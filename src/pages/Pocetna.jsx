import React from "react";
import Hero from "../components/Hero";
import AboutMeCard from "../components/AboutMeCard";

function Pocetna() {
  return (
    <>
      <Hero
        cName="relative"
        heroImg={"/src/assets/HeroImg.jpg"}
        title="Vaša Pomoć, Naša Priča"
        text="Dobrodošli na volontersku platformu Splitsko-dalmatinske županije"
      />

      {/* Card 1 */}
      <div className="flex flex-wrap">
        <div className="w-full h- md:max-w-full mt-16">
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md">
            <img
              src="/src/assets/card1.jpg"
              alt="Image"
              className="h-72 md:w-1/2 object-cover filter grayscale rounded-tl-lg rounded-tr-lg md:rounded-bl-lg md:rounded-tr-none"
            />
            <div className="md:w-1/2 flex flex-wrap justify-start items-center pl-6 pt-4 pb-4 mx-3">
              <p className="text-gray-700">
                Ovdje se okupljamo kako bismo zajedno gradili bolju zajednicu
                kroz nesebično davanje i volonterski rad.
                <p className="text-gray-700">
                  <span className="font-bold text-red-400">
                    Splitsko-dalmatinska županija
                  </span>
                  , smještena duž prekrasnog jadranskog obalnog pojasa, nije
                  samo dom prekrasnih prirodnih ljepota već i zajednice
                  ispunjene srčanim pojedincima spremnim{" "}
                  <span className="font-bold text-red-400">
                    pružiti pomoć i podršku
                  </span>
                  .
                </p>
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="w-full max-w-full mt-16 mb-4">
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md">
            <div className="md:w-1/2 flex flex-wrap justify-start items-center pl-6 pt-4 pb-4 mx-3 order-2 md:order-1">
              <p className="text-gray-700">
                Pridružite nam se u{" "}
                <span className="font-bold text-red-400">
                  našoj misiji izgradnje zajedništva i solidarnosti
                </span>{" "}
                te ostvarivanju pozitivnih promjena u našoj prekrasnoj županiji.
                <p className="text-gray-700">
                  <span className="font-bold text-red-400">
                    Vaša podrška i angažman
                  </span>{" "}
                  od vitalnog su značaja za našu zajednicu, te smo uvjereni da
                  ćemo zajedničkim snagama ostvariti izvanredne rezultate.
                </p>
              </p>
            </div>
            <img
              src="/src/assets/card2.jpg"
              alt="Image"
              className="h-72 order-1 md:order-2 md:w-1/2 object-cover rounded-tr-lg rounded-tl-lg md:rounded-br-lg md:rounded-tl-none"
            />
          </div>
        </div>
      </div>
      <AboutMeCard />
    </>
  );
}

export default Pocetna;
