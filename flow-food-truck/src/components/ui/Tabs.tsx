import React from 'react';

interface TabsProps {
  children: React.ReactNode;
}

export function Tabs({ children }: TabsProps) {
  return <div>{children}</div>;
}

interface TabsListProps {
  children: React.ReactNode;
}

export function TabsList({ children }: TabsListProps) {
  return (
    <div className="flex space-x-1 border-b border-gray-200 mb-6">
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function TabsTrigger({ children, active, onClick }: TabsTriggerProps) {
  return (
    <button
      className={`py-2 px-4 text-sm font-medium ${
        active
          ? 'text-green-600 border-b-2 border-green-600'
          : 'text-gray-500 hover:text-gray-700'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  children: React.ReactNode;
  active?: boolean;
}

export function TabsContent({ children, active }: TabsContentProps) {
  return <div className={active ? 'block' : 'hidden'}>{children}</div>;
} 