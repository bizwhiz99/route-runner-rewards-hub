
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, Trophy, Medal, CircleDollarSign } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

// Import our new gamification components
import DriverXPProgress from './DriverXPProgress';
import StreakTracker from './StreakTracker';
import TierChallenges from './TierChallenges';
import WeeklyQuests from './WeeklyQuests';
import RewardsChest from './RewardsChest';

// Mock data for rewards
const mockRewardsData = {
  monthlyPoints: 780,
  redeemedPoints: 250,
  availablePoints: 2430,
  currentTier: 'Silver',
  nextTierProgress: 65,
  pointsToNextTier: 520,
};

// Mock eligible drivers data
const eligibleDrivers = [
  {
    id: 1,
    name: "Jane Smith",
    avatar: "/placeholder.svg",
    tier: "Gold",
    points: 3240,
    onTimeDelivery: 98,
    routeAdherence: 95,
  },
  {
    id: 2,
    name: "John Doe",
    avatar: "/placeholder.svg",
    tier: "Silver",
    points: 2430,
    onTimeDelivery: 94,
    routeAdherence: 91,
  },
  {
    id: 3,
    name: "Robert Johnson",
    avatar: "/placeholder.svg",
    tier: "Silver",
    points: 2180,
    onTimeDelivery: 92,
    routeAdherence: 88,
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "/placeholder.svg",
    tier: "Bronze",
    points: 1560,
    onTimeDelivery: 90,
    routeAdherence: 85,
  },
];

// Mock criteria data
const tierCriteria = [
  {
    id: 1,
    criterion: "Safe Driving Score",
    bronze: ">80%",
    silver: ">90%",
    gold: ">95%"
  },
  {
    id: 2,
    criterion: "Fuel Efficiency Rating",
    bronze: ">75%",
    silver: ">85%",
    gold: ">92%"
  },
  {
    id: 3,
    criterion: "On-Time Delivery",
    bronze: ">85%",
    silver: ">92%",
    gold: ">97%"
  },
  {
    id: 4,
    criterion: "Route Adherence",
    bronze: ">80%",
    silver: ">88%",
    gold: ">94%"
  },
  {
    id: 5,
    criterion: "Card Usage Consistency",
    bronze: ">70%",
    silver: ">85%",
    gold: ">95%"
  },
];

// Mock additional metrics data
const additionalMetrics = {
  cardSwipesPerWeek: 12,
  onTimeDeliveryPercentage: 94,
  routeAdherenceScore: 91,
  nonFuelPurchases: [
    { type: "Vehicle Wash", amount: 45 },
    { type: "Maintenance", amount: 120 },
    { type: "Supplies", amount: 35 },
    { type: "Other", amount: 15 }
  ]
};

// New mock data for gamification features
const mockGameData = {
  // XP System Data
  xp: {
    currentXP: 2450,
    levelXP: 3000,
    level: 8,
  },
  
  // Streak Data
  streak: {
    currentStreak: 12,
    highestStreak: 18,
    streakType: 'daily' as const,
    nextReward: 15,
  },
  
  // Tier Challenges
  challenges: [
    {
      id: 1,
      type: 'spend',
      target: 2000,
      current: 1450,
      unit: '$',
      deadline: '3 days left',
      reward: '+500 XP',
    },
    {
      id: 2,
      type: 'time',
      target: 10,
      current: 8,
      unit: 'deliveries',
      deadline: '5 days left',
      reward: '+200 XP',
    },
    {
      id: 3,
      type: 'safety',
      target: 95,
      current: 92,
      unit: 'score',
      deadline: '7 days left',
      reward: '+300 XP',
    },
  ],
  
  // Weekly Quests
  quests: [
    {
      id: 1,
      title: 'Fuel up 3 times this week',
      progress: 2,
      target: 3,
      reward: '+100 XP',
      deadline: '3 days',
      completed: false,
      expired: false,
    },
    {
      id: 2,
      title: 'Spend at 2 different stations',
      progress: 2,
      target: 2,
      reward: '+150 XP',
      deadline: '5 days',
      completed: true,
      expired: false,
    },
    {
      id: 3,
      title: 'Make 5 on-time deliveries',
      progress: 3,
      target: 5,
      reward: '+200 XP',
      deadline: '2 days',
      completed: false,
      expired: false,
    },
    {
      id: 4,
      title: 'Complete vehicle inspection',
      progress: 0,
      target: 1,
      reward: '+50 XP',
      deadline: 'Yesterday',
      completed: false,
      expired: true,
    },
  ],
  
  // Rewards Chest
  chest: {
    progress: 70,
    pointsRequired: 2500,
    currentPoints: 2430,
    rewards: [
      '1,000 Bonus Points',
      'Limited Edition Team Badge',
      'Exclusive Driver Avatar',
      'Fuel Efficiency Boost'
    ]
  }
};

