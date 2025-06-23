'use client'

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts'
import { GlassCard } from '@/components/ui/glass-card'

const ZONE_COLORS = {
  'Zone 1': '#fde68a', // Warm up
  'Zone 2': '#fbbf24', // Easy
  'Zone 3': '#f59e0b', // Aerobic
  'Zone 4': '#f97316', // Threshold
  'Zone 5': '#ea580c', // Maximum
}

const data = [
  { name: 'Zone 1', value: 15, description: 'Warm up (50-60%)' },
  { name: 'Zone 2', value: 35, description: 'Easy (60-70%)' },
  { name: 'Zone 3', value: 30, description: 'Aerobic (70-80%)' },
  { name: 'Zone 4', value: 15, description: 'Threshold (80-90%)' },
  { name: 'Zone 5', value: 5, description: 'Maximum (90-100%)' },
]

export function HeartRateZonesChart() {
  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ payload: typeof data[0] }> }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="glass rounded-lg p-3">
          <p className="font-semibold">{data.name}</p>
          <p className="text-sm text-gray-600">{data.description}</p>
          <p className="text-sm font-medium">{data.value}% of time</p>
        </div>
      )
    }
    return null
  }

  const renderCustomLabel = (props: {
    cx?: number
    cy?: number
    midAngle?: number
    innerRadius?: number
    outerRadius?: number
    percent?: number
  }) => {
    const { cx = 0, cy = 0, midAngle = 0, innerRadius = 0, outerRadius = 0, percent = 0 } = props
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180)
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180)

    if (percent < 0.05) return null

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="text-xs font-medium"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <GlassCard size="default">
      <h3 className="text-lg font-semibold mb-4">Heart Rate Zones Distribution</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={ZONE_COLORS[entry.name as keyof typeof ZONE_COLORS]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value: string) => {
                const zone = data.find(d => d.name === value)
                return zone ? `${value} (${zone.value}%)` : value
              }}
              wrapperStyle={{ fontSize: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  )
}