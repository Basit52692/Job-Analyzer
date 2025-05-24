import React from 'react';
import { 
  BarChart3, 
  Cpu, 
  Globe, 
  Briefcase, 
  Microscope, 
  HeartPulse, 
  DollarSign, 
  BookOpen
} from 'lucide-react';

// Mock data for charts and insights
export const mockTrendData = {
  // Skills data for bar chart
  skillsData: [
    { name: 'React', value: 12500, color: '#3B82F6' },
    { name: 'Python', value: 10800, color: '#10B981' },
    { name: 'Data Science', value: 8500, color: '#8B5CF6' },
    { name: 'AWS', value: 7200, color: '#F59E0B' },
    { name: 'Machine Learning', value: 6800, color: '#EC4899' },
    { name: 'JavaScript', value: 6500, color: '#6366F1' },
    { name: 'Cloud Computing', value: 5800, color: '#14B8A6' },
    { name: 'Node.js', value: 5200, color: '#F97316' }
  ],
  
  // Location data for pie chart
  locationData: [
    { name: 'Karachi', value: 15000, color: '#3B82F6' },
    { name: 'Lahore', value: 12000, color: '#10B981' },
    { name: 'Islamabad', value: 8000, color: '#8B5CF6' },
    { name: 'Rawalpindi', value: 5000, color: '#F59E0B' },
    { name: 'Faisalabad', value: 3500, color: '#EC4899' },
    { name: 'Other Cities', value: 6500, color: '#6B7280' }
  ],
  
  // Industry data for line chart
  industryData: {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    industries: [
      {
        name: 'Technology',
        data: [
          { month: 'Jan', value: 12000 },
          { month: 'Feb', value: 12800 },
          { month: 'Mar', value: 13500 },
          { month: 'Apr', value: 14200 },
          { month: 'May', value: 15000 },
          { month: 'Jun', value: 15800 }
        ],
        color: '#3B82F6'
      },
      {
        name: 'Textile',
        data: [
          { month: 'Jan', value: 8000 },
          { month: 'Feb', value: 8200 },
          { month: 'Mar', value: 8500 },
          { month: 'Apr', value: 8800 },
          { month: 'May', value: 9200 },
          { month: 'Jun', value: 9500 }
        ],
        color: '#10B981'
      },
      {
        name: 'E-commerce',
        data: [
          { month: 'Jan', value: 5000 },
          { month: 'Feb', value: 5500 },
          { month: 'Mar', value: 6000 },
          { month: 'Apr', value: 6800 },
          { month: 'May', value: 7500 },
          { month: 'Jun', value: 8200 }
        ],
        color: '#8B5CF6'
      },
      {
        name: 'Manufacturing',
        data: [
          { month: 'Jan', value: 7000 },
          { month: 'Feb', value: 7200 },
          { month: 'Mar', value: 7400 },
          { month: 'Apr', value: 7500 },
          { month: 'May', value: 7600 },
          { month: 'Jun', value: 7800 }
        ],
        color: '#F59E0B'
      }
    ]
  },
  
  // Latest insights
  insights: [
    {
      title: 'Tech Sector Growth in Pakistan',
      description: 'IT exports and local tech jobs show a 32% increase in the last quarter.',
      trend: '32%',
      categoryColor: 'bg-blue-100',
      trendColor: 'bg-green-100 text-green-800',
      icon: React.createElement(Cpu, { size: 20, className: "text-blue-600" })
    },
    {
      title: 'Freelance Market Expansion',
      description: 'Pakistan ranks among top 5 countries for freelance tech services growth.',
      trend: '45%',
      categoryColor: 'bg-purple-100',
      trendColor: 'bg-green-100 text-green-800',
      icon: React.createElement(Globe, { size: 20, className: "text-purple-600" })
    },
    {
      title: 'E-commerce Sector Boom',
      description: 'Digital marketplace jobs have doubled with increased online shopping adoption.',
      trend: '98%',
      categoryColor: 'bg-amber-100',
      trendColor: 'bg-green-100 text-green-800',
      icon: React.createElement(BarChart3, { size: 20, className: "text-amber-600" })
    },
    {
      title: 'Textile Industry Evolution',
      description: 'Traditional textile sector embracing digital transformation and tech roles.',
      trend: '25%',
      categoryColor: 'bg-green-100',
      trendColor: 'bg-green-100 text-green-800',
      icon: React.createElement(Briefcase, { size: 20, className: "text-green-600" })
    }
  ],
  
  // Detailed skills data
  detailedSkills: [
    {
      id: 1,
      name: 'React',
      category: 'frontend',
      growth: 42,
      demandLevel: 'High',
      averageSalary: 'PKR 120,000',
      postings: 12500
    },
    {
      id: 2,
      name: 'Python',
      category: 'backend',
      growth: 38,
      demandLevel: 'High',
      averageSalary: 'PKR 115,000',
      postings: 10800
    },
    {
      id: 3,
      name: 'AWS',
      category: 'cloud',
      growth: 45,
      demandLevel: 'High',
      averageSalary: 'PKR 150,000',
      postings: 7200
    },
    {
      id: 4,
      name: 'Machine Learning',
      category: 'data',
      growth: 52,
      demandLevel: 'High',
      averageSalary: 'PKR 160,000',
      postings: 6800
    },
    {
      id: 5,
      name: 'JavaScript',
      category: 'frontend',
      growth: 35,
      demandLevel: 'High',
      averageSalary: 'PKR 100,000',
      postings: 6500
    }
  ],
  
  // Industry data
  industries: [
    {
      id: 1,
      name: 'Technology',
      growth: 32.5,
      jobCount: 15800,
      avgSalary: 'PKR 120,000',
      topSkills: ['React', 'Python', 'AWS'],
      forecast: 'Growing'
    },
    {
      id: 2,
      name: 'E-commerce',
      growth: 98.2,
      jobCount: 8200,
      avgSalary: 'PKR 90,000',
      topSkills: ['Digital Marketing', 'Web Development', 'Analytics'],
      forecast: 'Growing'
    },
    {
      id: 3,
      name: 'Textile',
      growth: 12.4,
      jobCount: 9500,
      avgSalary: 'PKR 85,000',
      topSkills: ['Supply Chain', 'Quality Control', 'Production'],
      forecast: 'Stable'
    },
    {
      id: 4,
      name: 'Manufacturing',
      growth: 8.5,
      jobCount: 7800,
      avgSalary: 'PKR 75,000',
      topSkills: ['Operations', 'Automation', 'Quality Management'],
      forecast: 'Stable'
    }
  ],
  
  // Location data
  locations: [
    {
      id: 1,
      city: 'Karachi',
      state: 'Sindh',
      country: 'Pakistan',
      jobCount: 15000,
      growth: 28.5,
      topIndustries: ['Technology', 'Finance'],
      topCompanies: ['Systems Ltd', 'P@SHA', 'Netsol'],
      avgSalary: 'PKR 120,000'
    },
    {
      id: 2,
      city: 'Lahore',
      state: 'Punjab',
      country: 'Pakistan',
      jobCount: 12000,
      growth: 25.2,
      topIndustries: ['IT', 'E-commerce'],
      topCompanies: ['Arbisoft', 'Techlogix', 'DevsinC'],
      avgSalary: 'PKR 110,000'
    },
    {
      id: 3,
      city: 'Islamabad',
      state: 'Federal',
      country: 'Pakistan',
      jobCount: 8000,
      growth: 32.8,
      topIndustries: ['Technology', 'Telecom'],
      topCompanies: ['Jazz', 'Telenor', 'PTCL'],
      avgSalary: 'PKR 125,000'
    },
    {
      id: 4,
      city: 'Rawalpindi',
      state: 'Punjab',
      country: 'Pakistan',
      jobCount: 5000,
      growth: 18.5,
      topIndustries: ['IT', 'Defense'],
      topCompanies: ['CARE', 'NetSol', 'TRG'],
      avgSalary: 'PKR 95,000'
    }
  ]
};