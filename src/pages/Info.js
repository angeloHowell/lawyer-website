import React from "react";
import { Helmet } from "react-helmet";

const Honorarios = () => {
  return (
    <div className="info">
      <Helmet>
        <title>Honorarios | Howell & Abogados | George Eduard Howell Rendon</title>
        
        <meta
          name="description"
          content="Información sobre honorarios y tarifas de Howell & Abogados. Servicios legales accesibles y de calidad."
        />
      </Helmet>
      <div>
        <h6 className="guide-text ms-3 mt-4">HONORARIOS</h6>
        <div className="container py-5">
          <div id="accordion" className="accordion">
            {/* honorarios principales========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  TARIFAS DE HONORARIOS
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <h5>Principios Generales:</h5>
                  <p>
                    En Howell & Abogados ofrecemos tarifas de honorarios accesibles 
                    a convenir, adaptadas a las necesidades específicas de cada cliente 
                    y caso. Nuestra filosofía es proporcionar servicios legales de alta 
                    calidad con precios competitivos.
                  </p>
                  <h5>Honorarios para Personas Jurídicas:</h5>
                  <p>
                    Para empresas y personas jurídicas, desarrollamos modalidades 
                    de pago flexibles que se adaptan a sus necesidades:
                  </p>
                  <ul>
                    <li>Honorario fijo por servicio</li>
                    <li>Honorario por hora</li>
                    <li>Honorarios según el caso abono inicial y cuotas mensuales </li>
                  </ul>
                  <h5>Honorarios para Personas Naturales:</h5>
                  <p>
                    Para personas naturales, promovemos el principio de negociación 
                    directa, basado en los siguientes criterios:
                  </p>
                  <ul>
                    <li>
                      Complejidad del caso y nivel de preparación profesional 
                      requerido;
                    </li>
                    <li>Urgencia del servicio requerido;</li>
                    <li>Naturaleza del caso y posibilidades del cliente;</li>
                    <li>Historial de colaboración con el cliente.</li>
                  </ul>
                  <p>
                    <strong>Contáctenos para una cotización personalizada:</strong><br/>
                    Teléfono: <strong>3168620336</strong><br/>
                    Email: <strong>georgehowellren@hotmail.com</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Derecho comercial, penal e internacional========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  DERECHO COMERCIAL, PENAL E INTERNACIONAL
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <h5>Derecho Comercial y Empresarial:</h5>
                  <ul>
                    <li>Asesoría en establecimiento de empresas</li>
                    <li>Derecho comercial y mercantil</li>
                    <li>Cartera prejurídica y jurídica</li>
                    <li>Servicios públicos</li>
                    <li>Asesoría integral de negocios</li>
                    <li>Sociedades y establecimientos de comercio</li>
                  </ul>

                  <h5>Derecho Internacional:</h5>
                  <ul>
                    <li>Derecho internacional de visas</li>
                    <li>Inmigración y migración</li>
                    <li>Asuntos aduaneros</li>
                  </ul>

                  <h5>Derecho Penal y Policivo:</h5>
                  <ul>
                    <li>Asuntos penales</li>
                    <li>Asuntos policivos</li>
                    <li>Defensa en procesos penales</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* derecho civil y familia========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  DERECHO CIVIL Y DE FAMILIA
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <h5>Asuntos Civiles:</h5>
                  <ul>
                    <li>Contratos y obligaciones</li>
                    <li>Responsabilidad civil</li>
                    <li>Propiedad y inmuebles</li>
                    <li>Sucesiones</li>
                    <li>Procesos ejecutivos de recuperación de cartera</li>
                    <li>Responsabilidad civil contractual y extracontractual</li>
                    <li>Procesos declarativos</li>
                    <li>Procesos de prescripción adquisitiva de dominio</li>
                  </ul>

                  <h5>Derecho de Familia:</h5>
                  <ul>
                    <li>Divorcios express</li>
                    <li>Declaración de unión marital de hecho</li>
                    <li>Sucesiones express</li>
                    <li>Custodia y régimen de visitas</li>
                    <li>Pensión alimenticia</li>
                    <li>Disolución de sociedad conyugal</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* derecho laboral y administrativo========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  DERECHO LABORAL Y ADMINISTRATIVO
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <h5>Derecho Laboral:</h5>
                  <ul>
                    <li>Despidos injustificados</li>
                    <li>Reclamo de prestaciones sociales</li>
                    <li>Contratos de trabajo</li>
                    <li>Acoso laboral</li>
                    <li>Seguridad social</li>
                  </ul>

                  <h5>Derecho Administrativo y Tributario:</h5>
                  <ul>
                    <li>Derecho administrativo</li>
                    <li>Defensa en asuntos tributarios ante DIAN</li>
                    <li>Recursos y acciones administrativas</li>
                    <li>Contratos con el Estado</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* proceso de contratación========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  PROCESO DE CONTRATACIÓN
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <h5>Pasos para iniciar nuestros servicios:</h5>
                  <ol>
                    <li>
                      <strong>Consulta Inicial:</strong> Contacte nosotros para una 
                      primera valoración de su caso sin compromiso.
                    </li>
                    <li>
                      <strong>Evaluación del Caso:</strong> Analizaremos los detalles 
                      de su situación jurídica.
                    </li>
                    <li>
                      <strong>Propuesta de Honorarios:</strong> Presentaremos una 
                      propuesta clara y transparente de nuestros honorarios.
                    </li>
                    <li>
                      <strong>Acuerdo de Servicios:</strong> Formalizaremos el 
                      acuerdo mediante contrato de prestación de servicios.
                    </li>
                    <li>
                      <strong>Inicio de Gestiones:</strong> Comenzaremos a trabajar 
                      en su caso de inmediato.
                    </li>
                  </ol>
                  <p>
                    <strong>¿Listo para iniciar?</strong><br/>
                    Llámenos ahora: <strong>3168620336</strong><br/>
                    Escríbanos: <strong>georgehowellren@hotmail.com</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honorarios;