import React from "react";

function Aktivnost({ akt }) {

  return (
    <>
      <h2 className="text-center font-bold pb-6 text-xl">
        Aktivnost "{akt.dogadaj.naziv}"
      </h2>
      <ul>
        <li className="flex flex-col space-y-2">
          <p className="font-normal text-lg">
            <span className="mr-6 font-semibold">Naziv aktivnosti:</span>{" "}
            {akt.dogadaj.naziv}
          </p>
          <p className="font-normal text-lg">
            <span className="mr-6 font-semibold">Organizator aktivnosti:</span>{" "}
            {akt.organizator.ime} {akt.organizator.prezime}
          </p>
          <p className="font-normal text-lg">
            <span className="mr-6 font-semibold">Ime udruge:</span>{" "}
            {akt.organizator.imeUdruge ? (
              <>{akt.organizator.imeUdruge}</>
            ) : (
              <span className="text-red-500">Nije udruga</span>
            )}
          </p>
          <p className="font-normal text-lg">
            <span className="mr-6 font-semibold">Lokacija aktivnosti:</span>{" "}
            {akt.dogadaj.lokacija}
          </p>
          <div className="flex items-start">
            <span className="mr-6 font-semibold text-lg text-nowrap">Opis aktivnosti:</span>{" "}
            <p className="font-normal text-md">{akt.dogadaj.opis}</p>
          </div>
          <p className="font-normal text-lg">
            <span className="mr-6 font-semibold">Datum aktivnosti:</span>{" "}
            {akt.dogadaj.startDate} - {akt.dogadaj.endDate}
          </p>
          <p className="font-normal text-lg">
            <span className="mr-6 font-semibold">Vrijeme održavanja:</span>{" "}
            {akt.dogadaj.startTime} - {akt.dogadaj.endTime}
          </p>
        </li>
      </ul>
    </>
  );
}

export default Aktivnost;
