import { Route, Routes } from "react-router-dom";
import "./App.css";
import Pocetna from "./pages/Pocetna";
import Aktivnosti from "./pages/Aktivnosti";
import NotFound from "./pages/NotFound";
import Volonteri from "./pages/Volonteri";
import Udruge from "./pages/Udruge";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [aktivnosti, setAktivnosti] = useState([]);
  const [volonteri, setVolonteri] = useState([]);
  const [udruge, setUdruge] = useState([]);

  useEffect(() => {
    fetchAktivnosti();
    fetchVolontere();
    fetchUdruge();
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

  const fetchUdruge = async () => {
    try {
      const response = await axios.get("http://localhost:3007/udruge");
      setUdruge(response.data);
    } catch (error) {
      console.error("Error fetching udruge:", error);
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

  const obrisiUdrugu = (idPodatka) => {
    axios.delete(`http://localhost:3007/udruge/${idPodatka}`).then(() => {
      fetchUdruge();
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
          </Route>
          <Route path="/udruge">
            <Route
              index
              element={
                <Udruge
                  udruge={udruge}
                  dodajUdrugu={setUdruge}
                  obrisiUdrugu={obrisiUdrugu}
                  fetchUdruge={fetchUdruge}
                />
              }
            />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
