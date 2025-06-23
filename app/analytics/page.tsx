"use client";

import { Suspense } from "react";
import { LoadingCard } from "@/components/ui/loading-skeleton";
import { WeeklyDistanceChart } from "@/components/charts/weekly-distance-chart";
import { PaceTrendChart } from "@/components/charts/pace-trend-chart";
import { HeartRateZonesChart } from "@/components/charts/heart-rate-zones";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { Activity, TrendingUp, Heart } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <>
      {/* Gradient mesh background */}
      <div className="gradient-mesh" />

      <div className="min-h-screen relative">
        <div className="container-padding py-8">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              <span className="orange-gradient-text">Analytics Dashboard</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Detailed insights into your running performance
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 animate-fade-in animate-delay-1">
            <div className="glass rounded-xl p-6 text-center">
              <Activity className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                6
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Runs This Week
              </p>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <TrendingUp className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                5:35
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Average Pace
              </p>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Heart className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                147
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Avg Heart Rate
              </p>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid gap-6">
            {/* Distance Chart */}
            <ErrorBoundary>
              <Suspense fallback={<LoadingCard className="h-80" />}>
                <div className="animate-fade-in animate-delay-2">
                  <WeeklyDistanceChart />
                </div>
              </Suspense>
            </ErrorBoundary>

            {/* Two column layout for smaller charts */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Pace Trend */}
              <ErrorBoundary>
                <Suspense fallback={<LoadingCard className="h-80" />}>
                  <div className="animate-fade-in animate-delay-3">
                    <PaceTrendChart />
                  </div>
                </Suspense>
              </ErrorBoundary>

              {/* Heart Rate Zones */}
              <ErrorBoundary>
                <Suspense fallback={<LoadingCard className="h-80" />}>
                  <div className="animate-fade-in animate-delay-4">
                    <HeartRateZonesChart />
                  </div>
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
