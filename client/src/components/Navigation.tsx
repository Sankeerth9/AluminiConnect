import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Users, BookOpen, Settings, Home, GraduationCap, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navItems = [
    { path: "/", label: "Dashboard", icon: Home },
    { path: "/directory", label: "Alumni Directory", icon: Users },
    { path: "/events", label: "Events", icon: Calendar },
    { path: "/stories", label: "Success Stories", icon: BookOpen },
    { path: "/admin", label: "Admin", icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg backdrop-blur-sm border-b border-primary-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-foreground/20 rounded-full">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold font-serif">CVR Alumni Network</h1>
          </div>
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "secondary" : "ghost"}
                  asChild
                  className="transition-all duration-200 hover:scale-105"
                  data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Link to={item.path} className="flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span className="hidden lg:inline">{item.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>

          {/* User Info and Logout */}
          <div className="flex items-center space-x-3">
            {user && (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">{user.name}</span>
                  <Badge variant="secondary" className="text-xs capitalize">
                    {user.role}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-white hover:bg-white/20"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}