import React from "react";
import { Outlet } from "react-router-dom";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import Navbar from "../../components/Navbar/Navbar";

const Main = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <SidebarNav />
      <div className="w-full">
        <Navbar className='-ml-2' />
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
