import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faFileCircleCheck,
  faCommentsDollar,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";

const Inicio = () => {
  return (
    <>
      <div className="home-page">
        <Helmet>
          <title>
            Howell & Asociados | Asesoría Legal Integral en Colombia
          </title>
          
          <meta
            name="description"
            content="Howell & Asociados, liderado por George Eduard Howell Rendon. Especialistas en derecho comercial, penal, civil, familiar, inmigración y más. Servicios legales profesionales y accesibles."
          />
        </Helmet>
        {/* HERO=========== */}
        <div className="container-fluid">
          <div className="row">
            <div className="hero-section">
              <div className="hero-overlay"></div>
              <div className="text-container d-flex flex-column justify-content-start align-items-start pt-6 slide">
                <div className="text-1 fs-2 pb-3">HOWELL & ASOCIADOS</div>
                <div className="text-2 fs-4">
                  GEORGE EDUARD HOWELL RENDON<br></br>GEORGE LAURENS HOWELL DIAZ
                  <span className="fw-bold">
                    <br></br> Asesoría Legal Integral{" "}
                  </span>
                </div>
                <div className="text-3 fst-italic fw-light">
                  "La justicia no es solo un derecho, sino una responsabilidad 
                  que debemos ejercer con integridad y compromiso."
                  - <span>George Eduard Howell Rendon.</span>
                </div>
              </div>
              {/* horizontal buttons */}
              <div className="horizontal-btn d-none d-md-flex justify-content-center  align-items-end w-100 h-100">
                <div className=" col flex-grow-1">
                  <Link to="/contacto">
                    <button
                      id="horizontal1"
                      className="btn btn-outline-dark btn-lg  type-button p-4 w-100 fw-bold"
                      aria-label="Programación"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                      </span>
                      Programación
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/contacto">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Solicita una evaluación"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                      </span>
                      Solicita una evaluación
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/honorarios">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Honorarios"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                      </span>
                       Honorarios
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* small screens buttons*/}
            <div className="mobile-btn d-md-none d-flex justify-content-between pt-2">
              <Link to="/contacto">
                <button
                  id="small"
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Programación"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                  </span>
                  Programación
                </button>
              </Link>
              <Link to="/contacto">
                <button
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Solicita una evaluación"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                  </span>
                  Solicita una evaluación
                </button>
              </Link>
              <Link to="/honorarios">
                <button
                  className="btn btn-outline-dark type-button p-2 btn-md"
                  aria-label="Honorarios"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                  </span>
                  Honorarios
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/*¿TIENES UN PROBLEMA?========= */}

        <section className="card py-5 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <h6 className="guide-text mb-4">BIENVENIDO</h6>
                   <h5 className="lh-base text-center pb-4">
                     Asesoría y Representación
                   </h5>

                <p className="text-separator fw-normal">
                  Howell & Asociados, liderado por George Eduard Howell Rendon,
                  ofrece asesoría integral en derecho comercial, penal, civil,
                  familiar, inmigración y más. Brindamos soluciones legales
                  efectivas y personalizadas para proteger sus derechos e
                  intereses.
                  <br />
                  <span className="ms-4"></span>Estamos comprometidos con su caso
                  y buscamos las mejores soluciones legales mientras mantenemos
                  su integridad y reputación profesional.
                  <span></span>
                </p>
              </div>
            </div>

            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="./assets/law-justice.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt=" a gavel, scales of justice, and law books"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS========= */}
        <div className="">
          <div className="row">
            <div className="col">
              <div className="services-section ">
                <div className="services-overlay "></div>

                <div className="services-content container mt-3">
                  <h6 className=" guide-text">SERVICIOS</h6>

                  <h5 className="lh-base text-center pb-3">
                    Áreas de actividad
                  </h5>
                  <div className="row mt-3 gx-3 flex-column flex-md-row ">
                    <div className="col-md-6">
                       <h5 className="color text-center pb-4">
                         Derecho Corporativo
                       </h5>
                       <div className="d-flex align-items-center">
                         <img
                           src="./assets/barou.webp"
                           className="barou img-fluid mx-auto d-block rounded-2"
                           alt="derecho comercial y corporativo"
                           width="150"
                           height="150"
                         />
                       </div>
                       <p className="pt-4 px-2">
                         Asesoría en derecho comercial, establecimiento de empresas,
                         servicios públicos, cartera prejurídica y jurídica,
                         derecho internacional de visas, inmigración, aduanas y
                         asesoría integral de negocios.
                       </p>
                       <div className="py-3 text-center">
                         <Link to="/servicios">
                           <button
                             type="button"
                             className="btn btn-outline-dark mb-4"
                             aria-label="Conocer más"
                           >
                             Conocer más...
                           </button>
                         </Link>
                       </div>
                     </div>
                     <div className="col-md-6">
                       <h5 className="color text-center pb-4">
                         Derecho Civil, Familia, Penal, Administrativo y Tributario
                       </h5>
                       <div className="d-flex align-items-center">
                         <img
                           src="./assets/unpir.webp"
                           className="unpir img-fluid mx-auto d-block rounded-2"
                           alt="derecho civil y penal"
                           width="150"
                           height="150"
                         />
                       </div>
                       <p className="pt-4 px-2">
                         Asuntos penales y policivos, civiles, laborales, de familia,
                         divorcios express, declaración de unión marital de hecho,
                         sucesiones express, derecho administrativo, defensa
                         tributaria ante DIAN, inmuebles y sociedades.
                       </p>
                       <div className="py-3 text-center">
                         <Link to="/especialidades">
                           <button
                             type="button"
                             className="btn btn-outline-dark mb-4"
                             aria-label="Conocer más"
                           >
                             Conocer más...
                           </button>
                         </Link>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QUIÉNES SOMOS */}

        <section className="card py-4 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <p className="guide-text mb-4">SOBRE NOSOTROS</p>
                <h5 className="lh-base text-center pb-4">¿Quién soy?</h5>

                <p className="text-separator fw-normal">
                  Seré su aliado estratégico en la resolución profesional de
                  todos sus asuntos comerciales, fiscales y contractuales.
                  <br></br>
                  <span className="ms-4"></span>Soy George Eduard Howell Rendon,
                  abogado con amplia experiencia en derecho comercial, penal,
                  civil, familiar e inmigración. Ofrezco una visión moderna y
                  efectiva para la solución de problemas legales. Cuento con más
                  de 40 años de experiencia en litigios y asesoría jurídica.
                  <br></br> <span className="ms-4"></span>Mi compromiso es brindarle
                  servicios legales de alta calidad con tarifas accesibles,
                  enfocándome en resultados concretos y satisfacción del cliente.
                </p>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="./assets/about-us.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt="two persons at a desk"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/*¿QUÉ NOS RECOMIENDA?========= */}
        <section className="recommendation p-3 bg-image m-3 px-0">
          <h6 className="guide-text ">NUESTRA EXPERIENCIA</h6>
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h5 className="h-50 lh-base text-center pb-4">¿Qué nos distingue?</h5>
          </div>
          <div className="row mt-4 flex-column flex-md-row mb-3">
            <div className="col col-md-7 order-md-2">
              <ul className="my-list">
                <li>Amplia experiencia en múltiples áreas del derecho</li>
                <li>
                  Profesionalismo elevado y enfoque orientado al cliente.
                </li>
                <li> Compromiso activo con cada caso y proyecto.</li>
                <li> Comunicación directa y transparente.</li>
                <li> Dedicación total a la satisfacción del cliente.</li>
                <li>
                  {" "}
                  Soluciones integrales mediante colaboración con otros profesionales.
                </li>
              </ul>
            </div>
            <div className=" col col-md-5 order-md-2 mt-5">
              <div className="square container d-flex flex-column justify-content-center align-items-center py-5 w-50 border border-white border-4 fw-bold">
                <div>
                  <FontAwesomeIcon icon={faGavel} size="2x" />
                </div>
                <div>Tarifas</div>
                <div>Accesibles</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Inicio;
