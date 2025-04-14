import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
} from 'recharts';
import { Users, TrendingUp, Filter, Layers, Award, BadgeDollarSign, Trophy } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

// Mock data for driver tier distribution by region
const tierDistributionData = {
  Northeast: [
    { name: 'Bronze', value: 25 },
    { name: 'Silver', value: 18 },
    { name: 'Gold', value: 7 },
  ],
  Southeast: [
    { name: 'Bronze', value: 20 },
    { name: 'Silver', value: 14 },
    { name: 'Gold', value: 5 },
  ],
  Midwest: [
    { name: 'Bronze', value: 22 },
    { name: 'Silver', value: 16 },
    { name: 'Gold', value: 4 },
  ],
  Northwest: [
    { name: 'Bronze', value: 18 },
    { name: 'Silver', value: 12 },
    { name: 'Gold', value: 6 },
  ],
  Southwest: [
    { name: 'Bronze', value: 21 },
    { name: 'Silver', value: 13 },
    { name: 'Gold', value: 8 },
  ],
};

// Mock data for spend by tier
const spendByTierData = [
  {
    tier: 'Bronze',
    fuel: 450,
    nonFuel: 80,
  },
  {
    tier: 'Silver',
    fuel: 520,
    nonFuel: 120,
  },
  {
    tier: 'Gold',
    fuel: 580,
    nonFuel: 180,
  },
];

// Mock data for points by team
const pointsByTeamData = [
  {
    team: 'East Coast',
    earned: 4500,
    redeemed: 2800,
  },
  {
    team: 'West Coast',
    earned: 5200,
    redeemed: 3100,
  },
  {
    team: 'Central',
    earned: 3800,
    redeemed: 2200,
  },
  {
    team: 'Southern',
    earned: 4100,
    redeemed: 2600,
  },
  {
    team: 'Northern',
    earned: 3900,
    redeemed: 2400,
  },
];

// Mock data for leaderboard with team filtering
const leaderboardData = [
  {
    id: 1,
    name: "Jane Smith",
    avatar: "/placeholder.svg",
    team: "East Coast",
    tier: "Gold",
    points: 3240,
    onTimeDelivery: 98,
    routeAdherence: 95,
  },
  {
    id: 2,
    name: "John Doe",
    avatar: "/placeholder.svg",
    team: "West Coast",
    tier: "Silver",
    points: 2430,
    onTimeDelivery: 94,
    routeAdherence: 91,
  },
  {
    id: 3,
    name: "Robert Johnson",
    avatar: "/placeholder.svg",
    team: "East Coast",
    tier: "Silver",
    points: 2180,
    onTimeDelivery: 92,
    routeAdherence: 88,
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "/placeholder.svg",
    team: "Central",
    tier: "Bronze",
    points: 1560,
    onTimeDelivery: 90,
    routeAdherence: 85,
  },
  {
    id: 5,
    name: "Michael Wilson",
    avatar: "/placeholder.svg",
    team: "Southern",
    tier: "Gold",
    points: 3120,
    onTimeDelivery: 97,
    routeAdherence: 94,
  },
  {
    id: 6,
    name: "Sarah Brown",
    avatar: "/placeholder.svg",
    team: "Northern",
    tier: "Silver",
    points: 2350,
    onTimeDelivery: 93,
    routeAdherence: 89,
  },
  {
    id: 7,
    name: "David Taylor",
    avatar: "/placeholder.svg",
    team: "West Coast",
    tier: "Bronze",
    points: 1780,
    onTimeDelivery: 91,
    routeAdherence: 87,
  },
  {
    id: 8,
    name: "Lisa Anderson",
    avatar: "/placeholder.svg",
    team: "Southern",
    tier: "Silver",
    points: 2260,
    onTimeDelivery: 93,
    routeAdherence: 90,
  },
];

// Colors for charts
const TIER_COLORS = {
  Bronze: '#B87333',
  Silver: '#C0C0C0',
  Gold: '#FFD700',
};

const CHART_COLORS = {
  fuel: '#6E59A5',
  nonFuel: '#9b87f5',
  earned: '#33C3F0',
  redeemed: '#F97316',
};

