'use client';

import React from 'react';

export default function SimpleLineChart({ data, xKey, yKeys, title, xTitle, yTitles, height = 600 }) {
  const [hoveredPoint, setHoveredPoint] = React.useState(null);
  const [tooltipPos, setTooltipPos] = React.useState({ x: 0, y: 0 });

  if (!data || data.length === 0) {
    return <div className="p-4 text-gray-500">No hay datos disponibles</div>;
  }

  // Dimensiones del gráfico - leyenda abajo
  const width = 1000;
  const legendHeight = 0; // Espacio para la leyenda en la parte inferior
  const margin = { top: 40, right: 40, bottom: 80 + legendHeight, left: 80 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom + legendHeight;

  // Obtener valores de X y encontrar rango de Y
  const xValues = data.map(d => d[xKey]);
  let minY = Infinity,
    maxY = -Infinity;
  yKeys.forEach(yConfig => {
    data.forEach(d => {
      const val = d[yConfig.key];
      if (val !== null && val !== undefined) {
        minY = Math.min(minY, val);
        maxY = Math.max(maxY, val);
      }
    });
  });

  const yPadding = (maxY - minY) * 0.1;
  const yMin = Math.max(0, minY - yPadding);
  const yMax = maxY + yPadding;

  // Funciones de escala
  const xScale = (val) => {
    const index = xValues.indexOf(val);
    return margin.left + (index / (xValues.length - 1)) * plotWidth;
  };

  const yScale = (val) => {
    return margin.top + (plotHeight - legendHeight) - ((val - yMin) / (yMax - yMin)) * (plotHeight - legendHeight);
  };

  // Generar puntos para cada serie
  const generatePath = (yConfig) => {
    let path = '';
    data.forEach((d, i) => {
      const val = d[yConfig.key];
      if (val !== null && val !== undefined) {
        const x = xScale(d[xKey]);
        const y = yScale(val);
        path += (i === 0 || data[i - 1][yConfig.key] === null ? `M ${x} ${y}` : ` L ${x} ${y}`);
      }
    });
    return path;
  };

  // Determinar si una línea es de proyección o ejecución
  const isProjection = (key) => {
    return key.includes('arg_innov') || key.includes('pncti2030') || key.includes('ley_fin');
  };

  const handlePointHover = (year, seriesName, value, e) => {
    setHoveredPoint({ year, seriesName, value });
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({ 
      x: rect.left + window.scrollX, 
      y: rect.top + window.scrollY - 30 
    });
  };

  const handlePointLeave = () => {
    setHoveredPoint(null);
  };

  const svgHeight = height + legendHeight;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      {hoveredPoint && (
        <div 
          className="absolute bg-gray-800 text-white px-3 py-2 rounded text-sm z-50 whitespace-nowrap"
          style={{
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y}px`,
            pointerEvents: 'none'
          }}
        >
          <div className="font-semibold">{hoveredPoint.year}</div>
          <div>{hoveredPoint.seriesName}</div>
          <div className="text-yellow-300">{hoveredPoint.value.toFixed(2)}%</div>
        </div>
      )}
      <div className="overflow-x-auto">
        <svg 
          width={width} 
          height={svgHeight} 
          viewBox={`0 0 ${width} ${svgHeight}`}
          style={{ fontFamily: 'Arial, sans-serif', minWidth: '100%' }}
        >
        {/* Eje X */}
        <line
          x1={margin.left}
          y1={margin.top + plotHeight - legendHeight}
          x2={margin.left + plotWidth}
          y2={margin.top + plotHeight - legendHeight}
          stroke="#d1d5db"
          strokeWidth="2"
        />

        {/* Eje Y */}
        <line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={margin.top + plotHeight - legendHeight}
          stroke="#d1d5db"
          strokeWidth="2"
        />

        {/* Líneas de cuadrícula Y */}
        {Array.from({ length: 5 }).map((_, i) => {
          const y = yMin + ((yMax - yMin) / 4) * i;
          return (
            <g key={`grid-${i}`}>
              <line
                x1={margin.left}
                y1={yScale(y)}
                x2={margin.left + plotWidth}
                y2={yScale(y)}
                stroke="#f3f4f6"
                strokeWidth="1"
              />
              <text
                x={margin.left - 10}
                y={yScale(y) + 4}
                textAnchor="end"
                fontSize="11"
                fill="#6b7280"
              >
                {y.toFixed(2)}%
              </text>
            </g>
          );
        })}

        {/* Etiquetas X */}
        {xValues.map((year, i) => {
          if (i % 2 === 0) {
            return (
              <g key={`label-${year}`}>
                <text
                  x={xScale(year)}
                  y={margin.top + plotHeight - legendHeight + 12}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#6b7280"
                >
                  {year}
                </text>
              </g>
            );
          }
          return null;
        })}

        {/* Líneas de datos */}
        {yKeys.map((yConfig) => (
          <path
            key={yConfig.key}
            d={generatePath(yConfig)}
            stroke={yConfig.color || '#000'}
            strokeWidth="2"
            fill="none"
            strokeDasharray={isProjection(yConfig.key) ? "5,5" : "0"}
          />
        ))}

        {/* Puntos de datos - interactivos */}
        {yKeys.map((yConfig) =>
          data.map((d, i) => {
            const val = d[yConfig.key];
            if (val !== null && val !== undefined) {
              return (
                <circle
                  key={`point-${yConfig.key}-${i}`}
                  cx={xScale(d[xKey])}
                  cy={yScale(val)}
                  r="4"
                  fill={yConfig.color || '#000'}
                  opacity="0.7"
                  style={{ cursor: 'pointer', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => handlePointHover(d[xKey], yConfig.name, val, e)}
                  onMouseLeave={handlePointLeave}
                />
              );
            }
            return null;
          })
        )}

        {/* Leyenda en la parte inferior - múltiples filas */}
        {yKeys.map((yConfig, i) => {
          const itemsPerRow = 3; // 3 items por fila
          const row = Math.floor(i / itemsPerRow);
          const col = i % itemsPerRow;
          const itemWidth = plotWidth / itemsPerRow;
          const x = margin.left + col * itemWidth + 10;
          const y = margin.top + plotHeight - legendHeight + 30 + row * 25;
          
          return (
            <g key={`legend-${yConfig.key}`}>
              <rect
                x={x}
                y={y - 12}
                width={12}
                height={12}
                fill={yConfig.color || '#000'}
                strokeDasharray={isProjection(yConfig.key) ? "3,2" : "0"}
                stroke={yConfig.color || '#000'}
              />
              <text
                x={x + 18}
                y={y}
                fontSize="11"
                fill="#374151"
              >
                {yConfig.name}
              </text>
            </g>
          );
        })}

        {/* Títulos de ejes */}
        <text
          x={margin.left + plotWidth / 2}
          y={svgHeight - 5}
          textAnchor="middle"
          fontSize="0"
          fill="#6b7280"
        >
          {xTitle}
        </text>
        <text
          x={20}
          y={margin.top + (plotHeight - legendHeight) / 2}
          textAnchor="middle"
          fontSize="12"
          fill="#6b7280"
          transform={`rotate(-90 20 ${margin.top + (plotHeight - legendHeight) / 2})`}
        >
          {yTitles}
        </text>
      </svg>
      </div>
    </div>
  );
}
