
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Tag, Award, Clock, DollarSign } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock rewards data
const rewardsItems = [
  {
    id: 1,
    name: "$25 Gas Card",
    points: 500,
    image: "/placeholder.svg",
    category: "Gift Cards",
    popularity: "hot",
    description: "Redeemable at any participating gas station in our network."
  },
  {
    id: 2,
    name: "Company Branded Jacket",
    points: 1200,
    image: "/placeholder.svg",
    category: "Apparel",
    popularity: "new",
    description: "High-quality weather-resistant jacket with company logo."
  },
  {
    id: 3,
    name: "Bonus PTO Day",
    points: 3000,
    image: "/placeholder.svg",
    category: "Time Off",
    description: "One additional paid time off day to use within the calendar year."
  },
  {
    id: 4,
    name: "$50 Maintenance Credit",
    points: 900,
    image: "/placeholder.svg",
    category: "Vehicle",
    description: "Credit for vehicle maintenance at partner service centers."
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    points: 2200,
    image: "/placeholder.svg",
    category: "Electronics",
    popularity: "hot",
    description: "Premium noise-cancelling wireless earbuds for on-the-go."
  },
  {
    id: 6,
    name: "Family Theme Park Tickets",
    points: 4500,
    image: "/placeholder.svg",
    category: "Entertainment",
    description: "Four tickets to a local theme park of your choice."
  }
];

// Categories for filtering
const categories = ["All", "Gift Cards", "Apparel", "Time Off", "Vehicle", "Electronics", "Entertainment"];

const RedeemPointsTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  
  const filteredRewards = selectedCategory === "All" 
    ? rewardsItems 
    : rewardsItems.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Gift className="h-5 w-5 text-dashboard-purple" />
          <h2 className="text-2xl font-semibold">Rewards Marketplace</h2>
        </div>
        <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg mt-2 sm:mt-0">
          <Award className="h-4 w-4 text-dashboard-purple" />
          <span>Your Points Balance: </span>
          <span className="font-bold text-dashboard-purple">2,430</span>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-3 mb-3">
          <Tag className="h-4 w-4 text-dashboard-purple" />
          <span className="font-medium">Categories:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button 
              key={category} 
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-dashboard-purple" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRewards.map((reward) => (
          <Card key={reward.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-40 bg-gray-200 relative">
              <img 
                src={reward.image} 
                alt={reward.name} 
                className="w-full h-full object-cover" 
              />
              {reward.popularity && (
                <Badge className={`absolute top-2 right-2 ${reward.popularity === 'hot' ? 'bg-red-500' : 'bg-green-500'}`}>
                  {reward.popularity === 'hot' ? 'Popular' : 'New'}
                </Badge>
              )}
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{reward.name}</CardTitle>
              <Badge variant="outline" className="mt-1 w-fit">
                {reward.category}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{reward.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4 text-dashboard-purple" />
                  <span className="font-bold text-dashboard-purple">{reward.points} points</span>
                </div>
                <Button 
                  size="sm" 
                  disabled={reward.points > 2430}
                  className={reward.points > 2430 ? "opacity-50" : ""}
                >
                  Redeem
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RedeemPointsTab;
