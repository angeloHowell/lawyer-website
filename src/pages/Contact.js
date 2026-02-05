import React from "react";
import { Helmet } from "react-helmet";

import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <div className="contact-page">
        <Helmet>
          <title>
            Contacto | Howell & Abogados | George Eduard Howell Rendon
          </title>
          
          <meta
            name="description"
            content="Contáctenos para asesoría legal profesional. Howell & Abogados ofrece servicios en derecho comercial, penal, civil, familiar e inmigración. Teléfono: 3168620336, Email: georgehowellren@hotmail.com."
          />
        </Helmet>
      <section>
        <h6 className="guide-text ms-3 mt-4">CONTACTO</h6>
        {/* contact info============ */}
        <div className="container-lg bg-light my-5 shadow">
          <div className="contact-info text-center py-5">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Ubicación:</h5>
                  <p>Colombia</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faClock}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Horario:</h5>
                  <p>Lunes – Sabado: 8:00 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>E-mail</h5>
                  <p>georgehowellren@hotmail.com</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faPhone}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Teléfono</h5>
                  <p>316 86 20336</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact form and text============ */}
        <div className="container-lg">
          <div className="row g-5">
            <div className="col-sm-6 order-sm-first ">
              <div className="contact-text d-flex flex-column ">
                <h5 className="lh-base text-center pb-4">
                  ¡No dude en contactarnos!
                </h5>
                <p>
                  Estamos aquí para ofrecerle nuestro apoyo en todos los 
                  asuntos legales que enfrente.{" "}
                </p>
                <p>
                  Por favor contáctenos realizando click sobre el ícono de WhatsApp y 
                  estaremos encantados de brindarle nuestra ayuda.
                </p>
                <p>
                  Recibiremos su solicitud y le responderemos a la brevedad 
                  para más detalles.
                </p>
              </div>
            </div>
            {/*<div className="col-sm-6 ">
              <ContactForm />
            </div>*/}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
