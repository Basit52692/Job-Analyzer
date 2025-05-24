import React from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Map as MapIcon,
  ArrowUpRight, 
  BarChart3,
  ChevronRight
} from 'lucide-react';
import TrendCard from '../components/cards/TrendCard';
import SkillsChart from '../components/charts/SkillsChart';
import LocationChart from '../components/charts/LocationChart';
import IndustryChart from '../components/charts/IndustryChart';
import { mockTrendData } from '../utils/mockData';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Job Market Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Real-time insights into current job market trends
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center">
          <span className="text-sm font-medium text-gray-500 mr-2">Last updated:</span>
          <span className="text-sm font-medium text-gray-900">Today, 10:30 AM</span>
          <button className="ml-4 px-3 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-100 transition-colors">
            Refresh Data
          </button>
        </div>
      </div>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <TrendCard
          title="Total Job Postings"
          value="243,598"
          change="+5.2%"
          isPositive={true}
          icon={<Briefcase className="text-blue-500" />}
          description="from last month"
        />
        <TrendCard
          title="Trending Skills"
          value="React, AI, Data"
          change="+12.8%"
          isPositive={true}
          icon={<TrendingUp className="text-green-500" />}
          description="in demand growth"
        />
        <TrendCard
          title="Declining Skills"
          value="jQuery, COBOL"
          change="-8.3%"
          isPositive={false}
          icon={<TrendingDown className="text-red-500" />}
          description="in demand reduction"
        />
        <TrendCard
          title="Average Salary"
          value="$86,500"
          change="+2.1%"
          isPositive={true}
          icon={<Users className="text-purple-500" />}
          description="year over year"
        />
      </div>
      
      {/* Main charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills demand chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Skills in Highest Demand</h2>
              <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                View all <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
            <div className="h-80">
              <SkillsChart data={mockTrendData.skillsData} />
            </div>
          </div>
        </div>
        
        {/* Location demand chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Top Job Locations</h2>
              <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                View map <MapIcon size={16} className="ml-1" />
              </button>
            </div>
            <div className="h-80">
              <LocationChart data={mockTrendData.locationData} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Industry trends section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Industry Growth Trends</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              View detailed analysis <BarChart3 size={16} className="ml-1" />
            </button>
          </div>
          <div className="h-80">
            <IndustryChart data={mockTrendData.industryData} />
          </div>
        </div>
      </div>
      
      {/* Trending insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 sm:p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Latest Insights</h2>
          <div className="space-y-4">
            {mockTrendData.insights.map((insight, index) => (
              <div key={index} className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`p-2 rounded-full mr-3 ${insight.categoryColor}`}>
                  {insight.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{insight.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{insight.description}</p>
                </div>
                <div className="ml-2 flex-shrink-0">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${insight.trendColor}`}>
                    {insight.trend} <ArrowUpRight size={12} className="ml-0.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;