import { cn } from "@/lib/utils/cn"
import { HTMLAttributes } from "react"

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "hover" | "interactive" | "gradient"
  noPadding?: boolean
  gradient?: boolean
  size?: "sm" | "default" | "lg"
}

export function GlassCard({ 
  className, 
  variant = "default", 
  noPadding = false,
  gradient = false,
  size = "default",
  children, 
  ...props 
}: GlassCardProps) {
  const paddingClasses = {
    sm: "p-4",
    default: "p-6",
    lg: "p-8"
  }
  
  return (
    <div
      className={cn(
        "relative glass rounded-2xl",
        !noPadding && paddingClasses[size],
        variant === "hover" && "glass-hover cursor-pointer",
        variant === "interactive" && "glass-hover cursor-pointer transform-gpu",
        variant === "gradient" && "bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-200/20",
        gradient && "bg-gradient-to-br from-orange-500/5 to-orange-600/5",
        className
      )}
      {...props}
    >
      {/* Gradient overlay for extra shine */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}