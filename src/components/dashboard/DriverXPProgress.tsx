
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Award, Zap, Star, Volume2, VolumeX } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface DriverXPProgressProps {
  currentXP: number;
  levelXP: number;
  level: number;
  sound: boolean;
  onToggleSound: () => void;
}

const DriverXPProgress = ({ 
  currentXP, 
  levelXP, 
  level, 
  sound, 
  onToggleSound 
}: DriverXPProgressProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const progressPercentage = Math.min(Math.round((currentXP / levelXP) * 100), 100);
  
  const handleLevelInfoClick = () => {
    toast({
      title: t('xp.levelInfo', { level }),
      description: t('xp.levelDescription', { 
        current: currentXP, 
        required: levelXP, 
        remaining: levelXP - currentXP 
      }),
      duration: 5000,
    });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Zap className="h-5 w-5 text-yellow-500" />
          {t('xp.driverLevel', { level })}
        </CardTitle>
        <div className="flex gap-2 items-center">
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={onToggleSound}
          >
            {sound ? (
              <Volume2 className="h-4 w-4" />
            ) : (
              <VolumeX className="h-4 w-4" />
            )}
            <span className="sr-only">{sound ? t('sound.on') : t('sound.off')}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLevelInfoClick}
          >
            <Star className="h-4 w-4 mr-1 text-dashboard-purple" />
            {t('xp.info')}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">
            XP: {currentXP}/{levelXP}
          </span>
          <Badge className="bg-dashboard-purple">
            {levelXP - currentXP} {t('xp.toNextLevel')}
          </Badge>
        </div>
        
        <Progress value={progressPercentage} className="h-2" />
        
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 5 }).map((_, i) => {
            const milestone = Math.round((i + 1) * (levelXP / 5));
            const achieved = currentXP >= milestone;
            
            return (
              <div 
                key={i} 
                className={`flex flex-col items-center p-1 rounded-md ${
                  achieved ? 'bg-green-100' : 'bg-gray-100'
                }`}
              >
                <Award className={`h-4 w-4 ${
                  achieved ? 'text-green-500' : 'text-gray-400'
                }`} />
                <span className="text-xs">{milestone}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default DriverXPProgress;
