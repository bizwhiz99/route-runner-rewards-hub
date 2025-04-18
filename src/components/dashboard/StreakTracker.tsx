
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame, Calendar, TrendingUp, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface StreakTrackerProps {
  currentStreak: number;
  highestStreak: number;
  streakType: 'daily' | 'weekly';
  nextReward: number;
}

const StreakTracker = ({ 
  currentStreak, 
  highestStreak, 
  streakType, 
  nextReward 
}: StreakTrackerProps) => {
  const { t } = useTranslation();
  
  // Calculate flames to show based on streak
  const flames = Math.min(currentStreak, 7);
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500" />
          {t('streak.title')}
        </CardTitle>
        <Badge className="bg-orange-500">
          {streakType === 'daily' ? t('streak.daily') : t('streak.weekly')}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold flex items-center gap-1">
              {Array.from({ length: flames }).map((_, i) => (
                <Flame key={i} className="h-6 w-6 text-orange-500" />
              ))}
              {currentStreak > 7 && <span>+{currentStreak - 7}</span>}
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm text-muted-foreground">
                {t('streak.highest')}: {highestStreak}
              </span>
              <div className="flex items-center text-green-600 text-sm">
                <Calendar className="h-3 w-3 mr-1" />
                {currentStreak} {streakType === 'daily' ? t('streak.days') : t('streak.weeks')}
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-orange-500" />
                <span className="font-medium text-sm">{t('streak.nextMilestone')}</span>
              </div>
              <span className="text-sm font-bold">{nextReward} {streakType === 'daily' ? t('streak.days') : t('streak.weeks')}</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              {t('streak.bonusReward')}:
              <div className="flex items-center mt-1">
                <Award className="h-4 w-4 text-dashboard-purple mr-1" />
                <span>+{nextReward * 5} {t('xp.points')}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StreakTracker;
