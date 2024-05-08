import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "flowbite-react";
import Aktivnost from "../pages/Aktivnost";
import Volonter from "../pages/Volonter";

function RedakListe({ akt, obrisiAktivnost, type, vol, obrisiVolontera }) {
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
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
            </div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            {type === "aktivnosti" ? akt.dogadaj.lokacija : ""}
            {type === "volonteri" ? vol.lokacija : ""}
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
        {type === "aktivnosti" && (
          <td className="flex flex-col justify-around md:flex-row">
            <td className="py-4">
              <button
                onClick={() => setOpenModal(true)}
                className="text-white shadow-lg bg-teal-500 hover:bg-teal-600 focus:ring-2 font-medium rounded-lg text-sm px-3 py-1 focus:outline-none"
              >
                Detalji
              </button>
              <Modal
                show={openModal}
                size="4xl"
                onClose={onCloseModal}
                popup
              >
                <Modal.Header />
                <Modal.Body>
                  <Aktivnost akt={akt} />
                </Modal.Body>
              </Modal>
            </td>
            <td className="py-4">
              <Link to={`/aktivnosti/aktivnost/uredi/${akt.id}`}>
                <button
                  // type="button"
                  // onClick={() => setOpenModal(true)}
                  // onClick={openModal}
                  // data-modal-target="editUserModal"
                  // data-modal-show="editUserModal"
                  className="text-white shadow-lg bg-blue-600 hover:bg-blue-700 focus:ring-2 font-medium rounded-lg text-sm px-3 py-1 focus:outline-none"
                >
                  Uredi
                </button>
              </Link>
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
              <Modal
                show={openModal}
                size="4xl"
                onClose={onCloseModal}
                popup
              >
                <Modal.Header />
                <Modal.Body>
                  <Volonter vol={vol} />
                </Modal.Body>
              </Modal>
            </td>
            <td className="py-4">
              <Link to={`/volonteri/volonter/uredi/${vol.id}`}>
                <button
                  type="button"
                  // onClick={openModal}
                  // data-modal-target="editUserModal"
                  // data-modal-show="editUserModal"
                  className="text-white shadow-lg bg-blue-600 hover:bg-blue-700 focus:ring-2 font-medium rounded-lg text-sm px-3 py-1 focus:outline-none"
                >
                  Uredi
                </button>
              </Link>
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
      </tr>
    </>
  );
}

export default RedakListe;
