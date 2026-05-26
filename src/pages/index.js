import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  const chapters = [
    {
      id: 'cap1',
      title: 'Capítulo 1. El complejo nacional y sus organismos de gobernanza',
      charts: 18,
      theme: 'from-blue-50 to-white',
      themeBorder: 'border-blue-200',
      themeButton: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      id: 'cap2',
      title: 'Capítulo 2. Apuestas y agenda del MINCyT',
      charts: 10,
      theme: 'from-purple-50 to-white',
      themeBorder: 'border-purple-200',
      themeButton: 'bg-purple-600 hover:bg-purple-700',
    },
    {
      id: 'cap3',
      title: 'Capítulo 3. Instrumentos de promoción orientada',
      charts: 7,
      theme: 'from-green-50 to-white',
      themeBorder: 'border-green-200',
      themeButton: 'bg-green-600 hover:bg-green-700',
    },
    {
      id: 'cap4',
      title: 'Capítulo 4. Redes asociativas movilizadas',
      charts: 29,
      theme: 'from-teal-50 to-cyan-50',
      themeBorder: 'border-teal-200',
      themeButton: 'bg-teal-600 hover:bg-teal-700',
    },
  ];

  return (
    <>
      <Head>
        <title>Políticas orientadas: El MINCYT y su estrategia para promover el desarrollo nacional (2007-2023)</title>
        <meta
          name="description"
          content="Sitio web para la visualización interactiva y consulta de gráficos de tesis en evaluación para obtener el título de Doctor en Ciencias Sociales y Humanas (Universidad Nacional de Quilmes)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Políticas orientadas: El MINCYT y su estrategia para promover el desarrollo nacional (2007-2023)
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Sitio web para la visualización interactiva y consulta de gráficos de tesis en evaluación para obtener el título de Doctor en Ciencias Sociales y Humanas (Universidad Nacional de Quilmes)
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Doctorando: Andrés Carbel | Director: Diego Hurtado | Co-director: Santiago Liaudat
            </p>
            
                   
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Link href="/mincyt/cap1" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Capítulo 1
              </Link>
              <Link href="/mincyt/cap2" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Capítulo 2
              </Link>
              <Link href="/mincyt/cap3" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Capítulo 3
              </Link>
              <Link href="/mincyt/cap4" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Capítulo 4
              </Link>
            </div>
          </div>
        </section>

        {/* Chapters Overview Section */}
        <section id="chapters" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Resumen general
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className={`border-2 ${chapter.themeBorder} bg-gradient-to-br ${chapter.theme} rounded-lg p-8 hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {chapter.title}
                    </h3>
                    <span className="inline-block bg-gray-100 text-gray-900 font-bold px-3 py-1 rounded-full text-lg">
                      {chapter.charts} 📊
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {chapter.description}
                  </p>
                  
                  <Link
                    href={`/mincyt/${chapter.id}`}
                    className={`inline-block ${chapter.themeButton} text-white font-semibold py-2 px-6 rounded-lg transition-colors`}
                  >
                    Explorar {chapter.id.toUpperCase()}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">64</div>
                <p className="text-gray-600">Visualizaciones Totales</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-4xl font-bold text-purple-600 mb-2">43</div>
                <p className="text-gray-600">Gráficos o paneles interactivos</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-4xl font-bold text-green-600 mb-2">4</div>
                <p className="text-gray-600">Imágenes estáticas</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-4xl font-bold text-teal-600 mb-2">5</div>
                <p className="text-gray-600">Redes sociales asociativas interactivas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sources Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Principales fuentes de datos
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <h3 className="font-semibold text-gray-900 mb-3"> Partidas de ejecución presupuestaria de la Función Ciencia y Técnica Ampliada (administración pública nacional)</h3>
                <p className="text-gray-600 mb-2">
                  http://hdl.handle.net/11336/282550
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Capítulos:</strong> 1, 2<br/>
                  <strong>Período:</strong> 1996-2023<br/>
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                <h3 className="font-semibold text-gray-900 mb-3">Instrumentos de promoción adjudicados por la Agencia I+D+i</h3>
                <p className="text-gray-600 mb-2">
                  http://hdl.handle.net/11336/282353
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Capítulo:</strong> 3<br/>
                  <strong>Período:</strong> 2008-2023<br/>
                </p>
              </div>
              
              <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-600">
                <h3 className="font-semibold text-gray-900 mb-3">Adjudicación de proyectos científicos, tecnológicos y de innovación (MINCyT y Agencia I+D+i)</h3>
                <p className="text-gray-600 mb-2">
                  http://hdl.handle.net/11336/282401
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Capítulo:</strong> 4<br/>
                  <strong>Período:</strong> 2004-2023<br/>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para explorar los datos?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/mincyt/cap1" className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors">
                Empezar por el Capítulo 1
              </Link>
              <a
                href="#chapters"
                className="inline-block bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Ver todos los capítulos
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <hr className="border-gray-800 mb-8" />
            <div className="text-center">
              <p className="font-semibold mb-1">
                Políticas orientadas: El MINCYT y su estrategia para promover el desarrollo nacional (2007-2023)
              </p>
              <p className="text-sm">
                Sitio web para la visualización interactiva y consulta de gráficos de tesis en evaluación para obtener el título de Doctor en Ciencias Sociales y Humanas (Universidad Nacional de Quilmes)
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
