import { cn } from "@/lib/utils/cn"
import { GlassCard } from "./glass-card"
import { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  unit?: string
  icon: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
  color?: "orange" | "blue" | "green" | "purple" | "red"
}

const colorVariants = {
  orange: {
    bg: "bg-gradient-to-br from-orange-500/10 to-orange-600/10",
    icon: "text-orange-500",
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
    trend: {
      positive: "text-green-600 dark:text-green-400",
      negative: "text-red-600 dark:text-red-400"
    }
  },
  blue: {
    bg: "bg-gradient-to-br from-blue-500/10 to-blue-600/10",
    icon: "text-blue-500",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    trend: {
      positive: "text-green-600 dark:text-green-400",
      negative: "text-red-600 dark:text-red-400"
    }
  },
  green: {
    bg: "bg-gradient-to-br from-green-500/10 to-green-600/10",
    icon: "text-green-500",
    iconBg: "bg-green-100 dark:bg-green-900/30",
    trend: {
      positive: "text-green-600 dark:text-green-400",
      negative: "text-red-600 dark:text-red-400"
    }
  },
  purple: {
    bg: "bg-gradient-to-br from-purple-500/10 to-purple-600/10",
    icon: "text-purple-500",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    trend: {
      positive: "text-green-600 dark:text-green-400",
      negative: "text-red-600 dark:text-red-400"
    }
  },
  red: {
    bg: "bg-gradient-to-br from-red-500/10 to-red-600/10",
    icon: "text-red-500",
    iconBg: "bg-red-100 dark:bg-red-900/30",
    trend: {
      positive: "text-green-600 dark:text-green-400",
      negative: "text-red-600 dark:text-red-400"
    }
  }
}

export function StatCard({ 
  title, 
  value, 
  unit, 
  icon: Icon, 
  trend,
  className,
  color = "orange"
}: StatCardProps) {
  const colors = colorVariants[color]
  
  return (
    <GlassCard 
      variant="hover" 
      className={cn("relative overflow-hidden card-hover", colors.bg, className)}
      noPadding
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-3 flex-1">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
            <div className="flex items-baseline space-x-1">
              <span className="text-3xl font-bold tracking-tight">{value}</span>
              {unit && <span className="text-sm text-gray-500 dark:text-gray-400">{unit}</span>}
            </div>
            {trend && (
              <div className={cn(
                "flex items-center text-xs font-medium",
                trend.isPositive ? colors.trend.positive : colors.trend.negative
              )}>
                <span className="mr-1">{trend.isPositive ? "↑" : "↓"}</span>
                <span>{Math.abs(trend.value)}%</span>
                <span className="ml-1 text-gray-500">vs last week</span>
              </div>
            )}
          </div>
          <div className={cn("rounded-xl p-3", colors.iconBg)}>
            <Icon className={cn("h-6 w-6", colors.icon)} />
          </div>
        </div>
      </div>
      
      {/* Decorative gradient blob */}
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-current to-transparent opacity-10 blur-2xl" />
    </GlassCard>
  )
}