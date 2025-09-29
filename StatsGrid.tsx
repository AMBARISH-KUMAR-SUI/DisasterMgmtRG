import React from 'react';
import { AlertTriangle, MapPin, Clock, TrendingUp } from 'lucide-react';

interface StatsGridProps {
  alertCount: number;
}

export default function StatsGrid({ alertCount }: StatsGridProps) {
  const stats = [
    {
      title: 'Active Alerts',
      value: alertCount.toString(),
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      change: '+2 from yesterday',
      changeColor: 'text-red-600',
    },
    {
      title: 'Regions Monitored',
      value: '12',
      icon: MapPin,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      change: '100% coverage',
      changeColor: 'text-green-600',
    },
    {
      title: 'Last Sync',
      value: '2 mins ago',
      icon: Clock,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      change: 'All systems online',
      changeColor: 'text-green-600',
    },
    {
      title: 'Response Time',
      value: '4.2 min',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      change: '15% improvement',
      changeColor: 'text-green-600',
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <IconComponent className={`h-6 w-6 ${stat.color}`} />
              </div>
              <span className={`text-sm font-medium ${stat.changeColor}`}>
                {stat.change}
              </span>
            </div>
            
            <div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}