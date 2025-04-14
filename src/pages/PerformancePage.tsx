
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import PerformanceCharts from '@/components/dashboard/PerformanceCharts';
import FuelCardSpend from '@/components/dashboard/FuelCardSpend';

const PerformancePage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <DashboardHeader title="Driver Performance" />
        <PerformanceCharts />
        <FuelCardSpend />
      </div>
    </DashboardLayout>
  );
};

export default PerformancePage;
