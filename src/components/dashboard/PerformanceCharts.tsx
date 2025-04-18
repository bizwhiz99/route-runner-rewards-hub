import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const weeklyData = [
  { day: 'Mon', miles: 110, safety: 88, fuel: 27 },
  { day: 'Tue', miles: 85, safety: 92, fuel: 28 },
  { day: 'Wed', miles: 97, safety: 95, fuel: 30 },
  { day: 'Thu', miles: 130, safety: 90, fuel: 26 },
  { day: 'Fri', miles: 100, safety: 94, fuel: 29 },
  { day: 'Sat', miles: 40, safety: 97, fuel: 32 },
  { day: 'Sun', miles: 25, safety: 96, fuel: 31 },
];

const monthlyData = [
  { week: 'Week 1', miles: 510, safety: 86, fuel: 26 },
  { week: 'Week 2', miles: 540, safety: 89, fuel: 27 },
  { week: 'Week 3', miles: 587, safety: 92, fuel: 28 },
  { week: 'Week 4', miles: 530, safety: 93, fuel: 29 },
];

const PerformanceCharts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>{t('metrics.mileageTracking')}</CardTitle>
          <CardDescription>{t('metrics.distance')}</CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <Tabs defaultValue="weekly" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="weekly">{t('metrics.weekly')}</TabsTrigger>
              <TabsTrigger value="monthly">{t('metrics.monthly')}</TabsTrigger>
            </TabsList>
            <TabsContent value="weekly" className="space-y-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="miles" name={t('metrics.miles')} fill="#9b87f5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="monthly" className="space-y-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="miles" name={t('metrics.miles')} fill="#9b87f5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('metrics.performanceMetrics')}</CardTitle>
          <CardDescription>{t('metrics.safetyScores')}</CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <Tabs defaultValue="weekly" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="weekly">{t('metrics.weekly')}</TabsTrigger>
              <TabsTrigger value="monthly">{t('metrics.monthly')}</TabsTrigger>
            </TabsList>
            <TabsContent value="weekly" className="space-y-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis yAxisId="left" orientation="left" stroke="#0EA5E9" />
                    <YAxis yAxisId="right" orientation="right" stroke="#F97316" />
                    <Tooltip />
                    <Legend />
                    <Line 
                      yAxisId="left" 
                      type="monotone" 
                      dataKey="safety" 
                      name={t('metrics.safetyScore')} 
                      stroke="#0EA5E9" 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      yAxisId="right" 
                      type="monotone" 
                      dataKey="fuel" 
                      name={t('metrics.fuelEfficiency')} 
                      stroke="#F97316" 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="monthly" className="space-y-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis yAxisId="left" orientation="left" stroke="#0EA5E9" />
                    <YAxis yAxisId="right" orientation="right" stroke="#F97316" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="safety" name={t('metrics.safetyScore')} stroke="#0EA5E9" activeDot={{ r: 8 }} />
                    <Line yAxisId="right" type="monotone" dataKey="fuel" name={t('metrics.fuelEfficiency')} stroke="#F97316" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceCharts;