const getTierColor = (tier: string) => {
  switch(tier) {
    case 'Bronze': return 'bg-amber-700';
    case 'Silver': return 'bg-gray-400';
    case 'Gold': return 'bg-yellow-500';
    default: return 'bg-gray-300';
  }
};

const RewardsTab: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [gameData, setGameData] = useState(mockGameData);
  
  const handleToggleSound = () => {
    setSoundEnabled(!soundEnabled);
    toast({
      title: !soundEnabled ? t('sound.enabled') : t('sound.disabled'),
      duration: 2000,
    });
  };
  
  const handleClaimReward = (questId: number) => {
    // Update quest status in real app this would call an API
    setGameData(prev => ({
      ...prev,
      quests: prev.quests.map(quest => 
        quest.id === questId 
          ? { ...quest, completed: false, expired: true } 
          : quest
      ),
      xp: {
        ...prev.xp,
        currentXP: prev.xp.currentXP + 150 // Add XP for claiming quest
      }
    }));
    
    toast({
      title: t('quests.rewardClaimed'),
      description: t('quests.xpAdded', { xp: 150 }),
    });
    
    // Play sound if enabled
    if (soundEnabled) {
      const audio = new Audio('/sounds/reward.mp3');
      audio.volume = 0.5;
      audio.play().catch(e => console.log('Sound play error:', e));
    }
  };
  
  const handleUnlockChest = () => {
    // Update reward chest status
    setGameData(prev => ({
      ...prev,
      chest: {
        ...prev.chest,
        progress: 0,
        currentPoints: prev.chest.currentPoints - prev.chest.pointsRequired,
      },
      xp: {
        ...prev.xp,
        currentXP: prev.xp.currentXP + 500 // Add XP for unlocking chest
      }
    }));
    
    toast({
      title: t('rewards.congratulations'),
      description: t('rewards.chestRewards'),
      duration: 5000,
    });
    
    // Play sound if enabled
    if (soundEnabled) {
      const audio = new Audio('/sounds/chest-unlock.mp3');
      audio.volume = 0.5;
      audio.play().catch(e => console.log('Sound play error:', e));
    }
  };
  
  return (
    <Tabs defaultValue="overview" className="space-y-6">
      <TabsList>
        <TabsTrigger value="overview">{t('tabs.overview')}</TabsTrigger>
        <TabsTrigger value="quests">{t('tabs.quests')}</TabsTrigger>
        <TabsTrigger value="leaderboard">{t('tabs.eligibleDrivers')}</TabsTrigger>
        <TabsTrigger value="criteria">{t('tabs.tierCriteria')}</TabsTrigger>
        <TabsTrigger value="metrics">{t('tabs.additionalMetrics')}</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('monthlyPoints')}</CardTitle>
              <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockRewardsData.monthlyPoints}</div>
              <p className="text-xs text-muted-foreground">{t('pointsThisMonth')}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('pointsRedeemed')}</CardTitle>
              <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockRewardsData.redeemedPoints}</div>
              <p className="text-xs text-muted-foreground">{t('pointsUsedThisMonth')}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('availablePoints')}</CardTitle>
              <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockRewardsData.availablePoints}</div>
              <p className="text-xs text-muted-foreground">{t('totalPointsBalance')}</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* XP Progress Component */}
          <DriverXPProgress 
            currentXP={gameData.xp.currentXP} 
            levelXP={gameData.xp.levelXP} 
            level={gameData.xp.level}
            sound={soundEnabled}
            onToggleSound={handleToggleSound}
          />
          
          {/* Streak Tracker Component */}
          <StreakTracker 
            currentStreak={gameData.streak.currentStreak}
            highestStreak={gameData.streak.highestStreak}
            streakType={gameData.streak.streakType}
            nextReward={gameData.streak.nextReward}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Tier Challenges Component */}
          <TierChallenges 
            currentTier={mockRewardsData.currentTier}
            nextTier="Gold"
            challenges={gameData.challenges}
          />
          
          {/* Rewards Chest Component */}
          <RewardsChest 
            progress={gameData.chest.progress}
            pointsRequired={gameData.chest.pointsRequired}
            currentPoints={gameData.chest.currentPoints}
            rewards={gameData.chest.rewards}
            onUnlock={handleUnlockChest}
          />
        </div>
        
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-dashboard-purple" />
              {t('tierStatus')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="relative flex flex-col items-center">
                <div className={`flex items-center justify-center h-24 w-24 rounded-full ${getTierColor(mockRewardsData.currentTier)} text-white`}>
                  <Award className="h-12 w-12" />
                </div>
                <h3 className="mt-4 text-xl font-bold">{mockRewardsData.currentTier} {t('tier')}</h3>
                <p className="text-sm text-muted-foreground">
                  {mockRewardsData.pointsToNextTier} {t('untilNextTier', { tier: 'Gold' })}
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>{t('progressToNextTier')}</span>
                <span>{mockRewardsData.nextTierProgress}%</span>
              </div>
              <Progress value={mockRewardsData.nextTierProgress} className="h-2" />
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg border">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-amber-700 flex items-center justify-center text-white">
                    <Medal className="h-6 w-6" />
                  </div>
                </div>
                <p className="mt-2 font-medium">Bronze</p>
                <p className="text-xs text-muted-foreground">1000+ {t('points')}</p>
              </div>
              <div className="p-4 rounded-lg border">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-gray-400 flex items-center justify-center text-white">
                    <Medal className="h-6 w-6" />
                  </div>
                </div>
                <p className="mt-2 font-medium">Silver</p>
                <p className="text-xs text-muted-foreground">2000+ {t('points')}</p>
              </div>
              <div className="p-4 rounded-lg border">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                    <Medal className="h-6 w-6" />
                  </div>
                </div>
                <p className="mt-2 font-medium">Gold</p>
                <p className="text-xs text-muted-foreground">3000+ {t('points')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="quests">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WeeklyQuests 
            quests={gameData.quests}
            onClaimReward={handleClaimReward}
          />
          
          <div className="space-y-6">
            <StreakTracker 
              currentStreak={gameData.streak.currentStreak}
              highestStreak={gameData.streak.highestStreak}
              streakType={gameData.streak.streakType}
              nextReward={gameData.streak.nextReward}
            />
            
            <RewardsChest 
              progress={gameData.chest.progress}
              pointsRequired={gameData.chest.pointsRequired}
              currentPoints={gameData.chest.currentPoints}
              rewards={gameData.chest.rewards}
              onUnlock={handleUnlockChest}
            />
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="leaderboard">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-dashboard-purple" />
              {t('rewardEligibleDrivers')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('driver')}</TableHead>
                  <TableHead>{t('tier')}</TableHead>
                  <TableHead>{t('totalPoints')}</TableHead>
                  <TableHead>{t('onTime')}%</TableHead>
                  <TableHead>{t('routeAdherence')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {eligibleDrivers.map((driver) => (
                  <TableRow key={driver.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={driver.avatar} />
                          <AvatarFallback>{driver.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{driver.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getTierColor(driver.tier)}>
                        {driver.tier}
                      </Badge>
                    </TableCell>
                    <TableCell>{driver.points}</TableCell>
                    <TableCell>{driver.onTimeDelivery}%</TableCell>
                    <TableCell>{driver.routeAdherence}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="criteria">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-dashboard-purple" />
              {t('tierPromotionCriteria')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('criterion')}</TableHead>
                  <TableHead>{t('bronzeRequirements')}</TableHead>
                  <TableHead>{t('silverRequirements')}</TableHead>
                  <TableHead>{t('goldRequirements')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tierCriteria.map((criterion) => (
                  <TableRow key={criterion.id}>
                    <TableCell>{criterion.criterion}</TableCell>
                    <TableCell>{criterion.bronze}</TableCell>
                    <TableCell>{criterion.silver}</TableCell>
                    <TableCell>{criterion.gold}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="metrics">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('weeklyActivity')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">{t('cardSwipes')}</h4>
                  <p className="text-2xl font-bold text-dashboard-dark">{additionalMetrics.cardSwipesPerWeek} / {t('week')}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">{t('onTimeDelivery')}</h4>
                  <p className="text-2xl font-bold text-dashboard-dark">{additionalMetrics.onTimeDeliveryPercentage}%</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">{t('routeAdherence')}</h4>
                  <p className="text-2xl font-bold text-dashboard-dark">{additionalMetrics.routeAdherenceScore}/100</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">{t('nonFuelPurchases')}</h4>
                  <p className="text-2xl font-bold text-dashboard-dark">${additionalMetrics.nonFuelPurchases.reduce((sum, item) => sum + item.amount, 0)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>{t('nonFuelPurchaseBreakdown')}</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('purchaseType')}</TableHead>
                    <TableHead>{t('amount')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {additionalMetrics.nonFuelPurchases.map((purchase, index) => (
                    <TableRow key={index}>
                      <TableCell>{purchase.type}</TableCell>
                      <TableCell>${purchase.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default RewardsTab;
