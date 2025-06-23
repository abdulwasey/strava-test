import { addDays } from 'date-fns'

export interface Run {
  id: string
  date: Date
  distance: number // in km
  duration: number // in minutes
  pace: string // min/km
  avgHeartRate: number
  maxHeartRate: number
  calories: number
  elevation: number // in meters
  weather: string
  temperature: number // in celsius
  notes: string
  route: string
  timeOfDay: 'morning' | 'afternoon' | 'evening'
}

const startDate = new Date()
startDate.setDate(startDate.getDate() - 7)

export const mockRuns: Run[] = [
  {
    id: '1',
    date: startDate,
    distance: 5.2,
    duration: 28.75,
    pace: '5:32',
    avgHeartRate: 145,
    maxHeartRate: 165,
    calories: 420,
    elevation: 45,
    weather: 'Sunny',
    temperature: 18,
    notes: 'Great morning run! Felt energized throughout.',
    route: 'Park Loop',
    timeOfDay: 'morning'
  },
  {
    id: '2',
    date: addDays(startDate, 1),
    distance: 7.8,
    duration: 42.5,
    pace: '5:27',
    avgHeartRate: 148,
    maxHeartRate: 172,
    calories: 580,
    elevation: 68,
    weather: 'Cloudy',
    temperature: 15,
    notes: 'Pushed harder today. Hill training paying off.',
    route: 'River Trail',
    timeOfDay: 'evening'
  },
  {
    id: '3',
    date: addDays(startDate, 2),
    distance: 3.5,
    duration: 20.25,
    pace: '5:47',
    avgHeartRate: 138,
    maxHeartRate: 155,
    calories: 280,
    elevation: 25,
    weather: 'Light Rain',
    temperature: 12,
    notes: 'Recovery run. Took it easy.',
    route: 'Neighborhood',
    timeOfDay: 'afternoon'
  },
  {
    id: '4',
    date: addDays(startDate, 3),
    distance: 10.2,
    duration: 56.8,
    pace: '5:34',
    avgHeartRate: 152,
    maxHeartRate: 178,
    calories: 820,
    elevation: 95,
    weather: 'Partly Cloudy',
    temperature: 20,
    notes: 'Long run day. Maintained consistent pace.',
    route: 'City Circuit',
    timeOfDay: 'morning'
  },
  {
    id: '5',
    date: addDays(startDate, 5),
    distance: 6.0,
    duration: 31.5,
    pace: '5:15',
    avgHeartRate: 155,
    maxHeartRate: 175,
    calories: 490,
    elevation: 52,
    weather: 'Sunny',
    temperature: 22,
    notes: 'Tempo run. Hit all my targets!',
    route: 'Track Intervals',
    timeOfDay: 'evening'
  },
  {
    id: '6',
    date: addDays(startDate, 6),
    distance: 8.5,
    duration: 48.2,
    pace: '5:40',
    avgHeartRate: 142,
    maxHeartRate: 168,
    calories: 650,
    elevation: 78,
    weather: 'Windy',
    temperature: 16,
    notes: 'Tough conditions but pushed through.',
    route: 'Coastal Path',
    timeOfDay: 'morning'
  }
]

export const weeklyStats = {
  totalDistance: mockRuns.reduce((sum, run) => sum + run.distance, 0),
  totalDuration: mockRuns.reduce((sum, run) => sum + run.duration, 0),
  totalCalories: mockRuns.reduce((sum, run) => sum + run.calories, 0),
  avgPace: calculateAveragePace(mockRuns),
  totalElevation: mockRuns.reduce((sum, run) => sum + run.elevation, 0),
  runsCompleted: mockRuns.length,
  longestRun: Math.max(...mockRuns.map(run => run.distance)),
  avgHeartRate: Math.round(mockRuns.reduce((sum, run) => sum + run.avgHeartRate, 0) / mockRuns.length)
}

function calculateAveragePace(runs: Run[]): string {
  const totalMinutes = runs.reduce((sum, run) => sum + run.duration, 0)
  const totalDistance = runs.reduce((sum, run) => sum + run.distance, 0)
  const avgMinutesPerKm = totalMinutes / totalDistance
  const minutes = Math.floor(avgMinutesPerKm)
  const seconds = Math.round((avgMinutesPerKm - minutes) * 60)
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export const personalRecords = {
  fastestPace: '4:58',
  longestRun: 21.1,
  mostCalories: 1650,
  highestElevation: 245,
  longestStreak: 14
}

export const upcomingWorkouts = [
  {
    id: '1',
    date: addDays(new Date(), 1),
    type: 'Easy Run',
    plannedDistance: 5,
    plannedDuration: 30,
    description: 'Recovery pace, focus on form'
  },
  {
    id: '2',
    date: addDays(new Date(), 2),
    type: 'Interval Training',
    plannedDistance: 7,
    plannedDuration: 40,
    description: '6x800m at 5K pace with 2min recovery'
  },
  {
    id: '3',
    date: addDays(new Date(), 3),
    type: 'Long Run',
    plannedDistance: 15,
    plannedDuration: 85,
    description: 'Steady pace, bring hydration'
  }
]