import React from 'react'

function Udruga({ udr }) {
  return (
    <>
      <h2 className="text-center font-bold pb-6 text-xl">
        Udruga "{udr.imeUdruge}"
      </h2>
      <ul>
        <li className="flex flex-col space-y-2">
          <p className="font-normal text-lg">
            <span className="mr-6 font-semibold">Ime udruge:</span>{" "}
            {udr.imeUdruge}
          </p>
          <p className="font-normal text-lg">
            <span className="mr-6 font-semibold">Adresa udruge:</span>{" "}
            {udr.adresa}
          </p>
          <p className="font-normal text-lg">
            <span className="mr-6 font-semibold">Lokacija udruge:</span>{" "}
            {udr.lokacija}
          </p>
        </li>
      </ul>
    </>
  )
}

export default Udruga
