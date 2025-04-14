
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, Trophy, Medal, CircleDollarSign } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

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

const getTierColor = (tier: string) => {
  switch(tier) {
    case 'Bronze': return 'bg-amber-700';
    case 'Silver': return 'bg-gray-400';
    case 'Gold': return 'bg-yellow-500';
    default: return 'bg-gray-300';
  }
};

const RewardsTab: React.FC = () => {
  return (
    <Tabs defaultValue="overview" className="space-y-6">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="leaderboard">Eligible Drivers</TabsTrigger>
        <TabsTrigger value="criteria">Tier Criteria</TabsTrigger>
        <TabsTrigger value="metrics">Additional Metrics</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Points</CardTitle>
              <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockRewardsData.monthlyPoints}</div>
              <p className="text-xs text-muted-foreground">points accrued this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Points Redeemed</CardTitle>
              <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockRewardsData.redeemedPoints}</div>
              <p className="text-xs text-muted-foreground">points used this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available Points</CardTitle>
              <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockRewardsData.availablePoints}</div>
              <p className="text-xs text-muted-foreground">total points balance</p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-dashboard-purple" />
              Driver Tier Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="relative flex flex-col items-center">
                <div className={`flex items-center justify-center h-24 w-24 rounded-full ${getTierColor(mockRewardsData.currentTier)} text-white`}>
                  <Award className="h-12 w-12" />
                </div>
                <h3 className="mt-4 text-xl font-bold">{mockRewardsData.currentTier} Tier</h3>
                <p className="text-sm text-muted-foreground">
                  {mockRewardsData.pointsToNextTier} points until Gold Tier
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Progress to next tier</span>
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
                <p className="text-xs text-muted-foreground">1000+ points</p>
              </div>
              <div className="p-4 rounded-lg border">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-gray-400 flex items-center justify-center text-white">
                    <Medal className="h-6 w-6" />
                  </div>
                </div>
                <p className="mt-2 font-medium">Silver</p>
                <p className="text-xs text-muted-foreground">2000+ points</p>
              </div>
              <div className="p-4 rounded-lg border">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                    <Medal className="h-6 w-6" />
                  </div>
                </div>
                <p className="mt-2 font-medium">Gold</p>
                <p className="text-xs text-muted-foreground">3000+ points</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="leaderboard">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-dashboard-purple" />
              Reward-Eligible Drivers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Driver</TableHead>
                  <TableHead>Tier</TableHead>
                  <TableHead>Total Points</TableHead>
                  <TableHead>On-Time %</TableHead>
                  <TableHead>Route Adherence</TableHead>
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
              Tier Promotion Criteria
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Criterion</TableHead>
                  <TableHead>Bronze Requirements</TableHead>
                  <TableHead>Silver Requirements</TableHead>
                  <TableHead>Gold Requirements</TableHead>
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
              <CardTitle>Weekly Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Card Swipes</h4>
                  <p className="text-2xl font-bold text-dashboard-dark">{additionalMetrics.cardSwipesPerWeek} / week</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">On-Time Delivery</h4>
                  <p className="text-2xl font-bold text-dashboard-dark">{additionalMetrics.onTimeDeliveryPercentage}%</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Route Adherence</h4>
                  <p className="text-2xl font-bold text-dashboard-dark">{additionalMetrics.routeAdherenceScore}/100</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Non-Fuel Purchases</h4>
                  <p className="text-2xl font-bold text-dashboard-dark">${additionalMetrics.nonFuelPurchases.reduce((sum, item) => sum + item.amount, 0)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Non-Fuel Purchase Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Purchase Type</TableHead>
                    <TableHead>Amount</TableHead>
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
