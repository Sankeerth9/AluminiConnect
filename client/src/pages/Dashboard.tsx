import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EventCard from "@/components/EventCard";
import StoryCard from "@/components/StoryCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Calendar, Users, BookOpen, TrendingUp } from "lucide-react";

export default function Dashboard() {
  // TODO: Remove mock data - replace with API calls
  const upcomingEvents = [
    {
      id: "1",
      title: "Annual Alumni Reunion 2025",
      description: "Join us for our annual reunion celebration with networking, dinner, and campus tours.",
      date: new Date("2025-06-15T18:00:00"),
      location: "Engineering Campus Auditorium",
      createdAt: new Date()
    },
    {
      id: "2",
      title: "Tech Career Fair",
      description: "Connect with leading tech companies and explore new career opportunities.",
      date: new Date("2025-03-20T10:00:00"),
      location: "Student Center Hall",
      createdAt: new Date()
    }
  ];

  const featuredStories = [
    {
      id: "1",
      title: "From Student to CTO: My Journey at Google",
      content: "After graduating in 2018, I joined Google as a software engineer. Through hard work and mentorship, I've grown to lead a team of 50+ engineers working on cutting-edge AI projects.",
      authorName: "Sarah Johnson",
      authorGradYear: 2018,
      createdAt: new Date("2025-01-10")
    }
  ];

  const stats = [
    { 
      title: "Total Alumni", 
      value: 2847, 
      icon: Users, 
      gradient: "gradient-yellow",
      iconBg: "bg-yellow-500",
      iconColor: "text-white"
    },
    { 
      title: "Upcoming Events", 
      value: 5, 
      icon: Calendar, 
      gradient: "gradient-green",
      iconBg: "bg-green-500",
      iconColor: "text-white"
    },
    { 
      title: "Success Stories", 
      value: 142, 
      icon: BookOpen, 
      gradient: "gradient-purple",
      iconBg: "bg-purple-500",
      iconColor: "text-white"
    },
    { 
      title: "Active Members", 
      value: 1203, 
      icon: TrendingUp, 
      gradient: "gradient-orange",
      iconBg: "bg-orange-500",
      iconColor: "text-white"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 py-8" data-testid="page-dashboard">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-3 font-serif">
            Welcome to GEC Alumni Network
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Connect, celebrate, and contribute to our vibrant alumni community
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`${stat.gradient} rounded-xl p-6 lift-shadow border border-white/50`}
                data-testid={`card-stat-${index}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-gray-800" data-testid={`stat-value-${index}`}>
                      <AnimatedCounter end={stat.value} />
                    </p>
                  </div>
                  <div className={`${stat.iconBg} p-3 rounded-full shadow-md`}>
                    <Icon className={`h-6 w-6 ${stat.iconColor}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Events */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 flex items-center font-serif">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              Upcoming Events
            </h2>
            <div className="space-y-4" data-testid="section-upcoming-events">
              {upcomingEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onRegister={(id) => console.log(`Registering for event: ${id}`)}
                />
              ))}
            </div>
          </div>

          {/* Featured Success Stories */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 flex items-center font-serif">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              Featured Success Stories
            </h2>
            <div className="space-y-4" data-testid="section-featured-stories">
              {featuredStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}