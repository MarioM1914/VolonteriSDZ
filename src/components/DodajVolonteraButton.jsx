import React from 'react';
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import UnosVolontera from './UnosVolontera';

function DodajVolonteraButton({ dodajVolontera }) {
    const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }

  function handleSubmit() {
    setOpenModal(false);
  }

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="text-white shadow-lg bg-emerald-500 focus:ring-2 focus:ring-emerald-300 font-medium rounded-lg text-xl px-3 py-1 me-2 mb-2 focus:outline-none"
      >
        Dodaj volontera
      </Button>
      <Modal
        show={openModal}
        size="4xl"
        onClose={onCloseModal}
        onSubmit={handleSubmit}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <UnosVolontera dodajVolontera={dodajVolontera} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default DodajVolonteraButton
