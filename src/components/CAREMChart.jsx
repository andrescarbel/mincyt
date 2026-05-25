import React, { useState, useEffect } from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function CAREMChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 80, bottom: 20, left: 60 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis
          dataKey="year"
          tick={{ fontSize: 12 }}
          angle={-45}
          textAnchor="end"
          height={80}
        />
        <YAxis
          yAxisId="left"
          tick={{ fontSize: 12 }}
          label={{ value: 'Avance Físico Acumulado (%)', angle: -90, position: 'insideLeft', offset: 10 }}
          domain={[0, 70]}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={{ fontSize: 12 }}
          label={{ value: 'Avance Físico Anual (%)', angle: 90, position: 'insideRight', offset: 10 }}
          domain={[0, 9]}
        />
        <Tooltip
          contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
          formatter={(value) => `${value.toFixed(2)}%`}
          labelFormatter={(label) => `Año: ${label}`}
        />
        <Legend
          verticalAlign="top"
          height={36}
          wrapperStyle={{ paddingBottom: '10px' }}
        />
        <Bar
          yAxisId="left"
          dataKey="acumulado"
          fill="#8b8b8b"
          name="Porcentaje de Avance Físico Acumulado"
          radius={[4, 4, 0, 0]}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="anual"
          stroke="#ff9900"
          strokeWidth={3}
          name="Porcentaje de Avance Físico Anual"
          dot={{ fill: '#ff9900', r: 3 }}
          activeDot={{ r: 5 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
