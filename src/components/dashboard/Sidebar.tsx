
import React from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  Home,
  Users,
  TrendingUp,
  Award,
  Settings,
  LogOut,
  Menu,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type SidebarProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: BarChart3, label: 'Performance', path: '/performance' },
    { icon: TrendingUp, label: 'Progress', path: '/progress' },
    { icon: Award, label: 'Leaderboard', path: '/leaderboard' },
    { icon: Users, label: 'Team', path: '/team' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={toggleSidebar}
      >
        <Menu className="h-4 w-4" />
      </Button>

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-dashboard-dark text-white transform transition-transform duration-200 ease-in-out lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-center h-16 border-b border-dashboard-gray/20">
            <h2 className="text-xl font-bold text-dashboard-purple">RouteRunner</h2>
          </div>

          <nav className="flex-1 p-4">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center px-4 py-3 text-sm rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <item.icon className="h-5 w-5 mr-3 text-dashboard-purple" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-dashboard-gray/20">
            <button className="flex items-center w-full px-4 py-3 text-sm rounded-lg hover:bg-white/10 transition-colors">
              <LogOut className="h-5 w-5 mr-3 text-dashboard-gray" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
