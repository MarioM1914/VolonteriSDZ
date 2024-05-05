import React from "react";
import RedakListe from "./RedakListe";
import DodajAktivnostButton from "./DodajAktivnostButton";

function AktivnostiLista({ aktivnosti, dodaj, obrisiAktivnost, dohvatiDetaljeAktivnosti }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 pl-2 bg-white">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Pretraži aktivnosti"
          />
        </div>
        <DodajAktivnostButton dodaj={dodaj} />
      </div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Naziv aktivnosti
            </th>
            <th scope="col" className="px-6 py-3">
              Lokacija
            </th>
            <th scope="col" className="px-6 py-3">
              Datum održavanja
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Akcija
            </th>
          </tr>
        </thead>
        <tbody>
          {aktivnosti.map((aktivnost) => (
            <RedakListe
              key={aktivnost.id}
              type="aktivnosti"
              akt={aktivnost}
              obrisiAktivnost={obrisiAktivnost}
              dohvatiDetaljeAktivnosti={dohvatiDetaljeAktivnosti}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AktivnostiLista;
