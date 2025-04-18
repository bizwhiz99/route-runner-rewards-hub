
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpDown, Trophy, Users, Globe, Flag, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

// Enhanced sample driver data with movement indicators and team flags
const drivers = [
  {
    id: 1,
    name: "John Doe",
    avatar: "/placeholder.svg",
    team: "East Coast",
    teamFlag: "🔵", // Blue flag for East Coast
    region: "Northeast",
    mileage: 587,
    safetyScore: 92,
    fuelEfficiency: 28.4,
    movement: -1,
    driverXP: 2450,
    streak: 4,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "/placeholder.svg",
    team: "West Coast",
    teamFlag: "🟢", // Green flag for West Coast
    region: "Northwest",
    mileage: 612,
    safetyScore: 95,
    fuelEfficiency: 30.2,
    movement: 2,
    driverXP: 3120,
    streak: 8,
  },
  {
    id: 3,
    name: "Robert Johnson",
    avatar: "/placeholder.svg",
    team: "East Coast",
    teamFlag: "🔵",
    region: "Southeast",
    mileage: 548,
    safetyScore: 88,
    fuelEfficiency: 26.7,
    movement: 0,
    driverXP: 1980,
    streak: 2,
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "/placeholder.svg",
    team: "Central",
    teamFlag: "🟠", // Orange flag for Central
    region: "Midwest",
    mileage: 492,
    safetyScore: 90,
    fuelEfficiency: 29.1,
    movement: 3,
    driverXP: 2240,
    streak: 6,
  },
  {
    id: 5,
    name: "Michael Wilson",
    avatar: "/placeholder.svg",
    team: "West Coast",
    teamFlag: "🟢",
    region: "Southwest",
    mileage: 601,
    safetyScore: 87,
    fuelEfficiency: 27.9,
    movement: -2,
    driverXP: 2105,
    streak: 0,
  },
];

type SortField = "mileage" | "safetyScore" | "fuelEfficiency" | "driverXP" | "streak";

const LeaderboardTable: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<"team" | "region">("team");
  const [sortBy, setSortBy] = useState<SortField>("driverXP");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [showAnimation, setShowAnimation] = useState(false);

  const handleSort = (field: SortField) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDirection("desc");
    }
    
    // Trigger animation effect
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 800);
  };

  const sortedDrivers = [...drivers].sort((a, b) => {
    const compareValue = sortDirection === "asc" 
      ? a[sortBy] - b[sortBy] 
      : b[sortBy] - a[sortBy];
    
    return compareValue;
  });

  const renderRankBadge = (index: number) => {
    if (index === 0) return (
      <div className="relative">
        <Badge className="bg-yellow-500">1st</Badge>
        {showAnimation && (
          <div className="absolute inset-0 bg-yellow-500 rounded-md animate-ping opacity-75"></div>
        )}
      </div>
    );
    if (index === 1) return <Badge className="bg-gray-400">2nd</Badge>;
    if (index === 2) return <Badge className="bg-amber-700">3rd</Badge>;
    return <Badge variant="outline">{index + 1}th</Badge>;
  };

  const renderMovement = (movement: number) => {
    if (movement > 0) {
      return (
        <div className="flex items-center text-green-500">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span>+{movement}</span>
        </div>
      );
    } else if (movement < 0) {
      return (
        <div className="flex items-center text-red-500">
          <TrendingDown className="h-4 w-4 mr-1" />
          <span>{movement}</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center text-gray-400">
          <Minus className="h-4 w-4 mr-1" />
          <span>0</span>
        </div>
      );
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-dashboard-purple" />
          <CardTitle>{t('leaderboard.driverLeaderboard')}</CardTitle>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center mt-4 sm:mt-0">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6">
              {filter === "team" ? <Users className="h-4 w-4" /> : <Globe className="h-4 w-4" />}
            </div>
            <span className="text-sm font-medium">{t('leaderboard.groupBy')}:</span>
          </div>
          <Select
            value={filter}
            onValueChange={(value: "team" | "region") => setFilter(value)}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder={t('leaderboard.selectFilter')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="team">{t('team')}</SelectItem>
              <SelectItem value="region">{t('region')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">{t('rank')}</TableHead>
              <TableHead>{t('driver')}</TableHead>
              <TableHead>{filter === "team" ? t('team') : t('region')}</TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("mileage")}>
                <div className="flex items-center">
                  {t('leaderboard.mileage')}
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("safetyScore")}>
                <div className="flex items-center">
                  {t('leaderboard.safety')}
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("fuelEfficiency")}>
                <div className="flex items-center">
                  {t('leaderboard.fuelEfficiency')}
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("driverXP")}>
                <div className="flex items-center">
                  <span className="text-dashboard-purple font-medium">XP</span>
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("streak")}>
                <div className="flex items-center">
                  <Flame className="h-4 w-4 text-orange-500 mr-1" />
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="text-center">{t('leaderboard.movement')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedDrivers.map((driver, index) => (
              <TableRow key={driver.id} className={showAnimation && index === 0 ? "animate-pulse bg-yellow-50" : ""}>
                <TableCell>{renderRankBadge(index)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8 border-2 border-dashboard-purple">
                      <AvatarImage src={driver.avatar} />
                      <AvatarFallback>{driver.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{driver.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="text-lg" role="img" aria-label="team flag">
                      {driver.teamFlag}
                    </span>
                    <span>{filter === "team" ? driver.team : driver.region}</span>
                  </div>
                </TableCell>
                <TableCell>{driver.mileage} {t('leaderboard.milesLabel')}</TableCell>
                <TableCell>{driver.safetyScore}/100</TableCell>
                <TableCell>{driver.fuelEfficiency} {t('leaderboard.mpg')}</TableCell>
                <TableCell>
                  <Badge className="bg-dashboard-purple">{driver.driverXP}</Badge>
                </TableCell>
                <TableCell>
                  {driver.streak > 0 ? (
                    <div className="flex items-center">
                      <Flame className={`h-4 w-4 ${driver.streak > 5 ? 'text-orange-500' : 'text-orange-300'}`} />
                      <span className="ml-1">{driver.streak}</span>
                    </div>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {renderMovement(driver.movement)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default LeaderboardTable;
