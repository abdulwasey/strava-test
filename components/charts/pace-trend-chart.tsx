'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts'
import { format } from 'date-fns'
import { GlassCard } from '@/components/ui/glass-card'
import { mockRuns } from '@/lib/data/mock-runs'

export function PaceTrendChart() {
  const chartData = mockRuns.map(run => {
    const [minutes, seconds] = run.pace.split(':').map(Number)
    const paceInSeconds = minutes * 60 + seconds
    return {
      date: format(run.date, 'MM/dd'),
      pace: paceInSeconds,
      paceDisplay: run.pace,
    }
  })

  const avgPace = Math.round(
    chartData.reduce((sum, item) => sum + item.pace, 0) / chartData.length
  )

  const formatPace = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <GlassCard size="default">
      <h3 className="text-lg font-semibold mb-4">Pace Trend</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} />
            <XAxis 
              dataKey="date" 
              stroke="#6b7280"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#6b7280"
              style={{ fontSize: '12px' }}
              tickFormatter={formatPace}
              label={{ 
                value: 'Pace (min/km)', 
                angle: -90, 
                position: 'insideLeft', 
                style: { fontSize: '12px' } 
              }}
              domain={['dataMin - 10', 'dataMax + 10']}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              }}
              labelStyle={{ color: '#1f2937', fontWeight: 'bold' }}
              formatter={(value: number) => formatPace(value)}
            />
            <ReferenceLine 
              y={avgPace} 
              stroke="#ea580c" 
              strokeDasharray="5 5"
              label={{ 
                value: `Avg: ${formatPace(avgPace)}`, 
                position: 'right',
                style: { fontSize: '12px', fill: '#ea580c' }
              }}
            />
            <Line
              type="monotone"
              dataKey="pace"
              stroke="#f97316"
              strokeWidth={3}
              dot={{ fill: '#f97316', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  )
}