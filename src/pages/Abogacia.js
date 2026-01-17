import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faScaleBalanced,
  faTruck,
  faPeopleLine,
  faBriefcase,
  faScroll,
  faPassport,
  faFileInvoice,
  faBuilding,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
const Abogacia = () => {
  return (
    <>
      <div className="avocatura">
        <Helmet>
          <title>
            Servicios Legales | Howell & Abogados | George Eduard Howell Rendon
          </title>
          
          <meta
            name="description"
            content="Howell & Abogados ofrece asesoría legal integral en derecho comercial, penal, civil, familiar, inmigración, aduanas y más. Servicios profesionales y accesibles."
          />
        </Helmet>
        <div>
          <h6 className="guide-text ms-3 mt-4">SERVICIOS LEGALES</h6>
          <div className=" pt-4 text-center">
            <h5 className="fw-bold text-center pb-1">
              Asesoría Legal Integral
            </h5>
            <h6 className="fw-bold subtitle lh-lg text-center px-5 pb-4">
              Ofrecemos consultoría jurídica especializada en múltiples áreas del derecho
            </h6>
          </div>
          <div className="row g-5 px-5 pt-4 ">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 ">
                <div class="civil card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScaleBalanced}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">DERECHO CIVIL</h6>
                  <p className="card-text mx-1">
                    Asesoría jurídica, asistencia y representación ante instancias judiciales, 
                    redacción de demandas y documentos legales. Le ayudamos a resolver 
                    rápidamente sus problemas legales civiles.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="criminal card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faGavel}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">DERECHO PENAL</h6>
                  <p className="card-text mx-1">
                    Asistencia y representación legal ante autoridades judiciales, 
                    redacción de recursos y quejas contra medidas de investigación penal, 
                    solicitud de rehabilitación y defensa penal completa.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="executare card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">DERECHO COMERCIAL</h6>
                  <p className="card-text mx-1">
                    Asesoría en establecimiento de empresas, derecho comercial, 
                    cartera prejurídica y jurídica, servicios públicos, asesoría 
                    integral de negocios y reestructuración empresarial.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="family card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faHeart}
                    size="2x"
                    className="pb-3 law-icon"
                  />
                  <h6 className="card-title pb-2">
                    DERECHO DE FAMILIA
                  </h6>
                  <p className="card-text mx-1">
                    Divorcios express, declaración de unión marital de hecho, 
                    sucesiones express, custodia, pensión alimenticia, 
                    régimen de visitas y todos los asuntos familiares.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="labor card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">DERECHO LABORAL</h6>
                  <p className="card-text mx-1">
                    Despidos injustificados, sanciones disciplinarias, 
                    reclamo de salarios y prestaciones, elaboración de 
                    opiniones jurídicas en derecho laboral y defensa de trabajadores.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="business card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faPassport}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">
                    INMIGRACIÓN Y ADUANAS
                  </h6>
                  <p className="card-text mx-1">
                    Derecho internacional de visas, inmigración, procesos 
                    migratorios, asuntos aduaneros, nacionalidad, 
                    residencia y todos los servicios de movilidad internacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4 ">
            <p className="more-services py-4">
              Otras áreas de práctica donde ofrecemos consultoría, asistencia 
              y representación: DERECHO ADMINISTRATIVO, DEFENSA TRIBUTARIA ANTE DIAN, 
              INMUEBLES, SOCIEDADES Y ESTABLECIMIENTOS DE COMERCIO, ASUNTOS POLICIVOS, 
              RECUPERACIÓN DE CARTERAS, redacción de documentos y toda clase de 
              servicios legales personalizados según sus necesidades.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Abogacia;