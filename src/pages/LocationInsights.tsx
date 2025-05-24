import React, { useState } from 'react';
import { Search, MapPin, Briefcase, TrendingUp, Building, Download, Filter } from 'lucide-react';
import { mockTrendData } from '../utils/mockData';

interface Location {
  id: number;
  city: string;
  state: string;
  country: string;
  jobCount: number;
  growth: number;
  topIndustries: string[];
  topCompanies: string[];
  avgSalary: string;
}

const LocationInsights: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeView, setActiveView] = useState<'us' | 'global'>('us');
  const [locations] = useState<Location[]>(mockTrendData.locations);
  
  // Filter locations based on search query
  const filteredLocations = locations.filter(location => {
    const searchLower = searchQuery.toLowerCase();
    return (
      location.city.toLowerCase().includes(searchLower) ||
      location.state.toLowerCase().includes(searchLower) ||
      location.country.toLowerCase().includes(searchLower)
    );
  });
  
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Location Insights</h1>
          <p className="mt-1 text-sm text-gray-500">
            Discover which locations have the most job opportunities
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Filter size={16} className="mr-2" />
            Filters
          </button>
          <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Download size={16} className="mr-2" />
            Export
          </button>
        </div>
      </div>
      
      {/* Search and view toggle */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 w-full sm:w-64 lg:w-80 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeView === 'us' 
                  ? 'bg-blue-100 text-blue-700 border border-blue-500' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setActiveView('us')}
            >
              United States
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeView === 'global' 
                  ? 'bg-blue-100 text-blue-700 border border-blue-500' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setActiveView('global')}
            >
              Global
            </button>
          </div>
        </div>
      </div>
      
      {/* Map placeholder */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Job Opportunity Heat Map</h2>
          <p className="text-sm text-gray-500 mt-1">
            Darker regions indicate higher concentration of job opportunities
          </p>
        </div>
        <div className="h-96 bg-gray-100 flex items-center justify-center">
          <div className="text-center p-6">
            <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-lg font-medium text-gray-600">
              Interactive job map would appear here
            </p>
            <p className="text-sm text-gray-500 mt-2 max-w-md">
              This visualization would show job density across {activeView === 'us' ? 'the United States' : 'the world'} with interactive tooltips showing key metrics for each region.
            </p>
          </div>
        </div>
      </div>
      
      {/* Top locations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Top Job Locations</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredLocations.map((location) => (
            <div key={location.id} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="bg-blue-50 p-2 rounded-lg mr-3">
                    <MapPin size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{location.city}</h3>
                    <p className="text-sm text-gray-500">{location.state}, {location.country}</p>
                  </div>
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  location.growth > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendingUp size={16} className="mr-1" />
                  {location.growth > 0 ? '+' : ''}{location.growth}%
                </div>
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center">
                  <Briefcase size={16} className="text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{location.jobCount.toLocaleString()} job postings</span>
                </div>
                <div className="flex items-center">
                  <Building size={16} className="text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">Top: {location.topIndustries.join(', ')}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-900">{location.avgSalary} avg. salary</span>
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t border-gray-100">
                <span className="text-xs font-medium text-gray-500">TOP COMPANIES</span>
                <div className="mt-2 flex flex-wrap gap-1">
                  {location.topCompanies.map((company, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredLocations.length === 0 && (
          <div className="text-center py-8">
            <MapPin size={36} className="mx-auto text-gray-400 mb-3" />
            <p className="text-gray-600 font-medium">No locations found</p>
            <p className="text-sm text-gray-500 mt-1">Try adjusting your search query</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationInsights;