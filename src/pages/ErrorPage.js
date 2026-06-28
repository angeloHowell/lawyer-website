import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <Helmet>
        <title>Página no encontrada | Howell & Abogados</title>
        <meta
          name="description"
          content="La página que busca no está disponible. Howell & Abogados - Asesoría Legal Integral en Colombia."
        />
      </Helmet>
      <h4>Error 404</h4>
      <p>No se ha encontrado la página.</p>
    </div>
  );
};

export default ErrorPage;
