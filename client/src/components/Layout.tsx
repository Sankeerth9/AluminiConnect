import Navigation from "./Navigation";
import { useLocation } from "wouter";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  
  // Define background colors for different sections
  const getBackgroundClass = () => {
    switch (location) {
      case "/":
        return "bg-gradient-to-br from-stone-50 to-amber-50/30";
      case "/directory":
        return "bg-white";
      case "/events":
        return "bg-gray-50";
      case "/stories":
        return "bg-gradient-to-br from-purple-50 to-pink-50/30";
      case "/admin":
        return "bg-gradient-to-br from-blue-50 to-indigo-50/30";
      default:
        return "bg-background";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className={`flex-1 transition-colors duration-300 ${getBackgroundClass()}`}>
        {children}
      </main>
    </div>
  );
}