import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Especialidades = () => {
  return (
    <>
      <div className="insolventa-page">
        <Helmet>
          <title>
            Especialidades | Howell & Abogados | George Eduard Howell Rendon
          </title>
          
          <meta
            name="description"
            content="Especialidades legales de Howell & Abogados. Servicios especializados en derecho comercial, penal, civil, familiar, inmigración, aduanas y más."
          />
        </Helmet>
        <div>
          <h6 className="guide-text ms-3 mt-4">ESPECIALIDADES LEGALES</h6>
          <div className="container py-5">
            <h5 className="fw-bold text-center pb-1">
              Servicios especializados en múltiples áreas del derecho
            </h5>
            <h6 className="fw-bold subtitle lh-lg text-center px-5 pb-5">
              Ofrecemos asesoría legal especializada adaptada a sus necesidades específicas
            </h6>

            <div className="card">
              <div className="insolvency card-img-top2"></div>
              <div className="card-body">
                <div className="card-text text-white py-5">
                  <ul className="my-list pt-3">
                    <li>Derecho Comercial y Establecimiento de Empresas;</li>
                    <br></br>
                    <li>
                      Asesoría en servicios públicos, cartera prejurídica y jurídica,
                      gestión integral de negocios comerciales;
                    </li>
                    <br></br>
                    <li>
                      Derecho Internacional: visas, inmigración, asuntos aduaneros
                      y movilidad internacional;
                    </li>
                    <br></br>
                    <li>Derecho Penal y Policivo: defensa en procesos penales y contravencionales;</li>
                    <br></br>
                    <li>
                      Derecho Civil: contratos, obligaciones, responsabilidad civil,
                      inmuebles y propiedad;
                    </li>
                    <br></br>
                    <li>
                      Derecho Laboral: contratos laborales, despidos, prestaciones sociales,
                      seguridad social;
                    </li>
                    <br></br>
                    <li>
                      Derecho de Familia: divorcios express, declaración de unión marital
                      de hecho, sucesiones express, custodia, pensiones;
                    </li>
                    <br></br>
                    <li>
                      Asesoría Integral de Negocios: estructuración empresarial,
                      reorganización corporativa, fusiones y adquisiciones;
                    </li>
                    <br></br>
                    <li>
                      Derecho Administrativo: actuaciones administrativas,
                      contratos con el Estado, servicios públicos;
                    </li>
                    <br></br>
                    <li>
                      Defensa Tributaria ante DIAN: impuestos, sanciones,
                      devoluciones, controversias fiscales;
                    </li>
                    <br></br>
                    <li>
                      Inmuebles, Sociedades y Establecimientos de Comercio:
                      constitución, modificación, registro y trámites comerciales;
                    </li>
                    <br></br>
                    <li>
                      Recuperación de carteras: gestión prejurídica y jurídica
                      de créditos y cobranzas;
                    </li>
                    <br></br>
                    <li>
                      Elaboración de toda clase de documentos legales y contratos;
                    </li>
                    <br></br>
                    <li>
                      Consultoría jurídica integral personalizada según su caso específico;
                    </li>
                  </ul>
                </div>
                <Link to="/contacto" className="link">
                  <button
                    className="btn btn-outline-dark my-4"
                    type="button"
                    aria-label="Solicitar evaluación"
                  >
                    Solicitar evaluación
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Especialidades;