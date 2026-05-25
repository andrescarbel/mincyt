import SimpleLineChart from '../../components/SimpleLineChart';

export default function Cap2Page() {
  const powerBiToken = 'eyJrIjoiZDU2ZjBkZjEtMmMzYy00N2QwLWFlNTAtYjc4NWY1YzRmNGVmIiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9';
  const powerBiToken2_2 = 'eyJrIjoiNjI3NDMzMzItMTgzMS00NDdiLTg1NmYtYWM3MGJkY2EyYmZhIiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9';

  // Datos para Gráfico 2.3 - 9 series desde 2007 a 2032
  const chartData2_3 = [
    { year: 2007, i_d_total: 0.46, i_d_publica: 0.30, arg_innov2020_a_t: null, arg_innov2020_b_t: null, pncti2030_t: null, arg_innov2020_a_p: null, arg_innov2020_b_p: null, pncti2030_p: null, ley_fin_p: null },
    { year: 2008, i_d_total: 0.47, i_d_publica: 0.33, arg_innov2020_a_t: null, arg_innov2020_b_t: null, pncti2030_t: null, arg_innov2020_a_p: null, arg_innov2020_b_p: null, pncti2030_p: null, ley_fin_p: null },
    { year: 2009, i_d_total: 0.58, i_d_publica: 0.41, arg_innov2020_a_t: null, arg_innov2020_b_t: null, pncti2030_t: null, arg_innov2020_a_p: null, arg_innov2020_b_p: null, pncti2030_p: null, ley_fin_p: null },
    { year: 2010, i_d_total: 0.56, i_d_publica: 0.39, arg_innov2020_a_t: null, arg_innov2020_b_t: null, pncti2030_t: null, arg_innov2020_a_p: null, arg_innov2020_b_p: null, pncti2030_p: null, ley_fin_p: null },
    { year: 2011, i_d_total: 0.57, i_d_publica: 0.40, arg_innov2020_a_t: 0.65, arg_innov2020_b_t: 0.65, pncti2030_t: null, arg_innov2020_a_p: 0.48, arg_innov2020_b_p: 0.48, pncti2030_p: null, ley_fin_p: null },
    { year: 2012, i_d_total: 0.63, i_d_publica: 0.46, arg_innov2020_a_t: 0.69, arg_innov2020_b_t: 0.74, pncti2030_t: null, arg_innov2020_a_p: 0.51, arg_innov2020_b_p: 0.53, pncti2030_p: null, ley_fin_p: null },
    { year: 2013, i_d_total: 0.62, i_d_publica: 0.45, arg_innov2020_a_t: 0.72, arg_innov2020_b_t: 0.83, pncti2030_t: null, arg_innov2020_a_p: 0.53, arg_innov2020_b_p: 0.57, pncti2030_p: null, ley_fin_p: null },
    { year: 2014, i_d_total: 0.59, i_d_publica: 0.46, arg_innov2020_a_t: 0.76, arg_innov2020_b_t: 0.92, pncti2030_t: null, arg_innov2020_a_p: 0.56, arg_innov2020_b_p: 0.61, pncti2030_p: null, ley_fin_p: null },
    { year: 2015, i_d_total: 0.62, i_d_publica: 0.47, arg_innov2020_a_t: 0.79, arg_innov2020_b_t: 1.01, pncti2030_t: null, arg_innov2020_a_p: 0.58, arg_innov2020_b_p: 0.65, pncti2030_p: null, ley_fin_p: null },
    { year: 2016, i_d_total: 0.56, i_d_publica: 0.40, arg_innov2020_a_t: 0.82, arg_innov2020_b_t: 1.14, pncti2030_t: null, arg_innov2020_a_p: 0.61, arg_innov2020_b_p: 0.70, pncti2030_p: null, ley_fin_p: null },
    { year: 2017, i_d_total: 0.56, i_d_publica: 0.39, arg_innov2020_a_t: 0.85, arg_innov2020_b_t: 1.27, pncti2030_t: null, arg_innov2020_a_p: 0.63, arg_innov2020_b_p: 0.74, pncti2030_p: null, ley_fin_p: null },
    { year: 2018, i_d_total: 0.49, i_d_publica: 0.32, arg_innov2020_a_t: 0.88, arg_innov2020_b_t: 1.39, pncti2030_t: null, arg_innov2020_a_p: 0.65, arg_innov2020_b_p: 0.78, pncti2030_p: null, ley_fin_p: null },
    { year: 2019, i_d_total: 0.48, i_d_publica: 0.29, arg_innov2020_a_t: 0.91, arg_innov2020_b_t: 1.52, pncti2030_t: null, arg_innov2020_a_p: 0.67, arg_innov2020_b_p: 0.80, pncti2030_p: null, ley_fin_p: null },
    { year: 2020, i_d_total: 0.54, i_d_publica: 0.31, arg_innov2020_a_t: 0.94, arg_innov2020_b_t: 1.65, pncti2030_t: 0.52, arg_innov2020_a_p: 0.70, arg_innov2020_b_p: 0.83, pncti2030_p: 0.31, ley_fin_p: null },
    { year: 2021, i_d_total: 0.52, i_d_publica: 0.30, arg_innov2020_a_t: null, arg_innov2020_b_t: null, pncti2030_t: 0.59, arg_innov2020_a_p: null, arg_innov2020_b_p: null, pncti2030_p: 0.35, ley_fin_p: 0.28 },
    { year: 2022, i_d_total: 0.55, i_d_publica: 0.32, arg_innov2020_a_t: null, arg_innov2020_b_t: null, pncti2030_t: 0.65, arg_innov2020_a_p: null, arg_innov2020_b_p: null, pncti2030_p: 0.39, ley_fin_p: 0.31 },
    { year: 2023, i_d_total: 0.60, i_d_publica: 0.33, arg_innov2020_a_t: null, arg_innov2020_b_t: null, pncti2030_t: 0.72, arg_innov2020_a_p: null, arg_innov2020_b_p: null, pncti2030_p: 0.44, ley_fin_p: 0.34 },
    { year: 2024, i_d_total: null, i_d_publica: null, arg_innov2020_a_t: null, arg_innov2020_b_t: null, pncti2030_t: 0.78, arg_innov2020_a_p: null, arg_innov2020_b_p: null, pncti2030_p: 0.48, ley_fin_p: 0.39 },
    { year: 2025, i_d_total: null, i_d_publica: null, arg_innov2020_a_t: null, arg_innov2020_b_t: null, pncti2030_t: 0.85, arg_innov2020_a_p: null, arg_innov2020_b_p: null, pncti2030_p: 0.52, ley_fin_p: 0.45 },
    { year: 2026, i_d_total: null, i_d_publica: null, arg_innov2020_a_t: null, arg_innov2020_b_t: null, pncti2030_t: 1.02, arg_innov2020_a_p: null, arg_innov2020_b_p: null, pncti2030_p: 0.62, ley_fin_p: 0.52 },
    { year: 2027, i_d_total: null, i_d_publica: null, arg_innov2020_a_t: null, arg_innov2020_b_t: null, pncti2030_t: 1.19, arg_innov2020_a_p: null, arg_innov2020_b_p: null, pncti2030_p: 0.73, ley_fin_p: 0.59 },
    { year: 2028, i_d_total: null, i_d_publica: null, arg_innov2020_a_t: null, arg_innov2020_b_t: null, pncti2030_t: 1.36, arg_innov2020_a_p: null, arg_innov2020_b_p: null, pncti2030_p: 0.83, ley_fin_p: 0.68 },
    { year: 2029, i_d_total: null, i_d_publica: null, arg_innov2020_a_t: null, arg_innov2020_b_t: null, pncti2030_t: 1.53, arg_innov2020_a_p: null, arg_innov2020_b_p: null, pncti2030_p: 0.94, ley_fin_p: 0.78 },
    { year: 2030, i_d_total: null, i_d_publica: null, arg_innov2020_a_t: null, arg_innov2020_b_t: null, pncti2030_t: 1.70, arg_innov2020_a_p: null, arg_innov2020_b_p: null, pncti2030_p: 1.04, ley_fin_p: 0.90 },
    { year: 2031, i_d_total: null, i_d_publica: null, arg_innov2020_a_t: null, arg_innov2020_b_t: null, pncti2030_t: null, arg_innov2020_a_p: null, arg_innov2020_b_p: null, pncti2030_p: null, ley_fin_p: 0.95 },
    { year: 2032, i_d_total: null, i_d_publica: null, arg_innov2020_a_t: null, arg_innov2020_b_t: null, pncti2030_t: null, arg_innov2020_a_p: null, arg_innov2020_b_p: null, pncti2030_p: null, ley_fin_p: 1.00 }
  ];

  const charts = [
    {
      number: '2.1',
      type: 'image',
      src: '/Grafico_2_1.png',
      title: 'Organigrama funcional de la estructura centralizada de la SECyT (2002-2007) y el MINCyT (2007-2023)',
      note: 'En tonos de azules las incorporaciones y jerarquizaciones de áreas de gestión, en tonos de grises las áreas sin cambios entre etapas. Elaboración propia en base a Boletín Oficial e Infoleg.'
    },
    {
      number: '2.2',
      type: 'powerbi-simple',
      token: powerBiToken2_2,
      title: 'Inversión anual en I+D como porcentaje del producto bruto interno, a nivel nacional e internacional (1996-2023)',
      note: '2.2a: Inversión en I+D de Argentina (1996-2023) agregada (línea continua negra) y desagregada entre sector público y privado (líneas de puntos naranja y azul). 2.2b: Inversión en I+D comparada entre países seleccionados (2000-2020). Elaboración propia en base a datos del Banco Mundial, OCDE y anuarios estadísticos CyT.'
    },
    {
      number: '2.3',
      type: 'line',
      data: chartData2_3,
      yKeys: [
        { key: 'i_d_total', name: 'I+D (total) - Ejecución', color: '#000000' },
        { key: 'i_d_publica', name: 'I+D (pública) - Ejecución', color: '#6b7280' },
        { key: 'arg_innov2020_a_t', name: 'Arg Innov 2020 A (total)', color: '#0284c7' },
        { key: 'arg_innov2020_b_t', name: 'Arg Innov 2020 B (total)', color: '#22d3ee' },
        { key: 'pncti2030_t', name: 'PNCTI 2030 (total)', color: '#2563eb' },
        { key: 'arg_innov2020_a_p', name: 'Arg Innov 2020 A (pública)', color: '#06b6d4' },
        { key: 'arg_innov2020_b_p', name: 'Arg Innov 2020 B (pública)', color: '#67e8f9' },
        { key: 'pncti2030_p', name: 'PNCTI 2030 (pública)', color: '#3b82f6' },
        { key: 'ley_fin_p', name: 'Ley Financiamiento (pública)', color: '#ef4444' }
      ],
      title: 'Proyección de inversión en I+D total y pública vs inversión ejecutada (como porcentaje del PBI, 2007-2032)',
      note: 'En líneas continuas, ejecución de I+D total e I+D pública (2007-2023). En líneas punteadas, proyecciones del PNCTI 2020 (2011-2020), PNCTI 2030 (2020-2030) y Ley de Financiamiento CTI (2021-2032). Elaboración propia en base a Banco Mundial, MINCyT (2012 y 2022) y Ley 27614.'
    },
    {
      number: '2.4',
      type: 'image',
      src: '/Grafico_2_4.jpg',
      title: 'Formulación de demandas de conocimiento en los planes sectoriales de ciencia y tecnología (2003-2023)',
      note: 'Elaboración propia en base a SECyT, 2006 y MINCyT 2012 y 2022.'
    },
    {
      number: '2.5',
      type: 'powerbi',
      reportSectionId: 'ReportSection71c683925a7020470a40',
      token: powerBiToken,
      title: 'Panel de ejecución real de organismos seleccionados (CONICET, Agencia y MINCyT) sobre Función CyTA y sobre conceptos programáticos seleccionados',
      note: '2.5a: Participación de organismos sobre porcentaje total de gastos de la Función CyTA. 2.5b: Participación relativa de cada organismo por administración presidencial, a valores constantes en pesos de 2008. 2.5c: Participación de organismos sobre conceptos programáticos seleccionados de la Función CyTA (Formación de RRHH, Actividades centrales y comunes, Financiamiento CyT). Elaboración propia en base a partidas de ejecución presupuestaria. *Gastos de Agencia distinguidos a partir de clasificación programática.'
    },
    {
      number: '2.6',
      type: 'powerbi',
      reportSectionId: 'ReportSection1db25803753b7bc63c19',
      token: powerBiToken,
      title: 'Panel de ejecución real del concepto programático Formación de Recursos Humanos de la Función CyTA (2008-2023)',
      note: '2.6a: Participación porcentual por Inciso y entidad sobre el concepto programático (Becas desagregadas). 2.6b: Evolución anual de la inversión en Gastos en Personal y Becas, a valores reales de 2008. Elaboración propia en base a partidas de ejecución presupuestaria.'
    },
    {
      number: '2.7',
      type: 'powerbi',
      reportSectionId: 'ReportSection7ed6f0c26178b7285442',
      token: powerBiToken,
      title: 'Panel de evolución de los Gastos en Personal y Becas del concepto programático Formación de Recursos Humanos y de cantidad de personal de CONICET (2008-2023)',
      note: '2.7a: Evolución de Gastos en Personal y de personal de la Carrera de Investigador CyT de CONICET. 2.7b: Evolución de Gastos en Becas y de becarios de CONICET. Montos valores constantes de 2008. Elaboración propia en base a partidas de ejecución presupuestaria, CONICET, 2021, 2022 y 2023 y Fischer et al, 2022.'
    },
    {
      number: '2.8',
      type: 'powerbi',
      reportSectionId: 'ReportSectione53d9cba0f4eb71b0fd1',
      token: powerBiToken,
      title: 'Panel de ejecución real del concepto programático Financiamiento CyT de la Función CyTA, por entidad (2009-2023)',
      note: '2.8a: Participación porcentual de organismos sobre el total del concepto programático. 2.8b: Participación anual de cada organismo (a valores constantes de 2008). 2.8c: Participación porcentual de fuentes de financiamiento por organismo seleccionado. Elaboración propia en base a partidas de ejecución presupuestaria. *Gastos de Agencia distinguidos a partir de clasificación programática.'
    },
    {
      number: '2.9',
      type: 'powerbi',
      reportSectionId: 'ReportSectionc906e96876ace1b861ca',
      token: powerBiToken,
      title: 'Participación de estructuras organizativas y actividades sobre ejecución presupuestaria del MINCyT en Financiamiento CyT (2009-2023)',
      note: '2.9a: Participación anual de estructuras organizativas, a valores constantes de 2008. 2.9b: Participación porcentual total por estructura organizativa y actividad. Elaboración propia en base a partidas de ejecución presupuestaria.'
    },
    {
      number: '2.10',
      type: 'powerbi',
      reportSectionId: 'ReportSection15134c4108fb338dfd15',
      token: powerBiToken,
      title: 'Panel de participación de estructuras organizativas y actividades sobre ejecución presupuestaria centralizada del MINCyT (Actividades centrales y comunes, 2009-2023)',
      note: '2.10a: Participación anual de estructuras organizativas a valores constantes de 2008. 2.10b: Participación porcentual total por estructura organizativa y actividad. Elaboración propia en base a partidas de ejecución presupuestaria.'
    }
  ];

  const handleBack = () => {
    window.location.href = '/';
  };

  const handlePrev = () => {
    window.location.href = '/cap1';
  };

  const handleNext = () => {
    window.location.href = '/cap3';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-purple-600 text-white py-8 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Capítulo 2</h1>
            <p className="text-purple-100 mt-2">Apuestas y agenda del MINCyT</p>
          </div>
          <button
            onClick={handleBack}
            className="bg-purple-700 hover:bg-purple-800 px-6 py-2 rounded-lg font-semibold transition"
          >
            ↑ Inicio
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          {charts.map((chart) => (
            <section
              key={chart.number}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-8"
            >
              {/* Chart Container */}
              <div className="mb-6">
                {chart.type === 'powerbi' ? (
                  <div style={{ aspectRatio: '1280 / 720', width: '100%' }}>
                    <iframe
                      title={`Gráfico ${chart.number}`}
                      width="100%"
                      height="100%"
                      src={`https://app.powerbi.com/view?r=${chart.token}&pageName=${chart.reportSectionId}`}
                      frameBorder="0"
                      allowFullScreen={true}
                      style={{ display: 'block', width: '100%', height: '100%' }}
                    />
                  </div>
                ) : chart.type === 'powerbi-simple' ? (
                  <div style={{ aspectRatio: '1280 / 720', width: '100%' }}>
                    <iframe
                      title={`Gráfico ${chart.number}`}
                      width="100%"
                      height="100%"
                      src={`https://app.powerbi.com/view?r=${chart.token}`}
                      frameBorder="0"
                      allowFullScreen={true}
                      style={{ display: 'block', width: '100%', height: '100%' }}
                    />
                  </div>
                ) : chart.type === 'line' ? (
                  <SimpleLineChart
                    data={chart.data}
                    xKey="year"
                    yKeys={chart.yKeys}
                    title=""
                    xTitle="Año"
                    yTitles="Porcentaje del PBI (%)"
                    height={500}
                  />
                ) : (
                  <div className="w-full">
                    <img
                      src={chart.src}
                      alt={chart.title}
                      className="w-full h-auto rounded-lg shadow-sm"
                    />
                  </div>
                )}
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">
                Gráfico {chart.number}. {chart.title}
              </h2>

              {/* Note */}
              <div className="bg-gray-50 p-4 rounded-md border-l-4 border-purple-400 mt-4">
                <p className="text-gray-700 text-sm italic">{chart.note}</p>
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Navigation Section */}
      <nav className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Inicio
            </button>

            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                ← Capítulo 1
              </button>

              <button
                onClick={handleNext}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Capítulo 3 →
              </button>
            </div>
          </div>
        </div>
      </nav>
    
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