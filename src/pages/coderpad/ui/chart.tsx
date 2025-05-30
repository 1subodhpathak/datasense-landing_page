import React from 'react';

interface ChartConfig {
  [key: string]: {
    label: string;
    color: string;
  };
}

interface ChartContainerProps {
  children: React.ReactNode;
  config: ChartConfig;
  className?: string;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};

interface ChartTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

export const ChartTooltip: React.FC<ChartTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700 rounded shadow-lg">
        <p className="text-sm font-medium">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const ChartTooltipContent: React.FC<ChartTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700 rounded shadow-lg">
        <p className="text-sm font-medium">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
}; 