import { useState, useMemo } from "react";
import axios from "axios";
import { API_URL } from "../config/api";
import "./styles.css";

const SemanticSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [numResults, setNumResults] = useState(2);
  const [selectedProvince, setSelectedProvince] = useState("all");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  const handleSearch = async () => {
    if (query.trim() === "") {
      setError("El campo de búsqueda no puede estar vacío");
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(API_URL, {
        text: query,
        n: numResults,
      });
      setResults(response.data.results);
    } catch (err) {
      setError("Error al realizar la búsqueda");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredResults = useMemo(() => {
    return results.filter(
      (result) =>
        (selectedProvince === "all" ||
          result.stateProvince === selectedProvince) &&
        (selectedClass === "all" || result.class === selectedClass)
    );
  }, [results, selectedProvince, selectedClass]);

  const classCounts = useMemo(() => {
    return results.reduce((acc, result) => {
      acc[result.class] = (acc[result.class] || 0) + 1;
      return acc;
    }, {});
  }, [results]);

  const uniqueClasses = useMemo(
    () => Array.from(new Set(results.map((result) => result.class))),
    [results]
  );

  const provinceCounts = useMemo(() => {
    const counts = results.reduce((acc, result) => {
      acc[result.stateProvince] = (acc[result.stateProvince] || 0) + 1;
      return acc;
    }, {});
    return counts;
  }, [results]);

  const uniqueProvinces = useMemo(
    () => Array.from(new Set(results.map((result) => result.stateProvince))),
    [results]
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="p-4">
      <h1 class="text-3xl font-bold mb-4">Buscador Semántico</h1>

      <p className="text-md mb-4">
        Digita tu búsqueda por descripción, características, nombre científico,
        etc.
      </p>
      <div className="flex flex-col lg:flex-row space-x-4 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ingrese su búsqueda"
          className="w-full p-2 border rounded mb-2 lg:mb-0"
        />
        <select
          value={numResults}
          onChange={(e) => setNumResults(parseInt(e.target.value))}
          className="p-2 border rounded mb-2 lg:mb-0"
        >
          <option value={2}>2 resultados</option>
          <option value={4}>4 resultados</option>
          <option value={10}>10 resultados</option>
          <option value={15}>15 resultados</option>
        </select>
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="bg-ocean text-white px-4 py-2 rounded mb-2 lg:mb-0"
        >
          {isLoading ? "Buscando..." : "Buscar"}
        </button>
        <select
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
          className="p-2 border rounded mb-2 lg:mb-0"
        >
          <option value="all">Todos los estados/provincias</option>
          {uniqueProvinces.map((province, index) => (
            <option key={index} value={province}>
              {province} ({provinceCounts[province] || 0})
            </option>
          ))}
        </select>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="p-2 border rounded mb-2 md:mb-0"
        >
          <option value="all">Todas las clases</option>
          {uniqueClasses.map((className, index) => (
            <option key={index} value={className}>
              {className} ({classCounts[className] || 0})
            </option>
          ))}
        </select>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResults.map((result, index) => (
          <div
            key={index}
            className="relative bg-white rounded shadow overflow-hidden h-64"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            {result.image && (
              <img
                src={result.image}
                alt={result.verbatimScientificName}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h2 className="text-xl font-semibold mb-2">
                {result.verbatimScientificName}
              </h2>
              <div className="hidden group-hover:block">
                <p>Reino: {result.kingdom}</p>
                <p>Filo: {result.phylum}</p>
                <p>Clase: {result.class}</p>
                <p>Especie: {result.species}</p>
                <p>Estado/Provincia: {result.stateProvince}</p>
              </div>
              <button
                onClick={() => setSelectedSpecies(result)}
                className="mt-2 bg-ocean text-white px-3 py-1 rounded text-sm"
              >
                Ver descripción
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedSpecies && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-5/6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">
              {selectedSpecies.verbatimScientificName}
            </h2>
            <p className="mb-4" id="container-description">
              {selectedSpecies.description}
            </p>
            <p className="mb-2">
              <strong>Reino:</strong> {selectedSpecies.kingdom}
            </p>
            <p className="mb-2">
              <strong>Filo:</strong> {selectedSpecies.phylum}
            </p>
            <p className="mb-2">
              <strong>Clase:</strong> {selectedSpecies.class}
            </p>
            <p className="mb-2">
              <strong>Especie:</strong> {selectedSpecies.species}
            </p>
            <p className="mb-2">
              <strong>Estado/Provincia:</strong> {selectedSpecies.stateProvince}
            </p>
            <button
              onClick={() => setSelectedSpecies(null)}
              className="mt-4 bg-ocean text-white px-4 py-2 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SemanticSearch;
