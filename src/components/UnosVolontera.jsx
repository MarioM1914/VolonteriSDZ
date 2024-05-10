import React, { useEffect, useState } from "react";
import axios from "axios";

function UnosVolontera(props) {
  const [formaPodaci, setPodatke] = useState({
    imeVolontera: "",
    prezimeVolontera: "",
    dob: "",
    lokacija: "",
    spol: "",
  });
  const [gradovi, setGradovi] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3007/gradovi")
      .then((resp) => setGradovi(resp.data))
      .catch((err) => console.log(err.message));
  }, []);

  const saljiPodatke = (event) => {
    event.preventDefault();

    const zaSlanje = obradiPodatke(formaPodaci);

    axios.post("http://localhost:3007/volonteri", zaSlanje).then((res) => {
      props.dodajVolontera((stanje) => [...stanje, res.data]);
    });
  };

  function obradiPodatke(objekt) {
    return {
      imeVolontera: objekt.imeVolontera,
      prezimeVolontera: objekt.prezimeVolontera,
      dob: objekt.dob,
      spol: objekt.spol,
      lokacija: objekt.lokacija,
    };
  }

  function promjenaUlaza(event) {
    const { name, value } = event.target;
    setPodatke({ ...formaPodaci, [name]: value });
  }

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Dodaj novog volontera
        </h2>
        <form onSubmit={saljiPodatke}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
              <label
                htmlFor="imeVolontera"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Ime{" "}
              </label>
              <input
                type="text"
                name="imeVolontera"
                value={formaPodaci.imeVolontera}
                onChange={promjenaUlaza}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Ime volontera"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="prezimeVolontera"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Prezime{" "}
              </label>
              <input
                type="text"
                name="prezimeVolontera"
                value={formaPodaci.prezimeVolontera}
                onChange={promjenaUlaza}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Prezime volontera"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="dob"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Godine{" "}
              </label>
              <input
                type="number"
                name="dob"
                value={formaPodaci.dob}
                onChange={promjenaUlaza}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Godine"
                required
              />
            </div>
            <div>
              <label
                htmlFor="spol"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Spol
              </label>
              <select
                name="spol"
                value={formaPodaci.spol}
                onChange={promjenaUlaza}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                required
              >
                <option value="">-- Odaberite spol --</option>
                <option key="Male" value="Male">
                  Male
                </option>
                <option key="Female" value="Female">
                  Female
                </option>
              </select>
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
                <option value="" selected>
                  -- Odaberite grad --
                </option>
                {gradovi.map((grad) => (
                  <option key={grad.idGrad} value={grad.imeGrada}>
                    {grad.imeGrada}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-12 focus:outline-none disabled:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Dodaj volontera
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UnosVolontera;
