import { cn } from "@/lib/utils/cn"
import { HTMLAttributes } from "react"

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular" | "rounded"
  width?: string | number
  height?: string | number
}

export function Skeleton({ 
  className, 
  variant = "rectangular",
  width,
  height,
  ...props 
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "skeleton animate-pulse",
        variant === "text" && "h-4 w-full rounded-md",
        variant === "circular" && "rounded-full",
        variant === "rectangular" && "rounded-lg",
        variant === "rounded" && "rounded-2xl",
        className
      )}
      style={{
        width: width,
        height: height,
      }}
      {...props}
    />
  )
}

interface LoadingCardProps extends HTMLAttributes<HTMLDivElement> {
  lines?: number
}

export function LoadingCard({ lines = 3, className, ...props }: LoadingCardProps) {
  return (
    <div className={cn("glass rounded-2xl p-6 space-y-4", className)} {...props}>
      <Skeleton variant="rectangular" className="h-32 w-full bg-gray-200 dark:bg-gray-700" />
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton 
            key={i} 
            variant="text" 
            className="h-4 bg-gray-200 dark:bg-gray-700" 
            style={{ width: `${100 - i * 20}%` }} 
          />
        ))}
      </div>
    </div>
  )
}