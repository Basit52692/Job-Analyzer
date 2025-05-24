import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

interface IndustryData {
  name: string;
  data: {
    month: string;
    value: number;
  }[];
  color: string;
}

interface IndustryChartProps {
  data: {
    months: string[];
    industries: IndustryData[];
  };
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
        <p className="font-medium mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`tooltip-${index}`} className="flex items-center text-sm">
            <div 
              className="w-3 h-3 rounded-full mr-2" 
              style={{ backgroundColor: entry.color }}
            ></div>
            <span>{entry.name}: </span>
            <span className="ml-1 font-medium">{entry.value} jobs</span>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

const IndustryChart: React.FC<IndustryChartProps> = ({ data }) => {
  // Transform data for the chart
  const chartData = data.months.map((month, index) => {
    const dataPoint: any = { month };
    
    data.industries.forEach(industry => {
      dataPoint[industry.name] = industry.data[index].value;
    });
    
    return dataPoint;
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={chartData}
        margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
          dataKey="month" 
          tickLine={false}
          axisLine={{ stroke: '#E5E7EB' }}
        />
        <YAxis 
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ paddingTop: 10 }} />
        
        {data.industries.map((industry, index) => (
          <Line
            key={`line-${index}`}
            type="monotone"
            dataKey={industry.name}
            stroke={industry.color}
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default IndustryChart;