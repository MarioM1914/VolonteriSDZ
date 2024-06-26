import React from "react";
import AktivnostiLista from "../components/AktivnostiLista";

function Aktivnosti({aktivnosti, dodaj, obrisiAktivnost, fetchAktivnosti }) {

  return (
    <>
      <div className="pb-24 pt-4">
        <h2 className="text-2xl font-bold text-center pt-4 pb-8">
          Popis Aktivnosti
        </h2>
        <AktivnostiLista
          aktivnosti={aktivnosti}
          dodaj={dodaj}
          obrisiAktivnost={obrisiAktivnost}
          fetchAktivnosti={fetchAktivnosti}
        />
      </div>
    </>
  );
}

export default Aktivnosti;
