import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Toaster } from 'react-hot-toast';

interface MainLayoutProps {
  children: React.ReactNode;
  userId?: string;
}

export function MainLayout({ children, userId }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userId={userId} />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
      
      <Toaster position="top-right" />
    </div>
  );
} 