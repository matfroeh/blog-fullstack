import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F172A]">
      <Navbar />
      <main className="flex-1 pt-5 pb-8 w-[90%] md:w-[75%] lg:w-[40%] mx-auto">
        <Outlet />
      </main>
      <footer className="text-slate-400 text-sm flex justify-center items-center h-10 border-t border-slate-600">
        <p>&copy; {new Date().getFullYear()} My Blog. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
