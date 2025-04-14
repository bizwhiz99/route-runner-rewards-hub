
import React, { useState } from 'react';
import { ArrowUpDown, Trophy, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

// Sample driver data
const drivers = [
  {
    id: 1,
    name: "John Doe",
    avatar: "/placeholder.svg",
    team: "East Coast",
    region: "Northeast",
    mileage: 587,
    safetyScore: 92,
    fuelEfficiency: 28.4,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "/placeholder.svg",
    team: "West Coast",
    region: "Northwest",
    mileage: 612,
    safetyScore: 95,
    fuelEfficiency: 30.2,
  },
  {
    id: 3,
    name: "Robert Johnson",
    avatar: "/placeholder.svg",
    team: "East Coast",
    region: "Southeast",
    mileage: 548,
    safetyScore: 88,
    fuelEfficiency: 26.7,
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "/placeholder.svg",
    team: "Central",
    region: "Midwest",
    mileage: 492,
    safetyScore: 90,
    fuelEfficiency: 29.1,
  },
  {
    id: 5,
    name: "Michael Wilson",
    avatar: "/placeholder.svg",
    team: "West Coast",
    region: "Southwest",
    mileage: 601,
    safetyScore: 87,
    fuelEfficiency: 27.9,
  },
];

type SortField = "mileage" | "safetyScore" | "fuelEfficiency";

const LeaderboardTable: React.FC = () => {
  const [filter, setFilter] = useState<"team" | "region">("team");
  const [sortBy, setSortBy] = useState<SortField>("mileage");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const handleSort = (field: SortField) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDirection("desc");
    }
  };

  const sortedDrivers = [...drivers].sort((a, b) => {
    const compareValue = sortDirection === "asc" 
      ? a[sortBy] - b[sortBy] 
      : b[sortBy] - a[sortBy];
    
    return compareValue;
  });

  const renderRankBadge = (index: number) => {
    if (index === 0) return <Badge className="bg-yellow-500">1st</Badge>;
    if (index === 1) return <Badge className="bg-gray-400">2nd</Badge>;
    if (index === 2) return <Badge className="bg-amber-700">3rd</Badge>;
    return <Badge variant="outline">{index + 1}th</Badge>;
  };

  return (
    <Card>
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-dashboard-purple" />
          <CardTitle>Driver Leaderboard</CardTitle>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center mt-4 sm:mt-0">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6">
              {filter === "team" ? <Users className="h-4 w-4" /> : <Globe className="h-4 w-4" />}
            </div>
            <span className="text-sm font-medium">Group by:</span>
          </div>
          <Select
            value={filter}
            onValueChange={(value: "team" | "region") => setFilter(value)}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Select filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="team">Team</SelectItem>
              <SelectItem value="region">Region</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Rank</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>{filter === "team" ? "Team" : "Region"}</TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("mileage")}>
                <div className="flex items-center">
                  Mileage
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("safetyScore")}>
                <div className="flex items-center">
                  Safety
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("fuelEfficiency")}>
                <div className="flex items-center">
                  Fuel Efficiency
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedDrivers.map((driver, index) => (
              <TableRow key={driver.id}>
                <TableCell>{renderRankBadge(index)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={driver.avatar} />
                      <AvatarFallback>{driver.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{driver.name}</span>
                  </div>
                </TableCell>
                <TableCell>{filter === "team" ? driver.team : driver.region}</TableCell>
                <TableCell>{driver.mileage} miles</TableCell>
                <TableCell>{driver.safetyScore}/100</TableCell>
                <TableCell>{driver.fuelEfficiency} mpg</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default LeaderboardTable;
