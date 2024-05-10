import React, { useEffect, useState } from "react";
import axios from "axios";
import DateTimeRange from "./DateTimeRange";

function UnosForma(props) {
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
  const [gradovi, setGradovi] = useState([]);
  const [udruge, setUdruge] = useState([]);
  const [dateCheck, setDateCheck] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3007/gradovi")
      .then((resp) => setGradovi(resp.data))
      .catch((err) => console.log(err.message));

    axios
      .get("http://localhost:3007/udruge")
      .then((resp) => setUdruge(resp.data))
      .catch((err) => console.log(err.message));
  }, []);

  const saljiPodatke = (event) => {
    event.preventDefault();

    const zaSlanje = obradiPodatke(formaPodaci);

    axios.post("http://localhost:3007/aktivnosti", zaSlanje).then((res) => {
      props.dodaj((stanje) => [...stanje, res.data]);
    });
  };

  function obradiPodatke(objekt) {
    return {
      organizator: {
        ime: objekt.ime,
        prezime: objekt.prezime,
        imeUdruge: objekt.imeUdruge,
      },
      dogadaj: {
        naziv: objekt.naziv,
        opis: objekt.opis,
        lokacija: objekt.lokacija,
        startDate: objekt.startDate,
        startTime: objekt.startTime,
        endDate: objekt.endDate,
        endTime: objekt.endTime,
      },
    };
  }

  function promjenaUlaza(event) {
    const { name, value } = event.target;
    setPodatke({ ...formaPodaci, [name]: value });
  }

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const day = date.getDate();
  //   const month = date.getMonth() + 1;
  //   const year = date.getFullYear();
  //   return `${day}/${month}/${year}`;
  // };

  const handleDateTimeChange = (startDate, startTime, endDate, endTime) => {
    setPodatke({
      ...formaPodaci,
      startDate,
      startTime,
      endDate,
      endTime,
    });

    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    setDateCheck(endDateObj < startDateObj);
  };

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Dodaj novu aktivnost
        </h2>
        <form onSubmit={saljiPodatke}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="naziv"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Naziv aktivnosti{" "}
              </label>
              <input
                type="text"
                name="naziv"
                value={formaPodaci.naziv}
                onChange={promjenaUlaza}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Naziv aktivnosti"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="ime"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Ime{" "}
              </label>
              <input
                type="text"
                name="ime"
                value={formaPodaci.ime}
                onChange={promjenaUlaza}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Ime organizatora"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="prezime"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Prezime{" "}
              </label>
              <input
                type="text"
                name="prezime"
                value={formaPodaci.prezime}
                onChange={promjenaUlaza}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Prezime organizatora"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lokacija"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Lokacija
              </label>
              <select
                name="lokacija"
                value={formaPodaci.lokacija}
                onChange={promjenaUlaza}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                required
              >
                <option value="">-- Odaberi grad --</option>
                {gradovi.map((grad) => (
                  <option key={grad.idGrad} value={grad.imeGrada}>
                    {grad.imeGrada}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <div className="w-full">
                <label
                  htmlFor="imeUdruge"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Udruga (ako organizirate u ime udruge)
                </label>
                <select
                  name="imeUdruge"
                  value={formaPodaci.imeUdruge}
                  onChange={promjenaUlaza}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                >
                  <option value="">-- Ime Udruge --</option>
                  {udruge.map((udruga) => (
                    <option key={udruga.id} value={udruga.imeUdruge}>
                      {udruga.imeUdruge}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="datum"
                className="block mb-2 text-sm py-4 text-start font-medium text-gray-900"
              >
                Datum
              </label>
              <DateTimeRange
                onDateTimeChange={handleDateTimeChange}
                dateCheck={dateCheck}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="opis"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Opis aktivnosti
              </label>
              <textarea
                id="opis"
                rows="8"
                name="opis"
                value={formaPodaci.opis}
                onChange={promjenaUlaza}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Opis aktivnosti"
                required
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={dateCheck}
              className="text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-12 focus:outline-none disabled:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Dodaj aktivnost
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UnosForma;
