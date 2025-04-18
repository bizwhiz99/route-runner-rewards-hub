
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Trophy, ArrowRight, BadgeDollarSign, Clock, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Challenge {
  id: number;
  type: string;
  target: number;
  current: number;
  unit: string;
  deadline: string;
  reward: string;
}

interface TierChallengesProps {
  currentTier: string;
  nextTier: string;
  challenges: Challenge[];
}

const TierChallenges = ({ currentTier, nextTier, challenges }: TierChallengesProps) => {
  const { t } = useTranslation();

  // Calculate overall progress to next tier 
  // Based on average progress of all challenges
  const overallProgress = Math.round(
    challenges.reduce((sum, challenge) => 
      sum + Math.min(100, (challenge.current / challenge.target) * 100), 0
    ) / challenges.length
  );

  // Get color based on tier
  const getTierColor = (tier: string) => {
    switch(tier.toLowerCase()) {
      case 'bronze': return 'bg-amber-700 text-white';
      case 'silver': return 'bg-gray-400 text-white';
      case 'gold': return 'bg-yellow-500 text-white';
      case 'platinum': return 'bg-blue-300 text-white';
      default: return 'bg-gray-300 text-white';
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Trophy className="h-5 w-5 text-dashboard-purple" />
          {t('tierChallenge.title')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Badge className={getTierColor(currentTier)}>
            {currentTier}
          </Badge>
          <ArrowRight className="h-4 w-4" />
          <Badge className={getTierColor(nextTier)}>
            {nextTier}
          </Badge>
        </div>
      
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>{t('tierChallenge.progress')}</span>
            <span className="font-medium">{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} className="h-2" />
        </div>
      
        <div className="space-y-3 mt-2">
          {challenges.map((challenge) => {
            const progress = Math.min(100, Math.round((challenge.current / challenge.target) * 100));
            
            // Icon based on challenge type
            const ChallengeIcon = () => {
              switch(challenge.type) {
                case 'spend': return <BadgeDollarSign className="h-4 w-4 text-green-600" />;
                case 'time': return <Clock className="h-4 w-4 text-blue-600" />;
                case 'safety': return <ShieldCheck className="h-4 w-4 text-red-600" />;
                default: return <Trophy className="h-4 w-4 text-dashboard-purple" />;
              }
            };
            
            return (
              <div key={challenge.id} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <ChallengeIcon />
                    <span className="font-medium text-sm">
                      {challenge.type === 'spend' 
                        ? t('tierChallenge.spendChallenge', { amount: challenge.target })
                        : t('tierChallenge.otherChallenge', { amount: challenge.target, unit: challenge.unit })}
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {challenge.deadline}
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center text-xs text-muted-foreground mb-1">
                  <span>
                    {challenge.current}/{challenge.target} {challenge.unit}
                  </span>
                  <span className="text-green-600 font-medium">
                    {challenge.reward}
                  </span>
                </div>
                
                <Progress value={progress} className="h-1.5" />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default TierChallenges;
