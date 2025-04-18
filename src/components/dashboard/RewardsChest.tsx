
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Gift, Lock, Unlock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface RewardsChestProps {
  progress: number;
  pointsRequired: number;
  currentPoints: number;
  rewards: string[];
  onUnlock: () => void;
}

const RewardsChest = ({ 
  progress, 
  pointsRequired, 
  currentPoints,
  rewards,
  onUnlock 
}: RewardsChestProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isUnlocking, setIsUnlocking] = useState(false);
  
  const handleUnlock = () => {
    if (currentPoints >= pointsRequired) {
      setIsUnlocking(true);
      
      // Simulate unlock animation
      setTimeout(() => {
        onUnlock();
        setIsUnlocking(false);
        
        toast({
          title: t('rewards.chestUnlocked'),
          description: t('rewards.chestUnlockedDesc'),
        });
      }, 1500);
    } else {
      toast({
        title: t('rewards.notEnoughPoints'),
        description: t('rewards.needMorePoints', { points: pointsRequired - currentPoints }),
        variant: "destructive"
      });
    }
  };
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Gift className="h-5 w-5 text-yellow-500" />
          {t('rewards.chest')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative h-40 bg-gradient-to-b from-indigo-900 to-indigo-700 rounded-lg flex items-center justify-center overflow-hidden">
          {/* Treasure chest visualization */}
          <div className={`flex flex-col items-center transition-all duration-500 ${isUnlocking ? 'scale-125' : ''}`}>
            <div className="relative">
              <div className={`w-24 h-16 bg-yellow-800 rounded-md border-2 border-yellow-600 relative z-10 transition-all duration-500 ${isUnlocking ? 'translate-y-[-20px]' : ''}`}>
                {/* Chest lid */}
                <div className={`absolute top-0 left-0 right-0 h-4 bg-yellow-700 border-b-2 border-yellow-600 rounded-t-md transition-transform origin-bottom duration-500 ${isUnlocking ? 'rotate-[-45deg] translate-y-[-8px]' : ''}`} />
                {/* Lock */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {isUnlocking ? (
                    <Unlock className="h-6 w-6 text-yellow-500" />
                  ) : (
                    <Lock className="h-6 w-6 text-yellow-500" />
                  )}
                </div>
              </div>
              
              <div className="w-24 h-12 bg-yellow-700 rounded-b-md border-2 border-t-0 border-yellow-600 z-0 relative">
                {/* Chest interior/glow */}
                {isUnlocking && (
                  <>
                    <div className="absolute inset-0 bg-yellow-300 opacity-50 animate-pulse" />
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <Sparkles className="h-16 w-16 text-yellow-300 animate-bounce" />
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className={`mt-2 transition-opacity duration-500 ${isUnlocking ? 'opacity-0' : 'opacity-100'}`}>
              <span className="text-xs font-medium text-white">{progress}% {t('rewards.filled')}</span>
            </div>
          </div>
          
          {/* Particles for unlock animation */}
          {isUnlocking && (
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${0.5 + Math.random() * 1}s`,
                    animationDelay: `${Math.random() * 0.5}s`
                  }}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>{pointsRequired - currentPoints > 0 
              ? t('rewards.pointsToUnlock', { points: pointsRequired - currentPoints }) 
              : t('rewards.readyToUnlock')}
            </span>
            <span>{currentPoints}/{pointsRequired}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="text-sm text-muted-foreground">
          <p className="mb-2">{t('rewards.potentialRewards')}:</p>
          <ul className="list-disc pl-5 space-y-1">
            {rewards.map((reward, index) => (
              <li key={index}>{reward}</li>
            ))}
          </ul>
        </div>
        
        <Button 
          className="w-full" 
          disabled={currentPoints < pointsRequired || isUnlocking}
          onClick={handleUnlock}
        >
          {isUnlocking ? (
            <>
              <Sparkles className="mr-2 h-4 w-4 animate-spin" />
              {t('rewards.unlocking')}
            </>
          ) : (
            t('rewards.unlockChest')
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default RewardsChest;
