
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StatsSection from '@/components/dashboard/StatsSection';
import PerformanceCharts from '@/components/dashboard/PerformanceCharts';
import LeaderboardTable from '@/components/dashboard/LeaderboardTable';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <DashboardHeader title="Driver Performance Dashboard" />
        <StatsSection />
        <PerformanceCharts />
        <LeaderboardTable />
      </div>
    </DashboardLayout>
  );
};

export default Index;
