import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between bg-gray-100">
      <Navbar />
      <main className="h-full">
        {children}
      </main>
      <footer className="bg-black text-white p-4 text-center">
  <p>&copy; {new Date().getFullYear()} My Blog. All Rights Reserved.</p>
</footer>

    </div>
  );
};

export default Layout;
