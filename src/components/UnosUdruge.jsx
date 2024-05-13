import React, { useState, useEffect} from 'react';
import axios from "axios";

function UnosUdruge(props) {
    const [formaPodaci, setPodatke] = useState({
        imeUdruge: "",
        adresa: "",
        lokacija: "",
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
    
        axios.post("http://localhost:3007/udruge", zaSlanje).then((res) => {
          props.dodajUdrugu((stanje) => [...stanje, res.data]);
        });
      };
    
      function obradiPodatke(objekt) {
        return {
          imeUdruge: objekt.imeUdruge,
          adresa: objekt.adresa,
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
          Dodaj novu udrugu
        </h2>
        <form onSubmit={saljiPodatke}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
              <label
                htmlFor="imeUdruge"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Ime{" "}
              </label>
              <input
                type="text"
                name="imeUdruge"
                value={formaPodaci.imeUdruge}
                onChange={promjenaUlaza}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Ime udruge"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="adresa"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Adresa{" "}
              </label>
              <input
                type="text"
                name="adresa"
                value={formaPodaci.adresa}
                onChange={promjenaUlaza}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Adresa udruge"
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
              Dodaj udrugu
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default UnosUdruge
