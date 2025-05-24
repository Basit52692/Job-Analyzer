import React from 'react';
import { 
  LineChart, 
  BarChart3, 
  Users, 
  Briefcase, 
  GraduationCap, 
  Building2,
  ArrowRight
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 sm:p-8 md:p-10">
          <h1 className="text-3xl font-bold text-gray-900">About Job Trend Analyzer</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            Our platform leverages real-time data to provide actionable insights into the job market. 
            We help job seekers, employers, educators, and policymakers make informed decisions based on current trends.
          </p>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <LineChart size={28} className="mx-auto text-blue-600 mb-2" />
              <p className="font-medium text-blue-900">Real-time Data</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <BarChart3 size={28} className="mx-auto text-green-600 mb-2" />
              <p className="font-medium text-green-900">Insightful Analytics</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <Briefcase size={28} className="mx-auto text-purple-600 mb-2" />
              <p className="font-medium text-purple-900">Industry Trends</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 text-center">
              <Users size={28} className="mx-auto text-amber-600 mb-2" />
              <p className="font-medium text-amber-900">User-Focused</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mission section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            We believe that access to accurate, timely job market data is essential in today's rapidly evolving economy. 
            Our mission is to democratize this information, making it accessible and actionable for everyone from job seekers 
            to business leaders and policymakers.
          </p>
          <p className="text-gray-600 mt-4">
            By analyzing millions of job postings in real-time, we identify trends that help individuals and organizations 
            adapt to changing market conditions and make data-driven decisions about their careers and workforce strategies.
          </p>
        </div>
      </div>
      
      {/* How it works */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <span className="text-blue-700 text-xl font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Data Collection</h3>
                <p className="text-gray-600 mt-1">
                  We continuously collect and process job posting data from major employment websites, company career pages, and other sources.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <span className="text-blue-700 text-xl font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Analysis</h3>
                <p className="text-gray-600 mt-1">
                  Our algorithms analyze the data to identify patterns, trends, and insights related to skills, roles, industries, and locations.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <span className="text-blue-700 text-xl font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Visualization</h3>
                <p className="text-gray-600 mt-1">
                  We present the insights in easy-to-understand visualizations and interactive dashboards, making complex data accessible.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <span className="text-blue-700 text-xl font-bold">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Actionable Insights</h3>
                <p className="text-gray-600 mt-1">
                  Users can make informed decisions based on current market trends, whether they're looking for a job, hiring talent, or planning educational programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Who can benefit */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Can Benefit</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Briefcase size={24} className="text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Job Seekers</h3>
                <p className="text-gray-600 mt-1">
                  Discover which skills are in demand, which industries are growing, and where the best opportunities are located to make strategic career decisions.
                </p>
                <a href="#" className="inline-flex items-center mt-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="p-3 bg-green-50 rounded-lg">
                  <Building2 size={24} className="text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Employers</h3>
                <p className="text-gray-600 mt-1">
                  Understand market rates, competitive skills, and talent availability to optimize recruiting strategies and workforce planning.
                </p>
                <a href="#" className="inline-flex items-center mt-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <GraduationCap size={24} className="text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Educators</h3>
                <p className="text-gray-600 mt-1">
                  Align curriculum with real market needs, preparing students with relevant skills that will help them succeed in their careers.
                </p>
                <a href="#" className="inline-flex items-center mt-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="p-3 bg-amber-50 rounded-lg">
                  <Users size={24} className="text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Policymakers</h3>
                <p className="text-gray-600 mt-1">
                  Gain insights into economic trends, skill gaps, and workforce development needs to create effective policies and programs.
                </p>
                <a href="#" className="inline-flex items-center mt-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            Have questions or feedback? We'd love to hear from you. Contact our team for assistance with anything related to Job Trend Analyzer.
          </p>
          
          <button className="mt-6 px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;