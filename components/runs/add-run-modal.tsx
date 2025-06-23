'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { X } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'

// Form input schema - all fields are strings from form inputs
const formInputSchema = z.object({
  date: z.string().min(1, 'Date is required'),
  distance: z.string()
    .min(1, 'Distance is required')
    .regex(/^\d*\.?\d+$/, 'Must be a valid number'),
  hours: z.string().regex(/^\d*$/, 'Must be a number'),
  minutes: z.string().regex(/^\d*$/, 'Must be a number'),
  seconds: z.string().regex(/^\d*$/, 'Must be a number'),
  avgHeartRate: z.string()
    .min(1, 'Average heart rate is required')
    .regex(/^\d+$/, 'Must be a whole number'),
  maxHeartRate: z.string()
    .min(1, 'Max heart rate is required')
    .regex(/^\d+$/, 'Must be a whole number'),
  calories: z.string()
    .min(1, 'Calories are required')
    .regex(/^\d+$/, 'Must be a whole number'),
  elevation: z.string()
    .min(1, 'Elevation is required')
    .regex(/^-?\d+$/, 'Must be a whole number'),
  route: z.string().min(1, 'Route name is required').max(50, 'Route name too long'),
  weather: z.string(),
  temperature: z.string()
    .min(1, 'Temperature is required')
    .regex(/^-?\d+$/, 'Must be a whole number'),
  notes: z.string().max(500, 'Notes too long').optional(),
})

// Type for form inputs (all strings)
type FormInputData = z.infer<typeof formInputSchema>

// Type for processed data (with numbers)
type RunFormData = {
  date: string
  distance: number
  hours: number
  minutes: number
  seconds: number
  avgHeartRate: number
  maxHeartRate: number
  calories: number
  elevation: number
  route: string
  weather: string
  temperature: number
  notes?: string
}

interface AddRunModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AddRunModal({ isOpen, onClose }: AddRunModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputData>({
    resolver: zodResolver(formInputSchema),
    defaultValues: {
      date: format(new Date(), 'yyyy-MM-dd'),
      weather: 'Sunny',
      hours: '0',
      minutes: '0',
      seconds: '0',
    },
  })

  const onSubmit = async (data: FormInputData) => {
    setIsSubmitting(true)
    
    // Transform string inputs to numbers
    const processedData: RunFormData = {
      ...data,
      distance: parseFloat(data.distance),
      hours: parseInt(data.hours) || 0,
      minutes: parseInt(data.minutes) || 0,
      seconds: parseInt(data.seconds) || 0,
      avgHeartRate: parseInt(data.avgHeartRate),
      maxHeartRate: parseInt(data.maxHeartRate),
      calories: parseInt(data.calories),
      elevation: parseInt(data.elevation),
      temperature: parseInt(data.temperature),
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Run data:', processedData)
    setIsSubmitting(false)
    reset()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <GlassCard size="default" className="w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Add New Run</h2>
          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Date and Route */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Date
              </label>
              <input
                type="date"
                {...register('date')}
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
              {errors.date && (
                <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Route Name
              </label>
              <input
                type="text"
                {...register('route')}
                placeholder="e.g., Park Loop"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
              {errors.route && (
                <p className="text-red-500 text-xs mt-1">{errors.route.message}</p>
              )}
            </div>
          </div>

          {/* Distance and Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Distance (km)
              </label>
              <input
                type="number"
                step="0.1"
                {...register('distance')}
                placeholder="5.0"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
              {errors.distance && (
                <p className="text-red-500 text-xs mt-1">{errors.distance.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Duration
              </label>
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="number"
                  {...register('hours')}
                  placeholder="0"
                  min="0"
                  className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-center transition-all"
                />
                <input
                  type="number"
                  {...register('minutes')}
                  placeholder="30"
                  min="0"
                  max="59"
                  className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-center transition-all"
                />
                <input
                  type="number"
                  {...register('seconds')}
                  placeholder="0"
                  min="0"
                  max="59"
                  className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-center transition-all"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Hours : Minutes : Seconds</p>
            </div>
          </div>

          {/* Heart Rate */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Avg Heart Rate
              </label>
              <input
                type="number"
                {...register('avgHeartRate')}
                placeholder="145"
                min="40"
                max="220"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
              {errors.avgHeartRate && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <span className="inline-block w-1 h-1 bg-red-500 rounded-full mr-1"></span>
                  {errors.avgHeartRate.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Max Heart Rate
              </label>
              <input
                type="number"
                {...register('maxHeartRate')}
                placeholder="175"
                min="40"
                max="220"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
              {errors.maxHeartRate && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <span className="inline-block w-1 h-1 bg-red-500 rounded-full mr-1"></span>
                  {errors.maxHeartRate.message}
                </p>
              )}
            </div>
          </div>

          {/* Calories and Elevation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Calories Burned
              </label>
              <input
                type="number"
                {...register('calories')}
                placeholder="420"
                min="0"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
              {errors.calories && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <span className="inline-block w-1 h-1 bg-red-500 rounded-full mr-1"></span>
                  {errors.calories.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Elevation Gain (m)
              </label>
              <input
                type="number"
                {...register('elevation')}
                placeholder="45"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
              {errors.elevation && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <span className="inline-block w-1 h-1 bg-red-500 rounded-full mr-1"></span>
                  {errors.elevation.message}
                </p>
              )}
            </div>
          </div>

          {/* Weather and Temperature */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Weather
              </label>
              <select
                {...register('weather')}
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
              >
                <option value="Sunny">Sunny</option>
                <option value="Cloudy">Cloudy</option>
                <option value="Partly Cloudy">Partly Cloudy</option>
                <option value="Light Rain">Light Rain</option>
                <option value="Rainy">Rainy</option>
                <option value="Windy">Windy</option>
                <option value="Snowy">Snowy</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Temperature (°C)
              </label>
              <input
                type="number"
                {...register('temperature')}
                placeholder="20"
                min="-50"
                max="50"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
              {errors.temperature && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <span className="inline-block w-1 h-1 bg-red-500 rounded-full mr-1"></span>
                  {errors.temperature.message}
                </p>
              )}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Notes (optional)
            </label>
            <textarea
              {...register('notes')}
              rows={3}
              placeholder="How did you feel? Any observations..."
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
              aria-label="Save run data"
              className="flex-1"
            >
              Save Run
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </GlassCard>
    </div>
  )
}