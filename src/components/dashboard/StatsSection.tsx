
import React from 'react';
import { Gauge, Truck, ShieldCheck, TrendingUp } from 'lucide-react';
import MetricCard from './MetricCard';

const StatsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <MetricCard
        title="Weekly Mileage"
        value="587 miles"
        icon={Truck}
        trend={{ value: 12, isPositive: true }}
        description="vs last week"
      />
      <MetricCard
        title="Fuel Efficiency"
        value="28.4 mpg"
        icon={Gauge}
        trend={{ value: 3.5, isPositive: true }}
        description="vs last week"
      />
      <MetricCard
        title="Safety Score"
        value="92/100"
        icon={ShieldCheck}
        trend={{ value: 5, isPositive: true }}
        description="vs last week"
      />
      <MetricCard
        title="Overall Rank"
        value="#3"
        icon={TrendingUp}
        trend={{ value: 2, isPositive: true }}
        description="places up"
      />
    </div>
  );
};

export default StatsSection;
