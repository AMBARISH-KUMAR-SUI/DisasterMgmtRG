import React from 'react';
import { 
  BarChart3, 
  AlertTriangle, 
  Map, 
  TrendingUp, 
  Settings,
  Shield
} from 'lucide-react';

const navigationItems = [
  { icon: BarChart3, label: 'Dashboard', active: true },
  { icon: AlertTriangle, label: 'Alerts', active: false },
  { icon: Map, label: 'Map View', active: false },
  { icon: TrendingUp, label: 'Analytics', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white p-6">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="h-8 w-8 text-blue-400" />
        <span className="text-xl font-bold">DisasterMgmt</span>
      </div>
      
      <nav className="space-y-2">
        {navigationItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <a
              key={index}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                item.active
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <IconComponent className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}