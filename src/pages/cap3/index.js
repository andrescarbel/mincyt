export default function Cap3Page() {
  const powerBiToken = 'eyJrIjoiOWQ3MjJlN2QtNWJlMS00NGIzLWJjZmUtMmY4MGVhM2NlMDFmIiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9';

  const charts = [
    {
      number: '3.1',
      type: 'image',
      src: '/mincyt/public/Grafico_3_1.jpg',
      title: 'Esquema general de instrumentos de promoción orientada CTI gestionados por el MINCyT a través de la Agencia y otras dependencias (2008-2023)',
      note: 'Elaboración propia.'
    },
    {
      number: '3.2',
      type: 'powerbi',
      reportSectionId: 'ReportSection8ecfd4c001ac56f4b85c',
      token: powerBiToken,
      title: 'Sumatoria de adjudicaciones financieras de la Agencia, medidas en pesos constantes, distribuidas por fondo, en valores porcentuales (2008-2023)',
      note: 'Elaboración propia en base a Informes de Adjudicación.'
    },
    {
      number: '3.3',
      type: 'powerbi',
      reportSectionId: 'ReportSection4d3d2b9399bb97af34e1',
      token: powerBiToken,
      title: 'Sumatoria de adjudicaciones financieras del FONSOFT, medidas en pesos constantes, distribuidas por tipo de instrumento operativo, en valores porcentuales (2008-2019)',
      note: 'Elaboración propia en base a Informes de Adjudicación.'
    },
    {
      number: '3.4',
      type: 'powerbi',
      reportSectionId: 'ReportSectionc54bde7cce856e0caeca',
      token: powerBiToken,
      title: 'Panel de participación porcentual de adjudicaciones financieras de la Agencia (2008-2023), según fondo y participación de instrumentos orientados',
      note: '3.4a: Porcentaje total de adjudicaciones financieras orientadas y no orientadas. 3.4b: Participación por cada fondo en adjudicaciones financieras orientadas y no orientadas. Elaboración propia en base a Informes de Adjudicación.'
    },
    {
      number: '3.5',
      type: 'powerbi',
      reportSectionId: 'ReportSection3ebd475bd46152007ce8',
      token: powerBiToken,
      title: 'Promedio de pesos adjudicados por proyecto según instrumento y fondo (a valores constantes de 2008)',
      note: 'Elaboración propia en base a informes de adjudicación.'
    },
    {
      number: '3.6',
      type: 'powerbi',
      reportSectionId: 'ReportSection169a7ab7c13991845a1f',
      token: powerBiToken,
      title: 'Adjudicaciones financieras anuales del FONARSEC (2009-2023, en pesos constantes de 2008)',
      note: 'Desagregado por instrumento operativo, agrupados en base a objetivos del programa acordado entre MINCyT y BM en 2007. Elaboración propia en base a informes de adjudicación.'
    },
    {
      number: '3.7',
      type: 'powerbi',
      reportSectionId: 'ReportSectiona1e91169aa7495579039',
      token: powerBiToken,
      title: 'Panel de adjudicaciones financieras de la Agencia, en pesos constantes (2008-2023), según mandato presidencial',
      note: '3.7a: Participación de adjudicaciones financieras orientadas y no orientadas por mandato. 3.7b: Participación de adjudicaciones financieras por fondo y por mandato. Elaboración propia en base a Informes de Adjudicación.'
    }
  ];

  const handleBack = () => {
    window.location.href = '/mincyt';
  };

  const handlePrev = () => {
    window.location.href = '/mincyt/cap2';
  };

  const handleNext = () => {
    window.location.href = '/mincyt/cap4';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-green-600 text-white py-8 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Capítulo 3</h1>
            <p className="text-green-100 mt-2">Instrumentos de promoción orientada</p>
          </div>
          <button
            onClick={handleBack}
            className="bg-green-700 hover:bg-green-800 px-6 py-2 rounded-lg font-semibold transition"
          >
            ↑ Inicio
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Intro Section */}
        <div className="bg-green-50 rounded-lg p-6 mb-12 border-l-4 border-green-600 shadow-sm">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Sobre este capítulo</h2>
          <p className="text-gray-700 leading-relaxed">
            El presente capítulo delinea las principales tendencias de las políticas CTI de promoción orientada que, desde su creación, el MINCyT puso en marcha. A contramano de la dirección general que primó históricamente en la política sectorial nacional, a inicios del presente siglo emergió con fuerza una mirada que consideraba a las actividades de ciencia y tecnología valiosas en tanto y en cuanto permitieran resolver demandas sociales y productivas. Buscaba, por tanto, involucrar a la política sectorial para que eso suceda. Lo que apareció fue una nueva manera de entender a la acción estatal en el sector, que debió cuestionar e intentar superar al denominado “modelo lineal de innovación”, dominante tanto en el diseño institucional y burocrático, como en los principales instrumentos de promoción sectorial.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Para dar cuenta de esta modulación en la forma de concebir la promoción CTI, se realiza un panorama por el instrumental implementado entre 2008 y 2023. Para ello, se optó por dividir al capítulo en tres secciones. En primer lugar, se define los principales conceptos para delimitar los “instrumentos operativos de promoción orientada” a través de un recorrido por la literatura especializada. En segundo lugar, se analiza los fondos e iniciativas desplegados desde la creación del MINCyT a través de una atenta lectura a la documentación oficial. Allí se muestra que, además de la Agencia , otras dependencias del ministerio pusieron en marcha instrumentos de este tipo. Finalmente, se identifica las particularidades de cada ciclo político y elabora algunas hipótesis de lectura global acerca de los modos en que se gestionaron los instrumentos orientados de CTI en el MINCyT en el período de análisis. La conclusión retoma estos puntos en una reflexión preliminar sobre el rol del MINCyT como promotor del desarrollo.
          </p>
        </div>

        {/* Charts Section */}
        <div className="space-y-16">
          {charts.map((chart) => (
            <section key={chart.number} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              {/* Chart Rendering */}
              <div className="mb-6">
                {chart.type === 'image' ? (
                  <div className="relative w-full rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={chart.src}
                      alt={`Gráfico ${chart.number}`}
                      className="w-full h-auto"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = e.target.nextElementSibling;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div
                      style={{ display: 'none' }}
                      className="w-full h-64 flex items-center justify-center bg-gray-200 text-gray-600"
                    >
                      <p className="text-center">
                        Imagen: Gráfico {chart.number}<br />
                        <span className="text-sm">(No disponible)</span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full bg-gray-50 rounded-lg overflow-hidden">
                    <iframe
                      title={`Gráfico ${chart.number}`}
                      width="100%"
                      height="600"
                      style={{ minHeight: '600px', aspectRatio: '1280 / 720' }}
                      src={`https://app.powerbi.com/view?r=${chart.token}&pageName=${chart.reportSectionId}`}
                      frameBorder="0"
                      allowFullScreen={true}
                      loading="lazy"
                    />
                  </div>
                )}
              </div>

              {/* Title and Note */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">
                  Gráfico {chart.number}. {chart.title}
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm text-gray-600 leading-relaxed">{chart.note}</p>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Navigation Section */}
        <nav className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors"
          >
            ← Capítulo 2
          </button>

          <button
            onClick={handleBack}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
          >
            ↑ Inicio
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
          >
            Capítulo 4 →
          </button>
        </nav>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16 py-8 border-t border-gray-200">
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>Capítulo 3: Instrumentos de promoción orientada</p>
          <p className="text-sm mt-2">
            Políticas orientadas: El MINCYT y su estrategia para promover el desarrollo nacional (2007-2023)
          </p>
        </div>
      </footer>
    </div>
  );
}