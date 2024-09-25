import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-black text-white p-4 text-center">
  <p>&copy; {new Date().getFullYear()} My Blog. All Rights Reserved.</p>
</footer>

    </div>
  );
};

export default Layout;