const FleetManagerView: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('Northeast');
  const [selectedTeam, setSelectedTeam] = useState('All Teams');
  const [leaderboardView, setLeaderboardView] = useState('points');
  
  const teams = ['All Teams', 'East Coast', 'West Coast', 'Central', 'Southern', 'Northern'];
  const regions = Object.keys(tierDistributionData);
  
  // Filter leaderboard data based on selected team
  const filteredLeaderboard = selectedTeam === 'All Teams' 
    ? leaderboardData 
    : leaderboardData.filter(driver => driver.team === selectedTeam);
  
  // Sort leaderboard data based on selected view
  const sortedLeaderboard = [...filteredLeaderboard].sort((a, b) => {
    if (leaderboardView === 'points') {
      return b.points - a.points;
    } else if (leaderboardView === 'delivery') {
      return b.onTimeDelivery - a.onTimeDelivery;
    } else {
      return b.routeAdherence - a.routeAdherence;
    }
  });

  // Chart config
  const spendChartConfig = {
    fuel: {
      label: "Fuel",
      color: CHART_COLORS.fuel
    },
    nonFuel: {
      label: "Non-Fuel",
      color: CHART_COLORS.nonFuel
    }
  };
  
  const pointsChartConfig = {
    earned: {
      label: "Points Earned",
      color: CHART_COLORS.earned
    },
    redeemed: {
      label: "Points Redeemed",
      color: CHART_COLORS.redeemed
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

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Users className="h-6 w-6 text-dashboard-purple" />
          Fleet Manager View
        </h2>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <Select
            value={selectedRegion}
            onValueChange={setSelectedRegion}
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>
            <SelectContent>
              {regions.map(region => (
                <SelectItem key={region} value={region}>{region}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-dashboard-purple" />
              Driver Tier Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tierDistributionData[selectedRegion]}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {tierDistributionData[selectedRegion].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={TIER_COLORS[entry.name as keyof typeof TIER_COLORS]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Total drivers in {selectedRegion}: {tierDistributionData[selectedRegion].reduce((sum, item) => sum + item.value, 0)}
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BadgeDollarSign className="h-5 w-5 text-dashboard-purple" />
              Fuel vs Non-Fuel Spend by Tier
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              <ChartContainer config={spendChartConfig} className="h-full">
                <BarChart
                  data={spendByTierData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="tier" />
                  <YAxis name="Amount ($)" />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="fuel" name="Fuel" fill={CHART_COLORS.fuel} />
                  <Bar dataKey="nonFuel" name="Non-Fuel" fill={CHART_COLORS.nonFuel} />
                </BarChart>
              </ChartContainer>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Average monthly spend per driver shown in dollars
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-dashboard-purple" />
              Average Points by Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              <ChartContainer config={pointsChartConfig} className="h-full">
                <BarChart
                  data={pointsByTeamData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="team" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="earned" name="Points Earned" fill={CHART_COLORS.earned} />
                  <Bar dataKey="redeemed" name="Points Redeemed" fill={CHART_COLORS.redeemed} />
                </BarChart>
              </ChartContainer>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Average monthly points earned and redeemed per driver by team
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-dashboard-purple" />
              Team Performance Leaderboard
            </CardTitle>
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center mt-4 sm:mt-0">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filters:</span>
              </div>
              <Select
                value={selectedTeam}
                onValueChange={setSelectedTeam}
              >
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Select team" />
                </SelectTrigger>
                <SelectContent>
                  {teams.map(team => (
                    <SelectItem key={team} value={team}>{team}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={leaderboardView}
                onValueChange={setLeaderboardView}
              >
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="points">Points</SelectItem>
                  <SelectItem value="delivery">On-Time Delivery</SelectItem>
                  <SelectItem value="adherence">Route Adherence</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Driver</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead>Tier</TableHead>
                  <TableHead>Points</TableHead>
                  <TableHead>On-Time %</TableHead>
                  <TableHead>Route Adherence</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedLeaderboard.map((driver) => (
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
                    <TableCell>{driver.team}</TableCell>
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
      </div>
    </div>
  );
};

export default FleetManagerView;
