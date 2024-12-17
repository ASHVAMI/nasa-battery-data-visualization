import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-lg">
        <div className="flex items-center mb-4">
          <AlertTriangle className="text-red-500 mr-2" size={24} />
          <h2 className="text-lg font-semibold text-red-700">Data Loading Error</h2>
        </div>
        <p className="text-red-600">{message}</p>
        <p className="mt-4 text-sm text-gray-600">
          Please try refreshing the page. If the problem persists, the data source might be temporarily unavailable.
        </p>
      </div>
    </div>
  );
};

export default ErrorDisplay;