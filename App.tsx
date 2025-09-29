import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;