import React, { useState } from 'react';
import { BarChart3, TrendingUp, TrendingDown, Filter, ChevronDown } from 'lucide-react';
import { mockTrendData } from '../utils/mockData';

interface Industry {
  id: number;
  name: string;
  growth: number;
  jobCount: number;
  avgSalary: string;
  topSkills: string[];
  forecast: 'Growing' | 'Stable' | 'Declining';
}

const IndustryTrends: React.FC = () => {
  const [timeRange, setTimeRange] = useState<string>('3m');
  const [industries] = useState<Industry[]>(mockTrendData.industries);
  
  // Helper function to determine color class based on growth
  const getGrowthColorClass = (growth: number): string => {
    if (growth >= 10) return 'text-green-600 bg-green-50';
    if (growth > 0) return 'text-green-600 bg-green-50';
    if (growth === 0) return 'text-gray-600 bg-gray-50';
    return 'text-red-600 bg-red-50';
  };
  
  // Helper function to get forecast badge color
  const getForecastBadgeClass = (forecast: 'Growing' | 'Stable' | 'Declining'): string => {
    if (forecast === 'Growing') return 'bg-green-100 text-green-800';
    if (forecast === 'Stable') return 'bg-blue-100 text-blue-800';
    return 'bg-red-100 text-red-800';
  };
  
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Industry Trends</h1>
          <p className="mt-1 text-sm text-gray-500">
            Monitor growth patterns across different industries
          </p>
        </div>
      </div>
      
      {/* Time range filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Time Range:</span>
            <div className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  timeRange === '1m' 
                    ? 'bg-blue-100 text-blue-700 border border-blue-500' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setTimeRange('1m')}
              >
                1 Month
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  timeRange === '3m' 
                    ? 'bg-blue-100 text-blue-700 border border-blue-500' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setTimeRange('3m')}
              >
                3 Months
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  timeRange === '6m' 
                    ? 'bg-blue-100 text-blue-700 border border-blue-500' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setTimeRange('6m')}
              >
                6 Months
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  timeRange === '1y' 
                    ? 'bg-blue-100 text-blue-700 border border-blue-500' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setTimeRange('1y')}
              >
                1 Year
              </button>
            </div>
          </div>
          
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
            <Filter size={16} className="mr-2" />
            More Filters
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
      </div>
      
      {/* Growth overview cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div className="bg-green-50 p-3 rounded-lg">
              <TrendingUp size={24} className="text-green-500" />
            </div>
            <span className="text-xl font-bold text-green-600">+12.4%</span>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">Fastest Growing</h3>
          <p className="text-gray-600">Technology</p>
          <div className="mt-3 flex items-center text-sm text-gray-500">
            <span>Cloud Computing leads with +24% growth</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div className="bg-blue-50 p-3 rounded-lg">
              <BarChart3 size={24} className="text-blue-500" />
            </div>
            <span className="text-xl font-bold text-blue-600">+3.7%</span>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">Overall Growth</h3>
          <p className="text-gray-600">All Industries</p>
          <div className="mt-3 flex items-center text-sm text-gray-500">
            <span>Healthcare and Technology driving growth</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div className="bg-red-50 p-3 rounded-lg">
              <TrendingDown size={24} className="text-red-500" />
            </div>
            <span className="text-xl font-bold text-red-600">-5.2%</span>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">Declining</h3>
          <p className="text-gray-600">Retail (Non-Digital)</p>
          <div className="mt-3 flex items-center text-sm text-gray-500">
            <span>Traditional retail continues to decline</span>
          </div>
        </div>
      </div>
      
      {/* Industries table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Industry Growth Comparison</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Industry
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Growth (%)
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Job Postings
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg. Salary
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Top Skills
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Forecast
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {industries.map((industry) => (
                <tr key={industry.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{industry.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${getGrowthColorClass(industry.growth)}`}>
                      {industry.growth > 0 ? (
                        <>
                          <TrendingUp size={14} className="mr-1" />
                          +{industry.growth}%
                        </>
                      ) : industry.growth < 0 ? (
                        <>
                          <TrendingDown size={14} className="mr-1" />
                          {industry.growth}%
                        </>
                      ) : (
                        <>{industry.growth}%</>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {industry.jobCount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {industry.avgSalary}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {industry.topSkills.map((skill, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getForecastBadgeClass(industry.forecast)}`}>
                      {industry.forecast}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IndustryTrends;