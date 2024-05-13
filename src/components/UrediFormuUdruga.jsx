import React, { useEffect, useState } from "react";
import axios from "axios";

function UrediFormuUdruga({ udr, promijeniUdrugu, fetchUdruge }) {
  const [gradovi, setGradovi] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
  const [noviPodaci, setNoviPodaci] = useState({
    imeUdruge: udr.imeUdruge,
    adresa: udr.adresa,
    lokacija: udr.lokacija,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3007/gradovi")
      .then((resp) => setGradovi(resp.data))
      .catch((err) => console.log(err.message));
  }, []);

  const urediPodatke = (e) => {
    e.preventDefault();

    axios
      .patch(`http://localhost:3007/udruge/${udr.id}`, {
        imeUdruge: noviPodaci.imeUdruge,
        adresa: noviPodaci.adresa,
        lokacija: noviPodaci.lokacija,
      })
      .then(() => {
        setIsEdit(false);
        promijeniUdrugu();
        fetchUdruge();
      })
      .catch((error) => {
        console.error("Greška pri ažuriranju udruge:", error);
      });
  };

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl text-center font-bold text-gray-900">
          Uredi udrugu
        </h2>
        {isEdit ? (
          <form onSubmit={urediPodatke}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="w-full">
                <label
                  htmlFor="imeUdruge"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Ime udruge{" "}
                </label>
                <input
                  type="text"
                  name="imeUdruge"
                  value={noviPodaci.imeUdruge}
                  onChange={(e) =>
                    setNoviPodaci((prevState) => ({
                      ...prevState,
                      imeUdruge: e.target.value,
                    }))
                  }
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
                  Adresa udruge{" "}
                </label>
                <input
                  type="text"
                  name="adresa"
                  value={noviPodaci.adresa}
                  onChange={(e) =>
                    setNoviPodaci((prevState) => ({
                      ...prevState,
                      adresa: e.target.value,
                    }))
                  }
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
                  Lokacija udruge
                </label>
                <select
                  name="lokacija"
                  value={noviPodaci.lokacija}
                  onChange={(e) =>
                    setNoviPodaci((prevState) => ({
                      ...prevState,
                      lokacija: e.target.value,
                    }))
                  }
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
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-12 focus:outline-none disabled:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Uredi
              </button>
            </div>
          </form>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}

export default UrediFormuUdruga;
