
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import LeaderboardTable from '@/components/dashboard/LeaderboardTable';

const LeaderboardPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <DashboardHeader title="Driver Leaderboard" />
        <LeaderboardTable />
      </div>
    </DashboardLayout>
  );
};

export default LeaderboardPage;
