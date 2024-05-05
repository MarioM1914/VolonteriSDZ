import React from "react";
import VolonteriLista from "../components/VolonteriLista";

function Volonteri({volonteri, dodajVolontera, obrisiVolontera}) {
  return (
    <>
    <div className="pb-24 pt-4">
        <h2 className="text-2xl font-bold text-center pt-4 pb-8">
          Popis Volontera
        </h2>
        <VolonteriLista
          volonteri={volonteri}
          dodajVolontera={dodajVolontera}
          obrisiVolontera={obrisiVolontera}
        />
      </div>
    </>
  );
}

export default Volonteri;
