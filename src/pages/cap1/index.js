import { useState, useEffect } from 'react';
import CAREMChart from '/mincyt/components/CAREMChart';

export default function Cap1Page() {
  const [charts, setCharts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCharts = async () => {
      try {
        const chartIds = [
          'chart_1_2', 'chart_1_3', 'chart_1_4', 'chart_1_5', 'chart_1_6',
          'chart_1_7', 'chart_1_8', 'chart_1_9', 'chart_1_10', 'chart_1_11',
          'chart_1_12', 'chart_1_13', 'chart_1_14', 'chart_1_15', 'chart_1_16', 'chart_1_17', 'chart_1_18'
        ];

        const chartsData = {};
        for (const id of chartIds) {
          const res = await fetch(`/data/${id}.json`);
          if (res.ok) {
            chartsData[id] = await res.json();
          }
        }
        setCharts(chartsData);
      } catch (error) {
        console.error('Error cargando gráficos:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCharts();
  }, []);

  const handleBack = () => {
    window.location.href = '/mincyt';
  };

  const handleNext = () => {
    window.location.href = '/mincyt/cap2';
  };

  if (loading) {
    return <div className="p-8 text-center">Cargando gráficos...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-8 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Capítulo 1</h1>
            <p className="text-blue-100 mt-2">El complejo nacional y sus organismos de gobernanza</p>
          </div>
          <button
            onClick={handleBack}
            className="bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-lg font-semibold transition"
          >
            ↑ Inicio
          </button>
        </div>
      </header>

            {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Intro Section */}
        <div className="bg-blue-50 rounded-lg p-6 mb-12 border-l-4 border-blue-600 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Sobre este capítulo</h2>
          <p className="text-gray-700 leading-relaxed">
            Este primer capítulo amplía el foco hacia la dinámica institucional del conglomerado CTI nacional en su conjunto. A través de una mirada diacrónica de las principales instituciones de investigación y gobernanza del sector público, así como con un análisis de la fisonomía que durante el período de interés (2008-2023) adquirió el sector, con énfasis en la información que provee una atenta mirada a la ejecución presupuestaria y los planes estratégicos elaborados.
          </p>
          <p className="text-gray-700 leading-relaxed">
            La historia institucional en la que se inscribe el MINCyT puede remontarse hasta mediados del siglo XX, momento clave para el surgimiento de las políticas de ciencia y tecnología. Hacerlo aporta densidad histórica al analizar el rol que sus predecesores ocuparon dentro de la institucionalidad estatal nacional. Por ello en la primera parte de este capítulo se despliega un recorrido por las principales instituciones de gobernanza CTI nacionales, desde el surgimiento de la política de ciencia y técnica entre las décadas del cuarenta y el cincuenta, hasta la creación del MINCyT en la primera década del siglo XXI.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Para comprender la racionalidad que guía a las políticas CTI, resulta también pertinente desarrollar una mirada sobre el conjunto de las instituciones del sector público nacional. Para ello optamos por detenernos en la ejecución de la Función Ciencia y Técnica Ampliada (Función CyTA), una variable construida especialmente para analizar al conjunto de los gastos del sector dentro del presupuesto de la administración pública nacional (APN).
          </p>
          <p className="text-gray-700 leading-relaxed">
            A través de este análisis se corrobora el rol que adoptó el MINCyT como primus inter pares durante los dieciséis años que existió. Mientras que el ministerio se consolidó como principal ejecutante de la inversión CyT, más de la mitad del gasto total pasó por organismos descentralizados que lo precedieron y/o pertenecieron a otras jurisdicciones. El análisis realizado permite reconocer a la Función CyTA con un patrón de gasto mayormente descentralizado, disperso y fragmentado. Este análisis reconoce también los principales rubros por donde se canalizó la inversión sectorial, lo cual resulta determinante para un análisis de los desafíos de política asumidos.
          </p>
        </div>

        <div className="space-y-12">
          {/* Chart 1.1 - Diagrama del sistema */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <img 
              src="/mincyt/public/Gráfico 1.1.jpg" 
              alt="Diagrama del sistema nacional en Ciencia y Tecnología de 2007"
              className="w-full h-auto mb-4 rounded"
            />
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Gráfico 1.1: Diagrama del sistema nacional en Ciencia y Tecnología de 2007
            </h2>
            <p className="text-gray-600 text-sm italic">
              Extraído de Dirección Nacional de Información Científica (s.f.).
            </p>
          </section>

          {/* Chart 1.2 */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <iframe 
              title="RadiografíaTesisCap1 - Gráfico 1.2"
              width="100%" 
              style={{aspectRatio: "1280 / 720"}}
              src="https://app.powerbi.com/view?r=eyJrIjoiZDdkZmZjODUtNTI0Ni00YTY1LTk1ZDUtOTgwNjIwN2NmNmM3IiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9&pageName=ReportSection1ddb41c122ee8f3b1cbf" 
              frameBorder="0" 
              allowFullScreen={true}
            />
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
              Gráfico 1.2: Evolución de la inversión anual de la Función Ciencia y Técnica Ampliada (1995-2023)
            </h2>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="text-sm text-gray-600">
                En pesos constantes de 2008. Elaboración propia en base a partidas de ejecución presupuestaria.
              </p>
            </div>
          </section>

          {/* Chart 1.3 */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <iframe 
              title="RadiografíaTesisCap1 - Gráfico 1.3"
              width="100%" 
              style={{aspectRatio: "1280 / 720"}}
              src="https://app.powerbi.com/view?r=eyJrIjoiZDdkZmZjODUtNTI0Ni00YTY1LTk1ZDUtOTgwNjIwN2NmNmM3IiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9&pageName=ReportSection5d8e13e796e660c3d728" 
              frameBorder="0" 
              allowFullScreen={true}
            />
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
              Gráfico 1.3: Evolución de la inversión anual de la Función Ciencia y Técnica Ampliada, como porcentaje del PBI y como porcentaje de los gastos totales de la APN (1995-2023)
            </h2>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="text-sm text-gray-600">
                Elaboración propia en base a partidas de ejecución presupuestaria.
              </p>
            </div>
          </section>

          {/* Chart 1.4 */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <iframe 
              title="RadiografíaTesisCap1 - Gráfico 1.4"
              width="100%" 
              style={{aspectRatio: "1280 / 720"}}
              src="https://app.powerbi.com/view?r=eyJrIjoiZDdkZmZjODUtNTI0Ni00YTY1LTk1ZDUtOTgwNjIwN2NmNmM3IiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9&pageName=ReportSection62af63b538b5751ebe26" 
              frameBorder="0" 
              allowFullScreen={true}
            />
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
              Gráfico 1.4: Evolución de la participación anual de administración central y organismos descentralizados sobre la inversión total de la Función Ciencia y Técnica Ampliada (1995-2023)
            </h2>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="text-sm text-gray-600">
                Elaboración propia en base a partidas de ejecución presupuestaria.
              </p>
            </div>
          </section>

          {/* Chart 1.5 - Formación de Recursos Humanos */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <iframe 
              title="RadiografíaTesisCap1 - Gráfico 1.5"
              width="100%" 
              style={{aspectRatio: "1280 / 720"}}
              src="https://app.powerbi.com/view?r=eyJrIjoiZDdkZmZjODUtNTI0Ni00YTY1LTk1ZDUtOTgwNjIwN2NmNmM3IiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9&pageName=ReportSectionee5dd3d843fa2a0392be" 
              frameBorder="0" 
              allowFullScreen={true}
            />
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
              Gráfico 1.5: Panel de participación de entidades sobre la inversión total de la Función Ciencia y Técnica Ampliada (2008-2023)
            </h2>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="text-sm text-gray-600">
                1.5a: Participación anual en porcentajes por entidad. 1.5b: Participación total del período a valores constantes por entidad. Elaboración propia en base a partidas de ejecución presupuestaria.
              </p>
            </div>
          </section>

          {/* Chart 1.6 - Financiamiento CyT */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <iframe 
              title="RadiografíaTesisCap1 - Gráfico 1.6"
              width="100%" 
              style={{aspectRatio: "1280 / 720"}}
              src="https://app.powerbi.com/view?r=eyJrIjoiZDdkZmZjODUtNTI0Ni00YTY1LTk1ZDUtOTgwNjIwN2NmNmM3IiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9&pageName=ReportSectionbf5f2ae8a5f0c55ec858" 
              frameBorder="0" 
              allowFullScreen={true}
            />
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
              Gráfico 1.6: Panel de participación de jurisdicciones sobre la inversión total de la Función Ciencia y Técnica Ampliada (2008-2023)
            </h2>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="text-sm text-gray-600">
                1.6a: Participación anual en porcentajes por jurisdicción. 1.6b: Participación total del período a valores constantes por jurisdicción. Elaboración propia en base a partidas de ejecución presupuestaria.
              </p>
            </div>
          </section>

          {/* Chart 1.7 - Desarrollo Productivo */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <iframe 
              title="RadiografíaTesisCap1 - Gráfico 1.7"
              width="100%" 
              style={{aspectRatio: "1280 / 720"}}
              src="https://app.powerbi.com/view?r=eyJrIjoiZDdkZmZjODUtNTI0Ni00YTY1LTk1ZDUtOTgwNjIwN2NmNmM3IiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9&pageName=ReportSection287d910df626cec333c6" 
              frameBorder="0" 
              allowFullScreen={true}
            />
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
              Gráfico 1.7. Inversión total de cada concepto programático de la Función Ciencia y Técnica Ampliada, a valores constantes (2008-2023)
            </h2>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="text-sm text-gray-600">
                Elaboración propia en base a partidas de ejecución presupuestaria.
              </p>
            </div>
          </section>

          {/* Chart 1.8 - Actividades Centrales y Comunes */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <iframe 
              title="RadiografíaTesisCap1 - Gráfico 1.8"
              width="100%" 
              style={{aspectRatio: "1280 / 720"}}
              src="https://app.powerbi.com/view?r=eyJrIjoiZDdkZmZjODUtNTI0Ni00YTY1LTk1ZDUtOTgwNjIwN2NmNmM3IiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9&pageName=ReportSection" 
              frameBorder="0" 
              allowFullScreen={true}
            />
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
              Gráfico 1.8. Panel de participación de incisos sobre la inversión total de la Función Ciencia y Técnica Ampliada (2008-2023)
            </h2>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="text-sm text-gray-600">
                A valores constantes de 2008. 2.8a: Participación por inciso sobre el total ejecutado. 2.8b: Gasto total ejecutado por concepto programático distinguido por inciso. 2.8c: Gasto total ejecutado por entidad distinguido por inciso. Elaboración propia en base a partidas de ejecución presupuestaria.
              </p>
            </div>
          </section>

          {/* Chart 1.9 - Energía Nuclear */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <iframe 
              title="RadiografíaTesisCap1 - Gráfico 1.9"
              width="100%" 
              style={{aspectRatio: "1280 / 720"}}
              src="https://app.powerbi.com/view?r=eyJrIjoiZDdkZmZjODUtNTI0Ni00YTY1LTk1ZDUtOTgwNjIwN2NmNmM3IiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9&pageName=ReportSectionad0f26f17e47a03e8f93" 
              frameBorder="0" 
              allowFullScreen={true}
            />
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
              Gráfico 1.9: Panel del concepto programático Desarrollo Productivo de la Función Ciencia y Técnica Ampliada (2008-2023)
            </h2>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="text-sm text-gray-600">
                1.9a: Participación porcentual de programas y entidades sobre el concepto programático. 1.9b: Participación porcentual de gasto corriente y gasto en capital por entidad (INTA e INTI). 1.9c: Participación porcentual de fuente presupuestaria por entidad (INTA e INTI). Elaboración propia en base a partidas de ejecución presupuestaria.
              </p>
            </div>
          </section>

          {/* Chart 1.10 - Actividades Espaciales */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <iframe 
              title="RadiografíaTesisCap1 - Gráfico 1.10"
              width="100%" 
              style={{aspectRatio: "1280 / 720"}}
              src="https://app.powerbi.com/view?r=eyJrIjoiZDdkZmZjODUtNTI0Ni00YTY1LTk1ZDUtOTgwNjIwN2NmNmM3IiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9&pageName=ReportSection58b54605d190550b5439" 
              frameBorder="0" 
              allowFullScreen={true}
            />
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
              Gráfico 1.10: Panel de los conceptos programáticos Energía Nuclear y Actividades Espaciales de la Función Ciencia y Técnica Ampliada (2008-2023)
            </h2>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="text-sm text-gray-600">
                1.10a: Participación porcentual de programas y entidades sobre el concepto programático. 1.10b: Participación porcentual de gasto corriente y gasto en capital por entidad. 1.10c: Participación porcentual de fuente presupuestaria por entidad. Elaboración propia en base a partidas de ejecución presupuestaria.
              </p>
            </div>
          </section>

          {/* Chart 1.11 - Plan Antártico y Defensa */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <iframe 
              title="RadiografíaTesisCap1 - Gráfico 1.11"
              width="100%" 
              style={{aspectRatio: "1280 / 720"}}
              src="https://app.powerbi.com/view?r=eyJrIjoiZDdkZmZjODUtNTI0Ni00YTY1LTk1ZDUtOTgwNjIwN2NmNmM3IiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9&pageName=ReportSectiona1b38564725ca7061546" 
              frameBorder="0" 
              allowFullScreen={true}
            />
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
              Gráfico 1.11: Panel del concepto programático Energía Nuclear de la Función Ciencia y Técnica Ampliada, detalle de gastos corrientes y de capital (2008-2023)
            </h2>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="text-sm text-gray-600">
                1.11a: Participación porcentual de incisos en gastos corrientes. 1.11b: Participación porcentual de inversión real directa y transferencias en gastos de capital. Elaboración propia en base a partidas de ejecución presupuestaria.
              </p>
            </div>
          </section>

          {/* Chart 1.12 - Inversión por Inciso */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <iframe 
              title="RadiografíaTesisCap1 - Gráfico 1.12"
              width="100%" 
              style={{aspectRatio: "1280 / 720"}}
              src="https://app.powerbi.com/view?r=eyJrIjoiZDdkZmZjODUtNTI0Ni00YTY1LTk1ZDUtOTgwNjIwN2NmNmM3IiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9&pageName=ReportSection3730fd5507090c449906" 
              frameBorder="0" 
              allowFullScreen={true}
            />
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
              Gráfico 1.12. Evolución de la inversión anual de los conceptos programáticos Energía Nuclear y Actividades Espaciales la Función Ciencia y Técnica Ampliada, a valores constantes (2008-2023)
            </h2>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="text-sm text-gray-600">
                Elaboración propia en base a partidas de ejecución presupuestaria.
              </p>
            </div>
          </section>

          {/* Chart 1.13 - Inversión por Inciso */}
          <section className="bg-white rounded-lg shadow-md p-6">
            {charts.chart_1_13 && (
              <CAREMChart
                data={charts.chart_1_13}
              />
            )}
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
              Gráfico 1.13. Porcentaje de avance físico del proyecto de inversión plurianual "Construcción de Reactor de Baja Potencia CAREM – Fase II" (2007-2023)
            </h2>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="text-sm text-gray-600">
                En columnas grises, eje izquierdo, porcentaje de avance físico acumulado; en línea naranja, eje derecho, porcentaje de avance físico anual. Elaboración propia en base a informes de inversión pública nacional.
              </p>
            </div>
          </section>

          {/* Chart 1.14 - Inversión por Inciso */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <iframe 
              title="RadiografíaTesisCap1 - Gráfico 1.14"
              width="100%" 
              style={{aspectRatio: "1280 / 720"}}
              src="https://app.powerbi.com/view?r=eyJrIjoiZDdkZmZjODUtNTI0Ni00YTY1LTk1ZDUtOTgwNjIwN2NmNmM3IiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9&pageName=ReportSection7565e88f20dd4e2ce2de" 
              frameBorder="0" 
              allowFullScreen={true}
            />
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
              Gráfico 1.14. Evolución comparada de la inversión anual en la CNEA (Función Ciencia y Técnica) y las transferencias a NA-SA (Función Energía), a valores constantes (2008-2023)
            </h2>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="text-sm text-gray-600">
                En columnas de la izquierda, inversión en el proyecto CAREM y otros gastos de la CNEA. En columnas de la derecha, transferencia de capital a NA-SA bajo la Función Energía. Elaboración propia en base a partidas de ejecución presupuestaria.
              </p>
            </div>
          </section>

          {/* Chart 1.15 - Inversión por Inciso */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <iframe 
              title="RadiografíaTesisCap1 - Gráfico 1.15"
              width="100%" 
              style={{aspectRatio: "1280 / 720"}}
              src="https://app.powerbi.com/view?r=eyJrIjoiZDdkZmZjODUtNTI0Ni00YTY1LTk1ZDUtOTgwNjIwN2NmNmM3IiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9&pageName=ReportSectionc83fbbcaec5796c01e16" 
              frameBorder="0" 
              allowFullScreen={true}
            />
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
              Gráfico 1.15. Evolución comparada de la inversión anual en la Función Ciencia y Técnica Ampliada y transferencias de capital a empresas tecnológicas, a valores constantes (2008-2023)
            </h2>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="text-sm text-gray-600">
                Elaboración propia en base a partidas de ejecución presupuestaria.
              </p>
            </div>
          </section>

          {/* Chart 1.16 */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <iframe 
              title="RadiografíaTesisCap1 - Gráfico 1.16"
              width="100%" 
              style={{aspectRatio: "1280 / 720"}}
              src="https://app.powerbi.com/view?r=eyJrIjoiZDdkZmZjODUtNTI0Ni00YTY1LTk1ZDUtOTgwNjIwN2NmNmM3IiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9&pageName=ReportSection55b0ce50350e905ea4aa" 
              frameBorder="0" 
              allowFullScreen={true}
            />
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
              Gráfico 1.16. Participación porcentual por programa presupuestario y entidad del concepto programático Plan Antártico y Defensa (2008-2023).
            </h2>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="text-sm text-gray-600">
                Elaboración propia en base a partidas de ejecución presupuestaria.
              </p>
            </div>
          </section>

          {/* Chart 1.17 */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <iframe 
              title="RadiografíaTesisCap1 - Gráfico 1.17"
              width="100%" 
              style={{aspectRatio: "1280 / 720"}}
              src="https://app.powerbi.com/view?r=eyJrIjoiZDdkZmZjODUtNTI0Ni00YTY1LTk1ZDUtOTgwNjIwN2NmNmM3IiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9&pageName=ReportSection3eec4a6c099040b494da" 
              frameBorder="0" 
              allowFullScreen={true}
            />
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
              Gráfico 1.17: Panel del concepto programático Otros de la Función Ciencia y Técnica Ampliada, detalle de gastos corrientes y de capital anual y por organismo (2008-2023)
            </h2>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="text-sm text-gray-600">
                1.17a: Participación porcentual por organismo, desagregados por gastos corrientes y de capital. 1.17b: Participación anual de gastos corrientes y de capital, a valores constantes de 2008. Elaboración propia en base a partidas de ejecución presupuestaria.
              </p>
            </div>
          </section>

          {/* Chart 1.18 */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <iframe 
              title="RadiografíaTesisCap1 - Gráfico 1.18"
              width="100%" 
              style={{aspectRatio: "1280 / 720"}}
              src="https://app.powerbi.com/view?r=eyJrIjoiZDdkZmZjODUtNTI0Ni00YTY1LTk1ZDUtOTgwNjIwN2NmNmM3IiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9&pageName=ReportSection142177e0b6b4ab9dfba1" 
              frameBorder="0" 
              allowFullScreen={true}
            />
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
              Gráfico 1.18. Panel de participación de los conceptos programáticos sobre la inversión total de la Función Ciencia y Técnica Ampliada (2008-2023)
            </h2>
            <div className="bg-gray-50 p-4 rounded mt-4">
              <p className="text-sm text-gray-600">
                1.18a: Participación porcentual de cada concepto sobre el gasto total de cada período presidencial. 1.18b: Evolución del gasto anual de cada concepto programático, a valores constantes (2008-2023). Elaboración propia en base a partidas de ejecución presupuestaria.
              </p>
            </div>
          </section>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between mt-16 pt-8">
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
          >
            ← Volver al sitio
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Siguiente capítulo →
          </button>
        </div>
      </main>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>Capítulo 1. El complejo nacional y sus organismos de gobernanza</p>
          <p className="text-sm mt-2">
            Políticas orientadas: El MINCYT y su estrategia para promover el desarrollo nacional (2007-2023)
          </p>
        </div>
      </div>
    );
}
