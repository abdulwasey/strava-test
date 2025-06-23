import { GlassCard } from '@/components/ui/glass-card'
import { Calendar, Target, TrendingUp, Clock, CheckCircle, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

const trainingPlans = [
  {
    id: '1',
    name: '5K Beginner',
    duration: '8 weeks',
    level: 'Beginner',
    description: 'Perfect for first-time runners looking to complete their first 5K',
    workoutsPerWeek: 3,
    totalDistance: 120,
    icon: Target,
    color: 'bg-green-500',
    progress: 0,
  },
  {
    id: '2',
    name: '10K Intermediate',
    duration: '10 weeks',
    level: 'Intermediate',
    description: 'Build endurance for longer distances and improve your pace',
    workoutsPerWeek: 4,
    totalDistance: 280,
    icon: TrendingUp,
    color: 'bg-blue-500',
    progress: 35,
  },
  {
    id: '3',
    name: 'Half Marathon',
    duration: '12 weeks',
    level: 'Advanced',
    description: 'Conquer 21.1km with confidence and achieve your best time',
    workoutsPerWeek: 5,
    totalDistance: 450,
    icon: Clock,
    color: 'bg-purple-500',
    progress: 0,
  },
]

const levelColors = {
  Beginner: 'text-green-600 bg-green-100 dark:bg-green-900/30',
  Intermediate: 'text-blue-600 bg-blue-100 dark:bg-blue-900/30',
  Advanced: 'text-purple-600 bg-purple-100 dark:bg-purple-900/30',
}

export default function TrainingPage() {
  return (
    <>
      {/* Gradient mesh background */}
      <div className="gradient-mesh" />
      
      <div className="min-h-screen relative">
        <div className="container-padding py-8">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              <span className="orange-gradient-text">Training Plans</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Structured programs to achieve your running goals
            </p>
          </div>

          {/* Active Plan Banner */}
          <div className="mb-8 animate-fade-in animate-delay-1">
            <GlassCard size="default" className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-200/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-xl bg-orange-500 flex items-center justify-center">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Current Plan: 10K Intermediate
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Week 4 of 10 • Next run tomorrow
                    </p>
                  </div>
                </div>
                <Button size="sm">Continue Training</Button>
              </div>
            </GlassCard>
          </div>

          {/* Training Plans Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPlans.map((plan, index) => {
              const Icon = plan.icon
              const levelColor = levelColors[plan.level as keyof typeof levelColors]
              
              return (
                <GlassCard
                  key={plan.id}
                  variant="hover"
                  size="default"
                  className={`animate-fade-in animate-delay-${index + 2}`}
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className={`h-12 w-12 rounded-xl ${plan.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${levelColor}`}>
                        {plan.level}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {plan.description}
                      </p>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 text-center py-4 border-y border-gray-100 dark:border-gray-800">
                      <div>
                        <Calendar className="h-4 w-4 text-gray-500 mx-auto mb-1" />
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="font-semibold text-sm">{plan.duration}</p>
                      </div>
                      <div>
                        <Target className="h-4 w-4 text-gray-500 mx-auto mb-1" />
                        <p className="text-xs text-gray-500">Runs/week</p>
                        <p className="font-semibold text-sm">{plan.workoutsPerWeek}</p>
                      </div>
                      <div>
                        <TrendingUp className="h-4 w-4 text-gray-500 mx-auto mb-1" />
                        <p className="text-xs text-gray-500">Total km</p>
                        <p className="font-semibold text-sm">{plan.totalDistance}</p>
                      </div>
                    </div>
                    
                    {/* Progress or Action */}
                    {plan.progress > 0 ? (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Progress</span>
                          <span className="font-medium">{plan.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500"
                            style={{ width: `${plan.progress}%` }}
                          />
                        </div>
                      </div>
                    ) : (
                      <Button className="w-full" variant={plan.id === '2' ? 'secondary' : 'default'}>
                        Start Plan
                      </Button>
                    )}
                  </div>
                </GlassCard>
              )
            })}
          </div>

          {/* Features */}
          <div className="mt-12 animate-fade-in animate-delay-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              What&apos;s Included
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Calendar, title: 'Structured Schedule', desc: 'Day-by-day workout plan' },
                { icon: Target, title: 'Goal Setting', desc: 'Progressive distance targets' },
                { icon: TrendingUp, title: 'Progress Tracking', desc: 'Monitor your improvement' },
                { icon: CheckCircle, title: 'Expert Guidance', desc: 'Tips from pro coaches' },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="glass rounded-xl p-6 text-center">
                    <Icon className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <h3 className="font-medium text-sm text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {feature.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}