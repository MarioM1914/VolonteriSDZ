import React from 'react'
import UdrugeLista from '../components/UdrugeLista'

function Udruge({ udruge, dodajUdrugu, obrisiUdrugu, fetchUdruge }) {
  return (
    <>
      <div className="pb-24 pt-4">
        <h2 className="text-2xl font-bold text-center pt-4 pb-8">
          Popis Udruga
        </h2>
        <UdrugeLista
          udruge={udruge}
          dodajUdrugu={dodajUdrugu}
          obrisiUdrugu={obrisiUdrugu}
          fetchUdruge={fetchUdruge}
        />
      </div>
    </>
  )
}

export default Udruge
