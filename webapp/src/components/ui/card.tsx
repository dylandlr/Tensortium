import React from 'react';

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  className = '', 
  children,
  ...props 
}) => (
  <div className={`bg-white shadow rounded-lg ${className}`} {...props}>
    {children}
  </div>
);

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  className = '', 
  children,
  ...props 
}) => (
  <div className={`px-6 py-4 border-b ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ 
  className = '', 
  children,
  ...props 
}) => (
  <h2 className={`text-xl font-semibold ${className}`} {...props}>
    {children}
  </h2>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  className = '', 
  children,
  ...props 
}) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);
