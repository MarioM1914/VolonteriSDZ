import React, { useState } from "react";

function Aktivnost({ aktivnosti }) {

  const [formaPodaci, setPodatke] = useState({
    ime: "",
    prezime: "",
    imeUdruge: "",
    naziv: "",
    opis: "",
    lokacija: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
  });

  const detalji = aktivnosti;
  console.log(detalji);

  return (
    <p className="text-white shadow-lg bg-red-500 hover:bg-red-600 focus:ring-2 font-medium rounded-lg text-sm px-2 py-1 focus:outline-none">
      Detalji
    </p>
  );
}

export default Aktivnost;
