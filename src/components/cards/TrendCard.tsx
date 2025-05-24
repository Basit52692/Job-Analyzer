import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface TrendCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  description: string;
}

const TrendCard: React.FC<TrendCardProps> = ({
  title,
  value,
  change,
  isPositive,
  icon,
  description
}) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className="p-2 rounded-lg bg-gray-50">{icon}</span>
        <span className={`flex items-center text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
          {isPositive ? (
            <ArrowUpRight size={16} className="ml-1" />
          ) : (
            <ArrowDownRight size={16} className="ml-1" />
          )}
        </span>
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="mt-1 text-xl font-semibold text-gray-900">{value}</p>
        <p className="mt-1 text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default TrendCard;