"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import {
  User,
  Mail,
  Calendar,
  MapPin,
  Award,
  Settings,
  Activity,
  Trophy,
  Target,
  Zap,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <>
      {/* Gradient mesh background */}
      <div className="gradient-mesh" />

      <div className="min-h-screen relative">
        <div className="container-padding py-8">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              <span className="orange-gradient-text">Profile</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Manage your account and track your achievements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Info */}
            <div className="lg:col-span-2 space-y-6">
              <GlassCard
                size="default"
                className="animate-fade-in animate-delay-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25">
                      <User className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      John Runner
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Premium Member since 2024
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Mail className="h-4 w-4" />
                        <span>john.runner@example.com</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Joined January 2024</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>San Francisco, CA</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="secondary" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </GlassCard>

              {/* Stats Overview */}
              <GlassCard
                size="default"
                className="animate-fade-in animate-delay-2"
              >
                <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
                  Lifetime Statistics
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="h-12 w-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-2">
                      <Activity className="h-6 w-6 text-orange-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      142
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Total Runs
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-2">
                      <MapPin className="h-6 w-6 text-blue-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      856
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Total km
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="h-12 w-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-2">
                      <Zap className="h-6 w-6 text-purple-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      5:24
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Avg Pace
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="h-12 w-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-2">
                      <Trophy className="h-6 w-6 text-red-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      68k
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Calories
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Preferences */}
              <GlassCard
                size="default"
                className="animate-fade-in animate-delay-3"
              >
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Preferences & Goals
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Weekly Goal
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Target distance per week
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-orange-500">
                        40 km
                      </span>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Preferred Time
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Usual running time
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-orange-500">
                        Morning
                      </span>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Units
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Distance measurement
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-orange-500">
                        Metric (km)
                      </span>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Achievements */}
              <GlassCard
                size="default"
                className="animate-fade-in animate-delay-2"
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
                  <Award className="h-5 w-5 mr-2 text-orange-500" />
                  Recent Achievements
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-orange-500/10 to-orange-600/10">
                    <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                      5K
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gray-900 dark:text-white">
                        Speed Demon
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Sub 25-minute 5K
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/10">
                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      🎯
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gray-900 dark:text-white">
                        Consistent Runner
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        30-day streak
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-purple-600/10">
                    <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                      🏔️
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gray-900 dark:text-white">
                        Hill Climber
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        1000m elevation gain
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Achievements
                </Button>
              </GlassCard>

              {/* Running Streak */}
              <GlassCard
                variant="gradient"
                size="default"
                className="animate-fade-in animate-delay-3 text-center"
              >
                <Target className="h-12 w-12 text-orange-500 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Current Streak
                </h3>
                <p className="text-4xl font-bold text-orange-500 mb-1">14</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  days in a row
                </p>
                <div className="mt-4 flex justify-center space-x-1">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-8 w-8 rounded ${
                        i < 4 ? "bg-orange-500" : "bg-gray-200 dark:bg-gray-700"
                      }`}
                    />
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
