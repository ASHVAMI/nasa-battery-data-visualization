import React from 'react';
import { Battery } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="flex items-center mb-6">
      <Battery className="text-blue-600 mr-2" size={32} />
      <h1 className="text-3xl font-bold text-gray-800">
        NASA Battery Impedance Analysis
      </h1>
    </div>
  );
};

export default Header;