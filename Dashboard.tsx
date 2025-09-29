import React, { useState } from 'react';
import Header from './Header';
import AlertControls from './AlertControls';
import MapSection from './MapSection';
import StatsGrid from './StatsGrid';

export default function Dashboard() {
  const [alertCount, setAlertCount] = useState(3);

  const handleAlertSent = () => {
    setAlertCount(prev => prev + 1);
  };

  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <Header />
      <div className="space-y-8">
        <AlertControls onAlertSent={handleAlertSent} />
        <MapSection />
        <StatsGrid alertCount={alertCount} />
      </div>
    </main>
  );
}