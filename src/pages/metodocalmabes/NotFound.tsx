import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-4">😴</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Página No Encontrada
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          La página que buscas no existe, pero tu tranquilidad nocturna sí puede existir.
        </p>
        <Link
          to="/metodocalmabes"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          ← Volver al Método CALMA#
        </Link>
      </div>
    </div>
  );
};

export default NotFound;