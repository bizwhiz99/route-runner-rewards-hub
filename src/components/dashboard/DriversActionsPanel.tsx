
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, Calendar, CheckCircle2, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock weekly actions data
const weeklyActions = [
  {
    id: 1,
    action: "100% Route Adherence This Week",
    points: 10,
    icon: CheckCircle2,
    deadline: "Sunday",
    difficulty: "easy"
  },
  {
    id: 2,
    action: "Refuel at Partner Stations Only",
    points: 15,
    icon: TrendingUp, 
    deadline: "All Week",
    difficulty: "medium"
  },
  {
    id: 3,
    action: "Zero Harsh Braking Events",
    points: 25,
    icon: CheckCircle2,
    deadline: "Friday",
    difficulty: "hard"
  },
  {
    id: 4,
    action: "Complete Weekly Vehicle Checklist",
    points: 5,
    icon: CheckCircle2,
    deadline: "Wednesday",
    difficulty: "easy"
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch(difficulty) {
    case 'easy': return 'bg-green-500';
    case 'medium': return 'bg-yellow-500';
    case 'hard': return 'bg-red-500';
    default: return 'bg-gray-400';
  }
};

const DriversActionsPanel: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-dashboard-purple" />
          <CardTitle>{t('driverActions')}</CardTitle>
        </div>
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{t('weekOf')} April 12, 2025</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {weeklyActions.map((action) => (
            <div key={action.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <div className="bg-dashboard-purple bg-opacity-10 p-2 rounded-full">
                  <action.icon className="h-5 w-5 text-dashboard-purple" />
                </div>
                <div>
                  <h3 className="font-medium">{action.action}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    {t('deadline')}: {action.deadline}
                    <Badge className={`ml-2 ${getDifficultyColor(action.difficulty)}`}>
                      {t(`difficulty.${action.difficulty}`)}
                    </Badge>
                  </p>
                </div>
              </div>
              <div className="bg-dashboard-purple bg-opacity-20 px-3 py-1 rounded-full text-dashboard-purple font-semibold">
                +{action.points} {t('points')}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DriversActionsPanel;
