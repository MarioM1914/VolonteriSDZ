import React from 'react'

function Volonter({ vol }) {
  return (
    <>
      <h2 className="text-center font-bold pb-6 text-xl">
        Detalji volontera
      </h2>
      <ul>
        <li className="flex flex-col space-y-2">
          <p className="font-normal text-lg">
            <span className="mr-6 font-semibold">Ime volontera:</span>{" "}
            {vol.imeVolontera} {vol.prezimeVolontera}
          </p>
          <p className="font-normal text-lg">
            <span className="mr-6 font-semibold">Lokacija volontera:</span>{" "}
            {vol.lokacija}
          </p>
          <p className="font-normal text-lg">
            <span className="mr-6 font-semibold">Dob volontera:</span>{" "}
            {vol.dob}
            </p>
          <p className="font-normal text-lg">
            <span className="mr-6 font-semibold">Spol volontera:</span>{" "}
            {vol.spol}
          </p>
        </li>
      </ul>
    </>
  )
}

export default Volonter
