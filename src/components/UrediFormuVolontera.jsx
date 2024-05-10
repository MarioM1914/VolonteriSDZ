import React, { useEffect, useState } from "react";
import axios from "axios";

function UrediFormuVolontera({ vol, promijeniVolontera, fetchVolontere }) {
  const [gradovi, setGradovi] = useState([]);
  //   const [udruge, setUdruge] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
  const [noviPodaci, setNoviPodaci] = useState({
    imeVolontera: vol.imeVolontera,
    prezimeVolontera: vol.prezimeVolontera,
    lokacija: vol.lokacija,
    dob: vol.dob,
    spol: vol.spol,
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
      .patch(`http://localhost:3007/volonteri/${vol.id}`, {
        imeVolontera: noviPodaci.imeVolontera,
        prezimeVolontera: noviPodaci.prezimeVolontera,
        lokacija: noviPodaci.lokacija,
        dob: noviPodaci.dob,
        spol: noviPodaci.spol,
      })
      .then(() => {
        setIsEdit(false);
        promijeniVolontera();
        fetchVolontere();
      })
      .catch((error) => {
        console.error("Greška pri ažuriranju volontera:", error);
      });
  };

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl text-center font-bold text-gray-900">
          Uredi volontera
        </h2>
        {isEdit ? (
          <form onSubmit={urediPodatke}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="w-full">
                <label
                  htmlFor="ime"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Ime volontera{" "}
                </label>
                <input
                  type="text"
                  name="ime"
                  value={noviPodaci.imeVolontera}
                  onChange={(e) =>
                    setNoviPodaci((prevState) => ({
                      ...prevState,
                      imeVolontera: e.target.value,
                    }))
                  }
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
                  Prezime volontera{" "}
                </label>
                <input
                  type="text"
                  name="prezime"
                  value={noviPodaci.prezimeVolontera}
                  onChange={(e) =>
                    setNoviPodaci((prevState) => ({
                      ...prevState,
                      prezimeVolontera: e.target.value,
                    }))
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Prezime organizatora"
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
                  value={noviPodaci.dob}
                  onChange={(e) =>
                    setNoviPodaci((prevState) => ({
                      ...prevState,
                      dob: e.target.value,
                    }))
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Godine"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lokacija"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Lokacija volontera
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
              <div>
                <label
                  htmlFor="spol"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Spol
                </label>
                <select
                  name="spol"
                  value={noviPodaci.spol}
                  onChange={(e) =>
                    setNoviPodaci((prevState) => ({
                      ...prevState,
                      spol: e.target.value,
                    }))
                  }
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

export default UrediFormuVolontera;
