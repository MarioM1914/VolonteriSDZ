import { Route, Routes } from "react-router-dom";
import "./App.css";
import Pocetna from "./pages/Pocetna";
import Aktivnosti from "./pages/Aktivnosti";
import Aktivnost from "./pages/Aktivnost";
import NotFound from "./pages/NotFound";
import Volonteri from "./pages/Volonteri";
import Udruge from "./pages/Udruge";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UrediFormu from "./components/UrediFormu";
import { useEffect, useState } from "react";
import axios from "axios";
import Volonter from "./pages/Volonter";

function App() {
  const [aktivnosti, setAktivnosti] = useState([]);
  const [volonteri, setVolonteri] = useState([]);

  useEffect(() => {
    fetchAktivnosti();
    fetchVolontere();
  }, []);

  const fetchAktivnosti = async () => {
    try {
      const response = await axios.get("http://localhost:3007/aktivnosti");
      setAktivnosti(response.data);
    } catch (error) {
      console.error("Error fetching aktivnosti:", error);
    }
  };

  const fetchVolontere = async () => {
    try {
      const response = await axios.get("http://localhost:3007/volonteri");
      setVolonteri(response.data);
    } catch (error) {
      console.error("Error fetching volontere:", error);
    }
  };

  const obrisiAktivnost = (idPodatka) => {
    axios.delete(`http://localhost:3007/aktivnosti/${idPodatka}`).then(() => {
      fetchAktivnosti();
    });
  };

  const obrisiVolontera = (idPodatka) => {
    axios.delete(`http://localhost:3007/volonteri/${idPodatka}`).then(() => {
      fetchVolontere();
    });
  };

  return (
    <>
      <div className="w-[80%] m-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/aktivnosti">
            <Route
              index
              element={
                <Aktivnosti
                  aktivnosti={aktivnosti}
                  dodaj={setAktivnosti}
                  obrisiAktivnost={obrisiAktivnost}
                  fetchAktivnosti={fetchAktivnosti}
                />
              }
            />{" "}
            {/* index means the path is whatever the parent is  */}
            {/* <Route path="aktivnost/uredi/:id" element={<UrediFormu />} /> */}
          </Route>
          <Route path="/volonteri">
            <Route
              index
              element={
                <Volonteri
                  volonteri={volonteri}
                  dodajVolontera={setVolonteri}
                  obrisiVolontera={obrisiVolontera}
                  fetchVolontere={fetchVolontere}
                />
              }
            />
            <Route path="volonter/:id" element={<Volonter />} />
          </Route>
          <Route path="/udruge" element={<Udruge />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
