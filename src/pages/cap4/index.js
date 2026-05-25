import React, { useState } from 'react';

export default function Cap4Page() {
  const [kumuLoaded, setKumuLoaded] = useState({});
  const powerBiToken = 'eyJrIjoiODc3M2YyMTMtNzBiZS00OTY5LTlmMGUtYTc4NzczYjAwM2MwIiwidCI6ImYyMTMzNGIwLTc1ZGUtNDY0MS04ZTU5LTNjMGU1YTdhYjc1MyIsImMiOjR9';

  const toggleKumuLoad = (chartNumber) => {
    setKumuLoaded(prev => ({ ...prev, [chartNumber]: !prev[chartNumber] }));
  };

  const charts = [
    // Gráfico 4.1
    {
      number: '4.1',
      type: 'powerbi',
      reportSectionId: 'ReportSectiondc91e121b25772ecb6ac',
      token: powerBiToken,
      title: 'Gráfico 4.1. Panel de proyectos adjudicados de la base de datos, por sendero asociativo y fondo (2004-2023)',
      note: '4.1a: Suma de proyectos adjudicados por sendero asociativo y fondo. 4.1b: Adjudicación anual de proyectos por sendero asociativo y fondo. Elaboración propia con datos de la base de datos de proyectos adjudicados.'
    },
    // Gráfico 4.2
    {
      number: '4.2',
      type: 'powerbi',
      reportSectionId: 'ReportSection8015f23c4c671a3d2313',
      token: powerBiToken,
      title: 'Gráfico 4.2. Participación relativa por área temática y mandato presidencial de las adjudicaciones financieras de Asociatividad Público-Privada (2008-2023)',
      note: 'Elaboración propia con datos de la base de datos de proyectos adjudicados.'
    },
    // Gráfico 4.3
    {
      number: '4.3',
      type: 'powerbi',
      reportSectionId: 'ReportSection6626421ad5dd9ce5959e',
      token: powerBiToken,
      title: 'Gráfico 4.3. Proyectos adjudicados de Asociatividad Público-Privada por mandato presidencial y tamaño de consorcio asociativo (2008-2023)',
      note: 'Elaboración propia con datos de la base de proyectos adjudicados.'
    },
    // Gráfico 4.4 - Kumu
    {
      number: '4.4',
      type: 'kumu',
      src: 'https://embed.kumu.io/76494c0b79f0b9c0f297937a447f55ae',
      title: 'Gráfico 4.4. Red de Asociatividad Público-Privada (2008-2023)',
      note: 'Elaboración propia con datos de la base de datos de proyectos adjudicados. Visualización interactiva disponible en: https://kumu.io/andcar/pruebasadj#fon5/fon5tam'
    },
    // Gráfico 4.5 - Imagen
    {
      number: '4.5',
      type: 'image',
      src: '/cap4_images/chart_4_5.png',
      title: 'Gráfico 4.5. Red de Asociatividad Público-Privada, destacadas organizaciones estatales y privadas (2008-2023)',
      note: '4.5a: Entidades estatales destacadas. 4.5b: Entidades privadas destacadas. Elaboración propia con datos de la base de datos de proyectos adjudicados. Visualización interactiva disponible en: https://kumu.io/andcar/pruebasadj#fon5/fon5tam'
    },
    // Gráfico 4.6 - Imagen
    {
      number: '4.6',
      type: 'image',
      src: '/cap4_images/chart_4_6.png',
      title: 'Gráfico 4.6. Red de Asociatividad Público-Privada destacada por adjudicación durante cada mandato presidencial (2008-2015)',
      note: '4.6a: Adjudicaciones 2008-2011. 4.6b: Adjudicaciones 2012-2015. Elaboración propia con datos de la base de datos de proyectos adjudicados. Visualización interactiva disponible en: https://kumu.io/andcar/pruebasadj#fon5/fon5tam'
    },
    // Gráfico 4.7 - Imagen
    {
      number: '4.7',
      type: 'image',
      src: '/cap4_images/chart_4_7.png',
      title: 'Gráfico 4.7. Red de Asociatividad Público-Privada destacada por adjudicación durante cada mandato presidencial (2016-2023)',
      note: '4.7a: Adjudicaciones 2016-2019. 4.7b: Adjudicaciones 2020-2023. Elaboración propia con datos de la base de datos de proyectos adjudicados. Visualización interactiva disponible en: https://kumu.io/andcar/pruebasadj#fon5/fon5tam'
    },
    // Gráfico 4.8 - Imagen
    {
      number: '4.8',
      type: 'image',
      src: '/cap4_images/chart_4_8.png',
      title: 'Gráfico 4.8. Red de Asociatividad Público-Privada destacada por área temática (2008-2023)',
      note: 'Elaboración propia con datos de la base de datos de proyectos adjudicados. Visualización interactiva disponible en: https://kumu.io/andcar/pruebasadj#fon5/fon5tam'
    },
    // Gráfico 4.9
    {
      number: '4.9',
      type: 'powerbi',
      reportSectionId: 'ReportSection585659f61d00494439c7',
      token: powerBiToken,
      title: 'Gráfico 4.9. Panel de participación relativa en adjudicaciones por instrumento de Articulación de la Demanda Estatal (2008-2023)',
      note: '4.9a: Cantidad de proyectos adjudicados por instrumento. 4.9b: Participación relativa sobre adjudicaciones financieras por instrumento y mandato presidencial. Elaboración propia con datos de la base de proyectos adjudicados.'
    },
    // Gráfico 4.10
    {
      number: '4.10',
      type: 'powerbi',
      reportSectionId: 'ReportSection9f787217514b282413c9',
      token: powerBiToken,
      title: 'Gráfico 4.10. Participación relativa de áreas temáticas e instrumentos en las adjudicaciones financieras de Articulación de la Demanda Estatal (2008-2023)',
      note: 'Elaboración propia con datos de la base de proyectos adjudicados.'
    },
    // Gráfico 4.11
    {
      number: '4.11',
      type: 'powerbi',
      reportSectionId: 'ReportSection12a998e0d90573e3ddd6',
      token: powerBiToken,
      title: 'Gráfico 4.11. Consorcios conformados por la red de Articulación de la Demanda Estatal (por año y tipo de consorcio, 2008-2023)',
      note: 'Elaboración propia con datos de la base de proyectos adjudicados.'
    },
    // Gráfico 4.12 - Kumu
    {
      number: '4.12',
      type: 'kumu',
      src: 'https://embed.kumu.io/7b061058b05781d14b86e0384a471769',
      title: 'Gráfico 4.12. Red de Articulación de la Demanda Estatal (2008-2023)',
      note: 'Elaboración propia con datos de la base de datos de proyectos adjudicados. Visualización interactiva disponible en: https://kumu.io/andcar/pruebasadj#est5'
    },
    // Gráfico 4.13 - Imagen
    {
      number: '4.13',
      type: 'image',
      src: '/cap4_images/chart_4_13.png',
      title: 'Gráfico 4.13. Red de Articulación de la Demanda Estatal destacada por adjudicación durante cada mandato presidencial (2008-2015)',
      note: '4.13a: Adjudicaciones 2008-2011. 4.13b: Adjudicaciones 2012-2015. Elaboración propia con datos de la base de datos de proyectos adjudicados. Visualización interactiva disponible en: https://kumu.io/andcar/pruebasadj#est5'
    },
    // Gráfico 4.14 - Imagen
    {
      number: '4.14',
      type: 'image',
      src: '/cap4_images/chart_4_14.png',
      title: 'Gráfico 4.14. Red de Articulación de la Demanda Estatal destacada por adjudicación durante cada mandato presidencial (2016-2023)',
      note: '4.14a: Adjudicaciones 2016-2019. 4.14b: Adjudicaciones 2020-2023. Elaboración propia con datos de la base de datos de proyectos adjudicados. Visualización interactiva disponible en: https://kumu.io/andcar/pruebasadj#est5'
    },
    // Gráfico 4.15 - Imagen
    {
      number: '4.15',
      type: 'image',
      src: '/cap4_images/chart_4_15.png',
      title: 'Gráfico 4.15. Red de Articulación de la Demanda Estatal destacada por instrumentos adjudicados, paradigma poscompetitivo (2008-2023)',
      note: 'Elaboración propia con datos de la base de datos de proyectos adjudicados. Visualización interactiva disponible en: https://kumu.io/andcar/pruebasadj#est5'
    },
    // Gráfico 4.16 - Imagen
    {
      number: '4.16',
      type: 'image',
      src: '/cap4_images/chart_4_16.png',
      title: 'Gráfico 4.16. Red de Articulación de la Demanda Estatal destacada por instrumentos adjudicados, paradigma competitivo (2008-2023)',
      note: 'Elaboración propia con datos de la base de datos de proyectos adjudicados. Visualización interactiva disponible en: https://kumu.io/andcar/pruebasadj#est5'
    },
    // Gráfico 4.17
    {
      number: '4.17',
      type: 'powerbi',
      reportSectionId: 'ReportSection4fe984c4490c891355e2',
      token: powerBiToken,
      title: 'Gráfico 4.17. Panel de participación relativa en adjudicaciones por instrumento',
      note: '4.17a: Cantidad de proyectos adjudicados por instrumento. 4.17b: Participación anual relativa sobre adjudicaciones financieras por instrumento (a valores constantes de 2008). Elaboración propia con datos de la base de proyectos adjudicados.'
    },
    // Gráfico 4.18
    {
      number: '4.18',
      type: 'powerbi',
      reportSectionId: 'ReportSection6d4fee2125dbb9c0dc0d',
      token: powerBiToken,
      title: 'Gráfico 4.18. Participación relativa por área temática y mandato presidencial de las adjudicaciones financieras de Innovación comunitaria y socioinclusiva (2008-2023)',
      note: 'Elaboración propia con datos de la base de proyectos adjudicados.'
    },
    // Gráfico 4.19
    {
      number: '4.19',
      type: 'powerbi',
      reportSectionId: 'ReportSection07a1a9387185d0b8bb90',
      token: powerBiToken,
      title: 'Gráfico 4.19. Consorcios conformados por la red de Innovación Comunitaria y Socioinclusiva (2008-2023)',
      note: 'Elaboración propia con datos de la base de proyectos adjudicados.'
    },
    // Gráfico 4.20 - Kumu
    {
      number: '4.20',
      type: 'kumu',
      src: 'https://embed.kumu.io/9c446cc4ec0c44452a6038e77a328594',
      title: 'Gráfico 4.20. Red de Innovación Comunitaria y Socioinclusiva (2008-2023)',
      note: 'Elaboración propia con datos de la base de datos de proyectos adjudicados. Visualización interactiva disponible en: https://kumu.io/andcar/pruebasadj#com5'
    },
    // Gráfico 4.21 - Imagen
    {
      number: '4.21',
      type: 'image',
      src: '/cap4_images/chart_4_21.png',
      title: 'Gráfico 4.21. Red de Innovación Comunitaria y Socioinclusiva destacada por adjudicación durante cada mandato presidencial (2008-2015)',
      note: '4.21a: Adjudicaciones 2008-2011. 4.21b: Adjudicaciones 2012-2015. Elaboración propia con datos de la base de datos de proyectos adjudicados. Visualización interactiva disponible en: https://kumu.io/andcar/pruebasadj#com5'
    },
    // Gráfico 4.22 - Imagen
    {
      number: '4.22',
      type: 'image',
      src: '/cap4_images/chart_4_22.png',
      title: 'Gráfico 4.22. Red de Innovación Comunitaria y Socioinclusiva destacada por adjudicación durante cada mandato presidencial (2016-2023)',
      note: '4.22a: Adjudicaciones 2016-2019. 4.22b: Adjudicaciones 2020-2023. Elaboración propia con datos de la base de datos de proyectos adjudicados. Visualización interactiva disponible en: https://kumu.io/andcar/pruebasadj#com5'
    },
    // Gráfico 4.23 - Imagen
    {
      number: '4.23',
      type: 'image',
      src: '/cap4_images/chart_4_23.png',
      title: 'Gráfico 4.23. Red de Innovación Comunitaria y Socioinclusiva destacada por área temática (Desarrollo productivo; Ambiente y hábitat social, 2008-2023)',
      note: 'Elaboración propia con datos de la base de datos de proyectos adjudicados. Visualización interactiva disponible en: https://kumu.io/andcar/pruebasadj#com5'
    },
    // Gráfico 4.24 - Imagen
    {
      number: '4.24',
      type: 'image',
      src: '/cap4_images/chart_4_24.png',
      title: 'Gráfico 4.24. Red de Innovación Comunitaria y Socioinclusiva destacada por área temática (Agricultura familiar; Salud y discapacidad, 2008-2023)',
      note: 'Elaboración propia con datos de la base de datos de proyectos adjudicados. Visualización interactiva disponible en: https://kumu.io/andcar/pruebasadj#com5'
    },
    // Gráfico 4.25
    {
      number: '4.25',
      type: 'powerbi',
      reportSectionId: 'ReportSection6860188c54a4e0dfe36d',
      token: powerBiToken,
      title: 'Gráfico 4.25. Participación porcentual sobre montos financieros adjudicados a entidades comunitarias, por tipo de entidad y fondo (2008-2023)',
      note: 'Elaboración propia con datos de la base de proyectos adjudicados. *Estimación en base a la cantidad de entidades involucradas por cada consorcio asociativo. Para más detalles, ver anexo técnico-metodológico.'
    },
    // Gráfico 4.26
    {
      number: '4.26',
      type: 'powerbi',
      reportSectionId: 'ReportSection293595c62379bce0c066',
      token: powerBiToken,
      title: 'Gráfico 4.26. Participación porcentual sobre montos financieros adjudicados a entidades públicas, por tipo de entidad y fondo (2008-2023)',
      note: 'Elaboración propia con datos de la base de proyectos adjudicados. *Estimación en base a la cantidad de entidades involucradas por cada consorcio asociativo. Para más detalles, ver anexo técnico-metodológico.'
    },
    // Gráfico 4.27
    {
      number: '4.27',
      type: 'powerbi',
      reportSectionId: 'ReportSection001ffbba49bf8f26b4a6',
      token: powerBiToken,
      title: 'Gráfico 4.27. Panel de consorcios asociativos por tamaño, según cantidad de proyectos y de montos financieros adjudicados (2008-2023)',
      note: '4.27a: Cantidad de proyectos adjudicados por tipo de consorcio y cantidad de integrantes. 4.27b: Adjudicaciones financieras por tipo de consorcio y cantidad de integrantes (a valores constantes de 2008). Elaboración propia con datos de la base de proyectos adjudicados.'
    },
    // Gráfico 4.28 - Kumu
    {
      number: '4.28',
      type: 'kumu',
      src: 'https://embed.kumu.io/bb00d433a92811344ab0f3b452da18cf',
      title: 'Gráfico 4.28. Red común a los tres senderos asociativos (2008-2023)',
      note: 'Elaboración propia con datos de la base de datos de proyectos adjudicados. Visualización interactiva disponible en: https://kumu.io/andcar/pruebasadj#tot5'
    },
    // Gráfico 4.29 - Kumu
    {
      number: '4.29',
      type: 'kumu',
      src: 'https://embed.kumu.io/fb536029938812d272deb2af93f57fed',
      title: 'Gráfico 4.29. Red común a los tres senderos asociativos, por comunidad (2008-2023)',
      note: 'Elaboración propia con datos de la base de datos de proyectos adjudicados. Visualización interactiva disponible en: https://kumu.io/andcar/pruebasadj#tot5/colorcom'
    }
  ];

  const handleBack = () => {
    window.location.href = '/';
  };

  const handlePrev = () => {
    window.location.href = '/cap3';
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-cyan-50 to-white">
      {/* Header */}
      <header className="bg-teal-600 text-white py-8 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Capítulo 4</h1>
            <p className="text-teal-100">Redes asociativas movilizadas</p>
          </div>
          <button
            onClick={handleBack}
            className="bg-teal-700 hover:bg-teal-800 px-6 py-2 rounded-lg font-semibold transition"
          >
            ↑ Inicio
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introducción */}
        <div className="mb-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-4 text-teal-700">
            Capítulo 4: Análisis de Redes Asociativas en Proyectos Adjudicados
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            El objetivo de este último capítulo es reponer algunas de las vías abiertas por la ejecución de políticas CTI orientadas. Para ello, se trazan tres itinerarios asociativos, a través del análisis de proyectos adjudicados por instrumentos promocionales. Los senderos trazados por el MINCyT y sus dependencias canalizaron alianzas tales como la asociación público-privada, la articulación de la demanda estatal o la innovación comunitaria y socioinclusiva. Se muestra que, paradójicamente, las capacidades e instituciones CTI —un recurso público al servicio del conjunto social— fueron simultáneamente monopolizadas por unos pocos que accedieron a ellos, y universalizados en variados formatos a través de fondos disponibles para quienes los solicitaran.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Aquí se trata, por tanto, de reponer lógicas de acción e interacción movilizadas en alianzas de actores que intercambian recursos e información en función de dinámicas colaborativas (Thomas y Dagnino, 2005, hablan de un “tejido de relaciones”). Buscamos delinear el modo en que evolucionaron esos entramados, a través de sucesivos posicionamientos estatales para elaborar dispositivos CyT que den respuesta a las demandas sociales, productivas y de conocimiento.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Las políticas orientadas en este capítulo toman una escala que va de lo meso a lo micro, en contraste con el plano macro-meso del recorrido previo, y se privilegia la primera etapa de ejecución del instrumental (adjudicación), en contraste con el lugar destacado para el diseño, análisis de la agenda y desafíos de gestión de los capítulos anteriores. Los tres itinerarios del capítulo pueden pensarse como vías o alternativas para el abordaje del primer desafío de gestión del MINCyT, presentado en el segundo capítulo y dilucidada su operativización en el tercero. Para ello, tomamos la trayectoria de un conjunto más acotado de fondos e instrumentos, indagando el modo en que a través de ellos se involucran actores sociales variados como demandantes de conocimiento y beneficiarios de fondos. Se busca así iluminar las lógicas que dieron cuerpo a la promoción orientada a partir de “experiencias locales significativas”, con distintos grados de relevancia según su intensidad y extensión (tomamos esta expresión de Thomas et al, 2013b).
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Antes de desplegar el análisis propiamente dicho, se presenta la base de datos de proyectos adjudicados, la selección de instrumentos realizada, la propuesta que sustenta a los senderos asociativos planteados, el marco teórico de redes políticas y las técnicas de análisis de redes sociales utilizadas. Luego, la primera lógica a reponer es la red de asociatividad público-privada que surge de los Fondos Sectoriales y Proyectos Estratégicos gestionados por la Agencia  a través del FONARSEC. Son las experiencias de mayor alcance dentro del instrumental focalizado, dirigidas a dar impulso a la innovación productiva en alianza con el empresariado privado. En segundo lugar, se repone la red construida con otros actores públicos (ministerios, provincias, municipios) para la resolución de demandas sociales. Para ello se consideran tanto instrumentos gestionados por el COFECyT como la breve experiencia del IMPACT.AR, desarrollada por la Secretaría de Articulación entre 2021 y 2023. En tercer lugar, se abordan las estrategias desarrolladas con organizaciones comunitarias para la resolución de demandas sociales a través de la generación de una agenda de innovación socioinclusiva. Este sendero recoge la experiencia del Programa Nacional de Tecnologías para la Inclusión Social (PNTIS), que con menor despliegue que las otras dos vías, se trata de una iniciativa que expresa una lógica alternativa a la estatal y mercantil. Antes de pasar a las reflexiones finales, el capítulo elabora algunas ideas generales resultantes de condensar el entramado asociativo del conjunto de los instrumentos destacados en una trama común.
          </p>
        </div>

        {/* Gráficos */}
        <div className="space-y-12">
          {charts.map((chart) => (
            <section key={chart.number} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              {/* Gráfico */}
              <div className="p-6">
                {chart.type === 'powerbi' && (
                  <iframe
                    title={`Gráfico ${chart.number}`}
                    width="100%"
                    style={{ aspectRatio: '1280 / 720' }}
                    src={`https://app.powerbi.com/view?r=${chart.token}&pageName=${chart.reportSectionId}`}
                    frameBorder="0"
                    allowFullScreen={true}
                  />
                )}
                {chart.type === 'kumu' && (
                  kumuLoaded[chart.number] ? (
                    <iframe
                      src={chart.src}
                      width="100%"
                      height="600"
                      frameBorder="0"
                      style={{ borderRadius: '8px' }}
                    />
                  ) : (
                    <button
                      onClick={() => toggleKumuLoad(chart.number)}
                      className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-6 rounded-lg font-semibold transition duration-200 text-lg shadow-md hover:shadow-lg flex items-center justify-center"
                      style={{ height: '600px' }}
                    >
                      Clic para cargar visualización interactiva
                    </button>
                  )
                )}
                {chart.type === 'image' && (
                  <img
                    src={chart.src}
                    alt={`Gráfico ${chart.number}`}
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </div>

              {/* Título y Nota */}
              <div className="px-6 pb-6">
                <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
                  {chart.title}
                </h2>
                <div className="bg-gray-50 p-4 rounded mt-4 text-gray-700 text-sm border-l-4 border-teal-300">
                  {chart.note}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Navegación */}
        <div className="mt-16 flex justify-between items-center">
          <button
            onClick={handlePrev}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
          >
            ← Capítulo 3
          </button>
          <button
            onClick={handleBack}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            ↑ Inicio
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-teal-700 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-teal-100">
            Sitio Tesis MINCYT • Visualización de Políticas de Ciencia y Tecnología Argentina
          </p>
          <p className="text-sm text-teal-200 mt-2">
            Elaboración propia con datos de la base de proyectos adjudicados del MINCyT
          </p>
        </div>
      </footer>
    </div>
  );
}
