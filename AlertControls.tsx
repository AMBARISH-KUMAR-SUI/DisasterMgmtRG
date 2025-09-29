import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, X } from 'lucide-react';

interface AlertControlsProps {
  onAlertSent: () => void;
}

export default function AlertControls({ onAlertSent }: AlertControlsProps) {
  const [showFeedback, setShowFeedback] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendAlert = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setShowFeedback(true);
    onAlertSent();
    
    // Hide feedback after 4 seconds
    setTimeout(() => {
      setShowFeedback(false);
    }, 4000);
  };

  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Emergency Controls</h2>
      
      <div className="flex items-center gap-4">
        <button
          onClick={handleSendAlert}
          disabled={isLoading}
          className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 active:bg-red-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <AlertTriangle className="h-5 w-5" />
          {isLoading ? 'Dispatching...' : 'Trigger Emergency Alert'}
        </button>

        {showFeedback && (
          <div className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-lg border border-green-200 animate-fade-in">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Alert dispatched successfully to all monitored regions!</span>
            <button
              onClick={() => setShowFeedback(false)}
              className="ml-2 text-green-600 hover:text-green-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}