import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Info from "./pages/Info";
import Abogacia from "./pages/Abogacia";
import Insolvencia from "./pages/Insolvencia";
import Contact from "./pages/Contact";
import Inicio from "./pages/Inicio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Helmet>
            <title>
              Howell & Abogados | Asesoría Legal Integral en Colombia
            </title>
            <meta
              name="description"
              content="Howell & Abogados, liderado por George Eduard Howell Rendon. Especializados en derecho comercial, asuntos penales, civiles, familiares, inmigración y más. Soluciones legales profesionales y accesibles."
            />
          </Helmet>
          <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/honorarios" element={<Info />} />
            <Route path="/servicios" element={<Abogacia />} />
            <Route path="/especialidades" element={<Insolvencia />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
