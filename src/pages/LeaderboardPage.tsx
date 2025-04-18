
import React from 'react';
import { useTranslation } from 'react-i18next';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import LeaderboardTable from '@/components/dashboard/LeaderboardTable';
import FuelCardSpend from '@/components/dashboard/FuelCardSpend';
import RewardsTab from '@/components/dashboard/RewardsTab';
import RedeemPointsTab from '@/components/dashboard/RedeemPointsTab';
import DriversActionsPanel from '@/components/dashboard/DriversActionsPanel';
import FleetManagerView from '@/components/dashboard/FleetManagerView';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield } from 'lucide-react';

const LeaderboardPage = () => {
  const { t } = useTranslation();

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <DashboardHeader title={t('leaderboard')} />
        
        <Tabs defaultValue="leaderboard" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="leaderboard">{t('tabs.leaderboard')}</TabsTrigger>
            <TabsTrigger value="rewards">{t('tabs.rewards')}</TabsTrigger>
            <TabsTrigger value="redeem">{t('tabs.redeem')}</TabsTrigger>
            <TabsTrigger value="spend">{t('tabs.spend')}</TabsTrigger>
            <TabsTrigger value="manager" className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              <span>{t('tabs.manager')}</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="leaderboard" className="space-y-6">
            <LeaderboardTable />
            <DriversActionsPanel />
          </TabsContent>
          
          <TabsContent value="rewards" className="space-y-6">
            <RewardsTab />
          </TabsContent>

          <TabsContent value="redeem" className="space-y-6">
            <RedeemPointsTab />
          </TabsContent>
          
          <TabsContent value="spend" className="space-y-6">
            <FuelCardSpend />
          </TabsContent>

          <TabsContent value="manager" className="space-y-6">
            <FleetManagerView />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default LeaderboardPage;
