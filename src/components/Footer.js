import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faLocationDot,
  // faAngleUp,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row justify-content-center py-4">
            {/* Logo Section */}
            <div className="col-md-4 ps-4 mx-auto text-center">
              <span className="">
                <img
                  src="./assets/LOGO2.png"
                  className="img-fluid logo-image me-1"
                  alt="scales of justice logo"
                  width="50"
                  height="50"
                />
                <img
                  src="./assets/component.png"
                  className="img-fluid px-0 logo-text"
                   alt="Howell & Abogados - Asesoría Legal Integral"
                  width="150"
                  height="100"
                />
              </span>
              <p className="content pt-3 px-3">
                Nos encargaremos de guiarlo a través de sus desafíos legales. 
                Estamos dedicados a proteger sus intereses y ofrecerle
                soluciones legales personalizadas y accesibles.
              </p>
            </div>

            {/* Contact Section */}
            <div className="col-md-4 text-center">
              <h6 className="pb-2">Contacto</h6>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="contact-icon"
                    title="georgehowellren@hotmail.com"
                  />
                  <span className="fw-light px-2">georgehowellren@hotmail.com</span>
                </span>
              </div>
              <div className="mt-3 d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="contact-icon"
                    title="3168620336"
                  />
                  <span className="px-2 fw-light">316 86 20336</span>
                </span>
              </div>
              <div className="mt-3 d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="contact-icon"
                    title="Colombia"
                  />
                  <span className="px-2 fw-light">Colombia</span>
                </span>
              </div>
            </div>

            {/* Program section */}
            <div className="col-md-4 text-center mt-4 mt-md-0">
              <div>
                <h6 className="pb-2">Horario</h6>
                <p className="fw-light">
                  Lunes – Sabado: 8AM – 6PM <br /> Domingo: Cerrado
                </p>
                {/*<a href="/sitemap.xml" className="">
                  Mapa del sitio
                </a>*/}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll up */}
        {/* <div>
          <a
            href="#top"
            aria-label="Navigheaza in partea de sus"
            className="scroll-to-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <FontAwesomeIcon icon={faAngleUp} className="up-icon" size="2x" />
          </a>
        </div> */}
        {/* WhatsAppWidget */}
        <div>
          <WhatsAppWidget
            phoneNo="573168620336"
            position="right"
            iconSize="50"
            iconColor="white"
            iconBgColor="#25D366"
            headerIcon="assets/LOGO2.png"
            headerTxtColor="white"
            headerBgColor="#02182b"
            headerTitle="Howell & Abogados"
            headerCaption="En línea"
            bodyBgColor="#bbb"
            chatPersonName="Soporte"
            chatMessage={
              <>
                ¡Hola!
                <br />
                <br /> ¿Cómo podemos ayudarle?
              </>
            }
            footerBgColor="#999"
            btnBgColor="#c2b697"
            btnTxtColor="black"
          />
        </div>
        {/* Copyright */}
        <div>
          <div className="bg-dark d-flex align-items-center justify-content-center">
            <hr></hr>
            <p className="copyright mb-0">Copyright © 2024 - 2026 Catalina-Alexandra Jora</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
