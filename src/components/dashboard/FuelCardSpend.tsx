
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { BadgeDollarSign, Filter } from 'lucide-react';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

// Mock data for fuel card transactions
const mockTransactionData = [
  {
    month: 'Jan',
    fuel: 450,
    nonFuel: 120,
  },
  {
    month: 'Feb',
    fuel: 470,
    nonFuel: 80,
  },
  {
    month: 'Mar',
    fuel: 520,
    nonFuel: 150,
  },
  {
    month: 'Apr',
    fuel: 490,
    nonFuel: 110,
  },
  {
    month: 'May',
    fuel: 530,
    nonFuel: 140,
  },
  {
    month: 'Jun',
    fuel: 510,
    nonFuel: 170,
  },
];

// Mock regional data
const regions = ['All Regions', 'Northeast', 'Southeast', 'Midwest', 'Northwest', 'Southwest'];

// Mock driver tiers
const driverTiers = ['All Tiers', 'Bronze', 'Silver', 'Gold'];

const chartConfig = {
  fuel: {
    label: "Fuel",
    color: "#6E59A5"
  },
  nonFuel: {
    label: "Non-Fuel",
    color: "#9b87f5"
  }
};

const FuelCardSpend: React.FC = () => {
  const { t } = useTranslation();
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedTier, setSelectedTier] = useState('All Tiers');

  // Mock filtered data - in a real implementation, this would filter based on selections
  // For demo purposes, we're just using the same data
  const filteredData = mockTransactionData;

  return (
    <Card>
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <BadgeDollarSign className="h-5 w-5 text-dashboard-purple" />
          <CardTitle>{t('fuelCard.title')}</CardTitle>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center mt-4 sm:mt-0">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">{t('filters.label')}</span>
          </div>
          <Select
            value={selectedRegion}
            onValueChange={setSelectedRegion}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder={t('filters.region')} />
            </SelectTrigger>
            <SelectContent>
              {regions.map(region => (
                <SelectItem key={region} value={region}>
                  {region === 'All Regions' ? t('filters.allRegions') : region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={selectedTier}
            onValueChange={setSelectedTier}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder={t('fuelCard.driverTier')} />
            </SelectTrigger>
            <SelectContent>
              {driverTiers.map(tier => (
                <SelectItem key={tier} value={tier}>
                  {tier === 'All Tiers' ? t('filters.allTiers') : tier}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ChartContainer config={chartConfig} className="h-full">
            <BarChart
              data={filteredData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis name="Amount ($)" />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="fuel" name={t('fuelCard.avgFuelSpend')} stackId="a" fill="#6E59A5" />
              <Bar dataKey="nonFuel" name={t('fuelCard.nonFuelTransactions')} stackId="a" fill="#9b87f5" />
            </BarChart>
          </ChartContainer>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-500 mb-1">{t('fuelCard.avgFuelSpend')}</h4>
            <p className="text-2xl font-bold text-dashboard-dark">$495.00</p>
            <p className="text-sm text-green-600">+5.2% {t('fuelCard.fromLastMonth')}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-500 mb-1">{t('fuelCard.nonFuelTransactions')}</h4>
            <p className="text-2xl font-bold text-dashboard-dark">$128.33</p>
            <p className="text-sm text-green-600">+12.8% {t('fuelCard.fromLastMonth')}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FuelCardSpend;
