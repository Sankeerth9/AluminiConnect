import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, Users, BookOpen, Settings, Home, GraduationCap } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard", icon: Home },
    { path: "/directory", label: "Alumni Directory", icon: Users },
    { path: "/events", label: "Events", icon: Calendar },
    { path: "/stories", label: "Success Stories", icon: BookOpen },
    { path: "/admin", label: "Admin", icon: Settings },
  ];

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
              const isActive = location === item.path;
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "secondary" : "ghost"}
                  asChild
                  className="transition-all duration-200 hover:scale-105"
                  data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Link href={item.path} className="flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span className="hidden lg:inline">{item.label}</span>
                  </Link>
                </Button>
              );
            })}
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