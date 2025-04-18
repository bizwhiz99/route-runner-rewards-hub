
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Scroll, Clock, CheckCircle, XCircle, Gift } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Quest {
  id: number;
  title: string;
  progress: number;
  target: number;
  reward: string;
  deadline: string;
  completed: boolean;
  expired: boolean;
}

interface WeeklyQuestsProps {
  quests: Quest[];
  onClaimReward: (questId: number) => void;
}

const WeeklyQuests = ({ quests, onClaimReward }: WeeklyQuestsProps) => {
  const { t } = useTranslation();
  
  const activeQuests = quests.filter(q => !q.expired);
  const completedCount = activeQuests.filter(q => q.completed).length;
  const totalQuests = activeQuests.length;
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Scroll className="h-5 w-5 text-blue-500" />
          {t('quests.title')}
        </CardTitle>
        <Badge className="bg-blue-500">
          {completedCount}/{totalQuests} {t('quests.completed')}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        {activeQuests.map((quest) => {
          const progressPercent = Math.min(100, Math.round((quest.progress / quest.target) * 100));
          
          return (
            <div 
              key={quest.id} 
              className={`p-3 rounded-lg border ${
                quest.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex justify-between mb-1">
                <div className="flex items-start gap-2">
                  {quest.completed ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      <span className="text-xs font-bold">{quest.progress}/{quest.target}</span>
                    </div>
                  )}
                  <div>
                    <div className="font-medium">{quest.title}</div>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {t('quests.expires')}: {quest.deadline}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 text-sm mb-1">
                    <Gift className="h-4 w-4 text-dashboard-purple" />
                    <span className="font-medium">{quest.reward}</span>
                  </div>
                  
                  {quest.completed && (
                    <Button 
                      size="sm" 
                      className="h-7 text-xs"
                      onClick={() => onClaimReward(quest.id)}
                    >
                      {t('quests.claim')}
                    </Button>
                  )}
                </div>
              </div>
              
              {!quest.completed && (
                <div className="mt-2">
                  <Progress value={progressPercent} className="h-1.5" />
                </div>
              )}
            </div>
          );
        })}
        
        {quests.some(q => q.expired) && (
          <div className="pt-2 border-t mt-4">
            <div className="flex items-center gap-2 mb-2 text-sm font-medium text-muted-foreground">
              <XCircle className="h-4 w-4 text-red-500" />
              {t('quests.expiredTitle')}
            </div>
            
            {quests.filter(q => q.expired).map((quest) => (
              <div key={quest.id} className="flex justify-between items-center py-2 text-sm text-muted-foreground">
                <div>{quest.title}</div>
                <Badge variant="outline" className="text-xs">
                  {t('quests.expired')}
                </Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WeeklyQuests;
