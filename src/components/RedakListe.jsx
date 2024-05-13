import React from "react";
import { useState } from "react";
import { Modal } from "flowbite-react";
import Aktivnost from "../pages/Aktivnost";
import Volonter from "../pages/Volonter";
import UrediFormu from "./UrediFormu";
import UrediFormuVolontera from "./UrediFormuVolontera";
import UrediFormuUdruga from "./UrediFormuUdruga";
import Udruga from "../pages/Udruga";

function RedakListe({
  akt,
  obrisiAktivnost,
  type,
  vol,
  obrisiVolontera,
  fetchVolontere,
  fetchAktivnosti,
  udr,
  obrisiUdrugu,
  fetchUdruge,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditVolonter, setIsEditVolonter] = useState(false);
  const [openModalEditVolonter, setOpenModalEditVolonter] = useState(false);
  const [isEditUdruga, setIsEditUdruga] = useState(false);
  const [openModalEditUdruga, setOpenModalEditUdruga] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }

  function onCloseModalEdit() {
    setOpenModalEdit(false);
    setIsEdit(false);
  }

  function onCloseModalEditVolonter() {
    setOpenModalEditVolonter(false);
    setIsEditVolonter(false);
  }

  function onCloseModalEditUdruga() {
    setOpenModalEditUdruga(false);
    setIsEditUdruga(false);
  }

  function handleClick() {
    if (type === "aktivnosti") {
      setIsEdit(true);
      setOpenModalEdit(true);
    } else if (type === "volonteri") {
      setIsEditVolonter(true);
      setOpenModalEditVolonter(true);
    } else if (type === "udruge") {
      setIsEditUdruga(true);
      setOpenModalEditUdruga(true);
    }
  }

  return (
    <>
      <tr className="bg-white border-b hover:bg-gray-50">
        <td
          scope="row"
          className="flex items-center my-2 text-gray-900 whitespace-nowrap"
        >
          <div className="px-6 py-4">
            <div className="text-base font-semibold">
              {type === "aktivnosti" ? akt.dogadaj.naziv : ""}
              {type === "volonteri"
                ? `${vol.imeVolontera} ${vol.prezimeVolontera}`
                : ""}
              {type === "udruge" ? `${udr.imeUdruge}` : ""}
            </div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            {type === "aktivnosti" ? akt.dogadaj.lokacija : ""}
            {type === "volonteri" ? vol.lokacija : ""}
            {type === "udruge" ? udr.adresa : ""}
          </div>
        </td>
        {type === "aktivnosti" &&
          akt.dogadaj.startDate &&
          akt.dogadaj.endDate && (
            <td className="px-6 py-4">
              <div className="flex flex-col justify-center items-start">
                <span className="mr-3">
                  {akt.dogadaj.startDate} - {akt.dogadaj.endDate}
                </span>{" "}
                {akt.dogadaj.startTime} - {akt.dogadaj.endTime}
              </div>
            </td>
          )}
        {type === "volonteri" && (
          <td className="px-6 py-4">
            <div className="flex items-center">{vol.spol}</div>
          </td>
        )}
        {type === "udruge" && (
          <td className="px-6 py-4">
            <div className="flex items-center">{udr.lokacija}</div>
          </td>
        )}
        {type === "aktivnosti" && (
          <td className="flex flex-col justify-around md:flex-row">
            <td className="py-4">
              <button
                onClick={() => setOpenModal(true)}
                className="text-white shadow-lg bg-teal-500 hover:bg-teal-600 focus:ring-2 font-medium rounded-lg text-sm px-3 py-1 focus:outline-none"
              >
                Detalji
              </button>
              <Modal show={openModal} size="4xl" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                  <Aktivnost akt={akt} />
                </Modal.Body>
              </Modal>
            </td>
            <td className="py-4">
              {isEdit ? (
                <Modal
                  show={openModalEdit}
                  size="4xl"
                  onClose={onCloseModalEdit}
                  popup
                >
                  <Modal.Header />
                  <Modal.Body>
                    <UrediFormu
                      akt={akt}
                      promijeniAktivnost={() => setIsEdit(false)}
                      fetchAktivnosti={fetchAktivnosti}
                    />
                  </Modal.Body>
                </Modal>
              ) : (
                <button
                  // type="button"
                  onClick={handleClick}
                  className="text-white shadow-lg bg-blue-600 hover:bg-blue-700 focus:ring-2 font-medium rounded-lg text-sm px-3 py-1 focus:outline-none"
                >
                  Uredi
                </button>
              )}
            </td>
            <td className="py-4">
              <button
                onClick={() => obrisiAktivnost(akt.id)}
                className="text-white shadow-lg bg-red-500 hover:bg-red-600 focus:ring-2 font-medium rounded-lg text-sm px-2 py-1 focus:outline-none"
              >
                Obriši
              </button>
            </td>
          </td>
        )}
        {type === "volonteri" && (
          <td className="flex flex-col justify-around md:flex-row">
            <td className="py-4">
              <button
                onClick={() => setOpenModal(true)}
                className="text-white shadow-lg bg-teal-500 hover:bg-teal-600 focus:ring-2 font-medium rounded-lg text-sm px-3 py-1 focus:outline-none"
              >
                Detalji
              </button>
              <Modal show={openModal} size="4xl" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                  <Volonter vol={vol} />
                </Modal.Body>
              </Modal>
            </td>
            <td className="py-4">
              {isEditVolonter ? (
                <Modal
                  show={openModalEditVolonter}
                  size="4xl"
                  onClose={onCloseModalEditVolonter}
                  popup
                >
                  <Modal.Header />
                  <Modal.Body>
                    <UrediFormuVolontera
                      vol={vol}
                      promijeniVolontera={() => setIsEditVolonter(false)}
                      fetchVolontere={fetchVolontere}
                    />
                  </Modal.Body>
                </Modal>
              ) : (
                <button
                  // type="button"
                  onClick={handleClick}
                  className="text-white shadow-lg bg-blue-600 hover:bg-blue-700 focus:ring-2 font-medium rounded-lg text-sm px-3 py-1 focus:outline-none"
                >
                  Uredi
                </button>
              )}
            </td>
            <td className="py-4">
              <button
                onClick={() => obrisiVolontera(vol.id)}
                className="text-white shadow-lg bg-red-500 hover:bg-red-600 focus:ring-2 font-medium rounded-lg text-sm px-2 py-1 focus:outline-none"
              >
                Obriši
              </button>
            </td>
          </td>
        )}
        {type === "udruge" && (
          <td className="flex flex-col justify-around md:flex-row">
            <td className="py-4">
              <button
                onClick={() => setOpenModal(true)}
                className="text-white shadow-lg bg-teal-500 hover:bg-teal-600 focus:ring-2 font-medium rounded-lg text-sm px-3 py-1 focus:outline-none"
              >
                Detalji
              </button>
              <Modal show={openModal} size="4xl" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                  <Udruga udr={udr} />
                </Modal.Body>
              </Modal>
            </td>
            <td className="py-4">
              {isEditUdruga ? (
                <Modal
                  show={openModalEditUdruga}
                  size="4xl"
                  onClose={onCloseModalEditUdruga}
                  popup
                >
                  <Modal.Header />
                  <Modal.Body>
                    <UrediFormuUdruga
                      udr={udr}
                      promijeniUdrugu={() => setIsEditUdruga(false)}
                      fetchUdruge={fetchUdruge}
                    />
                  </Modal.Body>
                </Modal>
              ) : (
                <button
                  // type="button"
                  onClick={handleClick}
                  className="text-white shadow-lg bg-blue-600 hover:bg-blue-700 focus:ring-2 font-medium rounded-lg text-sm px-3 py-1 focus:outline-none"
                >
                  Uredi
                </button>
              )}
            </td>
            <td className="py-4">
              <button
                onClick={() => obrisiUdrugu(udr.id)}
                className="text-white shadow-lg bg-red-500 hover:bg-red-600 focus:ring-2 font-medium rounded-lg text-sm px-2 py-1 focus:outline-none"
              >
                Obriši
              </button>
            </td>
          </td>
        )}
      </tr>
    </>
  );
}

export default RedakListe;
