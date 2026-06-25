import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faGavel,
  faQuoteLeft,
  faStar,
  faCheckCircle,
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
                <div className="hero-value-prop">
                  Más de 40 años protegiendo sus derechos. Experiencia real en derecho 
                  comercial, penal, civil y familiar. Estamos listos para resolver su caso.
                </div>
                {/* CTAs visibles sin scroll */}
                <div className="hero-ctas d-flex flex-wrap gap-3 mt-4">
                  <Link to="/contacto">
                    <button
                      className="btn btn-lg hero-btn-primary px-4"
                      aria-label="Agende su consulta"
                    >
                      <FontAwesomeIcon icon={faCalendarCheck} className="me-2" />
                      Agende su consulta
                    </button>
                  </Link>
                  <Link to="/servicios">
                    <button
                      className="btn btn-lg hero-btn-secondary px-4"
                      aria-label="Conozca nuestras áreas"
                    >
                      <FontAwesomeIcon icon={faGavel} className="me-2" />
                      Conozca nuestras áreas
                    </button>
                  </Link>
                </div>
            </div>
          </div>

        {/*¿TIENES UN PROBLEMA?========= */}

        <section className="welcome-section py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
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

              <div className="col-lg-5 text-center">
                <img
                  src="./assets/law-justice.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt="a gavel, scales of justice, and law books"
                  style={{ maxHeight: "280px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS========= */}
        <div className="services-section">
          <div className="services-overlay"></div>
          <div className="services-content container py-5">
            <h6 className="guide-text">SERVICIOS</h6>

            <h5 className="lh-base text-center pb-3">
              Áreas de actividad
            </h5>
            <div className="row mt-3 gx-4 flex-column flex-md-row">
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
                      className="btn btn-outline-dark"
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
                      className="btn btn-outline-dark"
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

        {/* TESTIMONIOS ========= */}
        <section className="testimonials-section py-5">
          <div className="container">
            <h6 className="guide-text mb-4 ms-3">TESTIMONIOS</h6>
            <h5 className="lh-base text-center pb-4">Lo que dicen nuestros clientes</h5>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="testimonial-card">
                  <div className="testimonial-stars mb-2">
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <FontAwesomeIcon icon={faQuoteLeft} className="testimonial-quote mb-2" />
                  <p className="testimonial-text">
                    "Recibí una asesoría clara y oportuna para mi caso comercial. 
                    Resolvieron todo con profesionalismo y en el tiempo acordado."
                  </p>
                  <p className="testimonial-author mb-0">— Cliente, Derecho Corporativo</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial-card">
                  <div className="testimonial-stars mb-2">
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <FontAwesomeIcon icon={faQuoteLeft} className="testimonial-quote mb-2" />
                  <p className="testimonial-text">
                    "El acompañamiento en mi proceso de divorcio fue excepcional. 
                    Me explicaron cada paso con paciencia y claridad."
                  </p>
                  <p className="testimonial-author mb-0">— Cliente, Derecho Familiar</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial-card">
                  <div className="testimonial-stars mb-2">
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <FontAwesomeIcon icon={faQuoteLeft} className="testimonial-quote mb-2" />
                  <p className="testimonial-text">
                    "Más de 40 años de experiencia se notan. Resolvieron mi situación 
                    legal con total dedicación y conocimiento del derecho."
                  </p>
                  <p className="testimonial-author mb-0">— Cliente, Derecho Penal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUIÉNES SOMOS */}

        <section className="about-section py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
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
              <div className="col-lg-5 text-center">
                <img
                  src="./assets/about-us.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt="three persons talking in an office"
                  style={{ maxHeight: "280px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* POR QUÉ ELEGIRNOS ========= */}
        <section className="differentiators-section py-5">
          <div className="container">
            <h6 className="guide-text mb-4 ms-3">POR QUÉ ELEGIRNOS</h6>
            <h5 className="lh-base text-center pb-4">Nuestra experiencia a su servicio</h5>
            <div className="row g-4 mt-2">
              <div className="col-md-4">
                <div className="diff-card text-center p-4 h-100">
                  <div className="diff-icon mb-3">
                    <FontAwesomeIcon icon={faCheckCircle} size="2x" />
                  </div>
                  <h6 className="fw-bold">+40 Años de Experiencia</h6>
                  <p className="mb-0">Décadas de litigio y asesoría jurídica en múltiples áreas del derecho colombiano.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="diff-card text-center p-4 h-100">
                  <div className="diff-icon mb-3">
                    <FontAwesomeIcon icon={faCheckCircle} size="2x" />
                  </div>
                  <h6 className="fw-bold">Cientos de Casos Exitosos</h6>
                  <p className="mb-0">Resultados concretos para personas y empresas en derecho comercial, penal, civil y familiar.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="diff-card text-center p-4 h-100 diff-card-highlight">
                  <div className="diff-icon mb-3">
                    <FontAwesomeIcon icon={faGavel} size="2x" />
                  </div>
                  <h6 className="fw-bold">Tarifas Accesibles</h6>
                  <p className="mb-0">Servicios legales de alta calidad a precios justos, sin sacrificar la excelencia.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL ========= */}
        <section className="final-cta-section py-5">
          <div className="container text-center">
            <h4 className="text-light fw-bold mb-3">¿Listo para resolver su caso?</h4>
            <p className="text-light mb-4 fs-5">
              Contáctenos hoy y obtenga la asesoría que necesita.
            </p>
            <Link to="/contacto">
              <button className="btn btn-lg final-cta-btn px-5 py-3 fw-bold">
                <FontAwesomeIcon icon={faCalendarCheck} className="me-2" />
                Solicitar asesoría
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Inicio;
