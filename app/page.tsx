'use client'

import { Suspense, useState } from 'react'
import { 
  Activity, 
  TrendingUp, 
  Flame, 
  Mountain,
  Clock,
  Calendar,
  MapPin,
  Heart
} from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { StatCard } from '@/components/ui/stat-card'
import { LoadingCard } from '@/components/ui/loading-skeleton'
import { Button } from '@/components/ui/button'
import { mockRuns, weeklyStats, personalRecords, upcomingWorkouts } from '@/lib/data/mock-runs'
import { format } from 'date-fns'
import { AddRunModal } from '@/components/runs/add-run-modal'
import Link from 'next/link'

export default function Dashboard() {
  const [isAddRunModalOpen, setIsAddRunModalOpen] = useState(false)
  
  return (
    <>
      {/* Gradient mesh background */}
      <div className="gradient-mesh" />
      
      <div className="min-h-screen relative">
        {/* Main Content */}
        <div className="container-padding py-6 sm:py-8 lg:py-12 space-y-8">
          {/* Page Header */}
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome back, Runner! 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Here&apos;s your running progress for this week
            </p>
          </div>

          {/* Weekly Summary Stats */}
          <section className="animate-fade-in animate-delay-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                This Week&apos;s Summary
              </h2>
              <Link href="/analytics">
                <Button variant="secondary" size="sm">
                  View Analytics
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Suspense fallback={<LoadingCard />}>
                <StatCard
                  title="Total Distance"
                  value={weeklyStats.totalDistance.toFixed(1)}
                  unit="km"
                  icon={MapPin}
                  trend={{ value: 12, isPositive: true }}
                  color="orange"
                />
              </Suspense>
              <Suspense fallback={<LoadingCard />}>
                <StatCard
                  title="Total Time"
                  value={Math.floor(weeklyStats.totalDuration / 60)}
                  unit="hrs"
                  icon={Clock}
                  trend={{ value: 8, isPositive: true }}
                  color="blue"
                />
              </Suspense>
              <Suspense fallback={<LoadingCard />}>
                <StatCard
                  title="Calories Burned"
                  value={weeklyStats.totalCalories.toLocaleString()}
                  unit="kcal"
                  icon={Flame}
                  trend={{ value: 15, isPositive: true }}
                  color="red"
                />
              </Suspense>
              <Suspense fallback={<LoadingCard />}>
                <StatCard
                  title="Avg Heart Rate"
                  value={weeklyStats.avgHeartRate}
                  unit="bpm"
                  icon={Heart}
                  trend={{ value: 2, isPositive: false }}
                  color="purple"
                />
              </Suspense>
            </div>
          </section>

          {/* Recent Activities */}
          <section className="grid lg:grid-cols-3 gap-6 lg:gap-8 animate-fade-in animate-delay-2">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                  Recent Activities
                </h2>
                <Button onClick={() => setIsAddRunModalOpen(true)}>
                  Add Run
                </Button>
              </div>
              
              <div className="space-y-4">
                {mockRuns.slice(0, 3).map((run, index) => (
                  <GlassCard 
                    key={run.id} 
                    variant="hover" 
                    className={`animate-fade-in animate-delay-${index + 1}`}
                    noPadding
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-4 flex-1">
                          <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25">
                              <Activity className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white">
                                {run.route}
                              </h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {format(run.date, 'EEEE, MMM d')} • {run.timeOfDay}
                              </p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div>
                              <p className="text-xs text-gray-500 dark:text-gray-400">Distance</p>
                              <p className="font-semibold text-gray-900 dark:text-white">
                                {run.distance} km
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 dark:text-gray-400">Pace</p>
                              <p className="font-semibold text-gray-900 dark:text-white">
                                {run.pace} /km
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 dark:text-gray-400">Time</p>
                              <p className="font-semibold text-gray-900 dark:text-white">
                                {Math.floor(run.duration)} min
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 dark:text-gray-400">Calories</p>
                              <p className="font-semibold text-gray-900 dark:text-white">
                                {run.calories}
                              </p>
                            </div>
                          </div>
                          
                          {run.notes && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 italic pt-2">
                              &quot;{run.notes}&quot;
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
              
              <div className="text-center pt-4">
                <Button variant="outline">View All Activities</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Personal Records */}
              <GlassCard className="animate-fade-in animate-delay-3" size="default">
                <h3 className="text-lg font-semibold mb-5 flex items-center text-gray-900 dark:text-white">
                  <TrendingUp className="h-5 w-5 mr-2 text-orange-500" />
                  Personal Records
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Fastest Pace</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {personalRecords.fastestPace} /km
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Longest Run</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {personalRecords.longestRun} km
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Most Calories</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {personalRecords.mostCalories}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Highest Elevation</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {personalRecords.highestElevation} m
                    </span>
                  </div>
                </div>
              </GlassCard>

              {/* Upcoming Workouts */}
              <GlassCard className="animate-fade-in animate-delay-4" size="default">
                <h3 className="text-lg font-semibold mb-5 flex items-center text-gray-900 dark:text-white">
                  <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                  Upcoming Workouts
                </h3>
                <div className="space-y-4">
                  {upcomingWorkouts.map((workout) => (
                    <div key={workout.id} className="border-l-4 border-orange-500 pl-4 py-1">
                      <p className="font-medium text-sm text-gray-900 dark:text-white">
                        {workout.type}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {format(workout.date, 'EEE, MMM d')} • {workout.plannedDistance} km
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="glass" className="w-full mt-6">
                  View Training Plan
                </Button>
              </GlassCard>

              {/* Quick Stats */}
              <GlassCard 
                variant="gradient"
                className="animate-fade-in animate-delay-4"
                size="default"
              >
                <div className="text-center space-y-3">
                  <Mountain className="h-10 w-10 text-orange-500 mx-auto" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Elevation</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {weeklyStats.totalElevation} m
                  </p>
                  <p className="text-xs text-gray-500">climbed this week</p>
                </div>
              </GlassCard>
            </div>
          </section>
        </div>
        
        {/* Add Run Modal */}
        <AddRunModal 
          isOpen={isAddRunModalOpen} 
          onClose={() => setIsAddRunModalOpen(false)} 
        />
      </div>
    </>
  )
}