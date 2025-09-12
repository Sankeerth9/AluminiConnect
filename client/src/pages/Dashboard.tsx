import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EventCard from "@/components/EventCard";
import StoryCard from "@/components/StoryCard";
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
    { title: "Total Alumni", value: "2,847", icon: Users, color: "text-blue-600" },
    { title: "Upcoming Events", value: "5", icon: Calendar, color: "text-green-600" },
    { title: "Success Stories", value: "142", icon: BookOpen, color: "text-purple-600" },
    { title: "Active Members", value: "1,203", icon: TrendingUp, color: "text-orange-600" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" data-testid="page-dashboard">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome to GEC Alumni Network
        </h1>
        <p className="text-muted-foreground">
          Connect, celebrate, and contribute to our vibrant alumni community
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover-elevate" data-testid={`card-stat-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold" data-testid={`stat-value-${index}`}>
                      {stat.value}
                    </p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Events */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Calendar className="h-6 w-6 mr-2" />
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
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <BookOpen className="h-6 w-6 mr-2" />
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
  );
}