
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import LeaderboardTable from '@/components/dashboard/LeaderboardTable';
import FuelCardSpend from '@/components/dashboard/FuelCardSpend';
import RewardsTab from '@/components/dashboard/RewardsTab';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LeaderboardPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <DashboardHeader title="Driver Leaderboard & Rewards" />
        
        <Tabs defaultValue="leaderboard" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="rewards">Rewards Program</TabsTrigger>
            <TabsTrigger value="spend">Card Spend</TabsTrigger>
          </TabsList>
          
          <TabsContent value="leaderboard" className="space-y-6">
            <LeaderboardTable />
          </TabsContent>
          
          <TabsContent value="rewards" className="space-y-6">
            <RewardsTab />
          </TabsContent>
          
          <TabsContent value="spend" className="space-y-6">
            <FuelCardSpend />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default LeaderboardPage;
