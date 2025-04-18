
import React from 'react';
import { Gauge, Truck, ShieldCheck, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import MetricCard from './MetricCard';

const StatsSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <MetricCard
        title={t('metrics.weeklyMileage')}
        value={`587 ${t('metrics.milesLabel')}`}
        icon={Truck}
        trend={{ value: 12, isPositive: true }}
        description="vs last week"
      />
      <MetricCard
        title={t('metrics.fuelEfficiency')}
        value="28.4 mpg"
        icon={Gauge}
        trend={{ value: 3.5, isPositive: true }}
        description="vs last week"
      />
      <MetricCard
        title={t('metrics.safetyScore')}
        value="92/100"
        icon={ShieldCheck}
        trend={{ value: 5, isPositive: true }}
        description="vs last week"
      />
      <MetricCard
        title={t('metrics.overallRank')}
        value="#3"
        icon={TrendingUp}
        trend={{ value: 2, isPositive: true }}
        description={t('metrics.placesUp')}
      />
    </div>
  );
};

export default StatsSection;
