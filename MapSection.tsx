import React from 'react';
import { MapPin, Zap, AlertCircle } from 'lucide-react';

export default function MapSection() {
  const incidents = [
    { id: 1, type: 'fire', location: 'Downtown District', severity: 'high', icon: Zap, color: 'text-red-500' },
    { id: 2, type: 'flood', location: 'River Valley', severity: 'medium', icon: AlertCircle, color: 'text-orange-500' },
    { id: 3, type: 'earthquake', location: 'North Hills', severity: 'low', icon: MapPin, color: 'text-yellow-500' },
  ];

  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Live Incident Map</h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Live monitoring active
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 min-h-96 relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-blue-200"></div>
            ))}
          </div>
        </div>

        {/* Map incidents */}
        <div className="relative z-10 h-full">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">Interactive Map View</h3>
              <p className="text-gray-500 mb-6">Showing real-time incident locations and severity levels</p>
              
              {/* Incident markers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {incidents.map((incident) => {
                  const IconComponent = incident.icon;
                  return (
                    <div key={incident.id} className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-white/50">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className={`h-5 w-5 ${incident.color}`} />
                        <span className="font-medium capitalize">{incident.type}</span>
                      </div>
                      <p className="text-sm text-gray-600">{incident.location}</p>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${
                        incident.severity === 'high' ? 'bg-red-100 text-red-800' :
                        incident.severity === 'medium' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {incident.severity} priority
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}