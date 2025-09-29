import React from 'react';
import { User } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Disaster Management Dashboard</h1>
        <p className="text-gray-600 mt-1">Monitor and respond to emergency situations</p>
      </div>
      
      <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-sm border">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <User className="h-4 w-4 text-white" />
        </div>
        <span className="font-medium text-gray-700">Admin</span>
      </div>
    </header>
  );
}