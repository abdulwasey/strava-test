'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { format } from 'date-fns'
import { GlassCard } from '@/components/ui/glass-card'
import { mockRuns } from '@/lib/data/mock-runs'

export function WeeklyDistanceChart() {
  const chartData = mockRuns.map(run => ({
    date: format(run.date, 'EEE'),
    distance: run.distance,
    calories: run.calories,
  }))

  return (
    <GlassCard size="default">
      <h3 className="text-lg font-semibold mb-4">Weekly Distance Progress</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="distanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} />
            <XAxis 
              dataKey="date" 
              stroke="#6b7280"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#6b7280"
              style={{ fontSize: '12px' }}
              label={{ value: 'Distance (km)', angle: -90, position: 'insideLeft', style: { fontSize: '12px' } }}
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
            />
            <Area
              type="monotone"
              dataKey="distance"
              stroke="#f97316"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#distanceGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  )
}