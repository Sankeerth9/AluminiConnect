import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import AnimatedCounter from "@/components/AnimatedCounter";
import { 
  Star, 
  Calendar, 
  Users, 
  BookOpen, 
  Briefcase, 
  UserPlus, 
  FileText, 
  GraduationCap, 
  TrendingUp, 
  Newspaper, 
  Bell,
  MapPin,
  Building,
  Quote,
  ExternalLink,
  ChevronRight,
  Clock
} from "lucide-react";

export default function Dashboard() {
  // Featured Alumni of the Month
  const featuredAlumnus = {
    name: "Dr. Priya Sharma",
    year: "2015",
    company: "Google Cloud",
    position: "Senior AI Research Scientist",
    photo: "PS",
    quote: "CVR gave me the foundation to think beyond boundaries. Today, I'm leading breakthrough AI research that impacts millions of users globally.",
    location: "San Francisco, CA"
  };

  // Upcoming Events
  const upcomingEvents = [
    {
      id: "1",
      title: "Tech Career Fair 2025",
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "CVR Campus Auditorium",
      attendees: 150,
      type: "Career"
    },
    {
      id: "2", 
      title: "Annual Alumni Reunion",
      date: "April 22, 2025",
      time: "6:00 PM - 11:00 PM",
      location: "Grand Ballroom, Hyatt",
      attendees: 300,
      type: "Social"
    },
    {
      id: "3",
      title: "Alumni Networking Meetup",
      date: "March 28, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Tech Hub, Bangalore",
      attendees: 75,
      type: "Networking"
    }
  ];

  // Alumni Success Stories
  const successStories = [
    {
      id: "1",
      title: "From Campus to Silicon Valley",
      author: "Rajesh Kumar",
      year: "2018",
      summary: "How a CVR graduate became VP of Engineering at a unicorn startup",
      readTime: "5 min"
    },
    {
      id: "2",
      title: "Building India's Largest EdTech Platform",
      author: "Sneha Reddy",
      year: "2016", 
      summary: "Journey of creating an educational platform serving 10M+ students",
      readTime: "7 min"
    },
    {
      id: "3",
      title: "Innovation in Renewable Energy",
      author: "Arjun Patel",
      year: "2019",
      summary: "Developing sustainable solar solutions for rural communities",
      readTime: "4 min"
    }
  ];

  // Job Opportunities
  const jobOpportunities = [
    {
      id: "1",
      title: "Senior Software Engineer",
      company: "Microsoft",
      location: "Hyderabad",
      postedBy: "Kavya Nair (2017)",
      salary: "₹25-35 LPA",
      type: "Full-time"
    },
    {
      id: "2",
      title: "Product Manager",
      company: "Flipkart",
      location: "Bangalore",
      postedBy: "Rohit Agarwal (2016)",
      salary: "₹30-45 LPA",
      type: "Full-time"
    },
    {
      id: "3",
      title: "Data Scientist",
      company: "Amazon",
      location: "Chennai",
      postedBy: "Meera Singh (2015)",
      salary: "₹28-40 LPA",
      type: "Full-time"
    }
  ];

  // Referral Opportunities
  const referralOpportunities = [
    {
      id: "1",
      company: "Google",
      positions: ["SWE", "TPM", "Data Analyst"],
      referrer: "Aditya Krishnan (2014)",
      deadline: "March 30, 2025"
    },
    {
      id: "2",
      company: "Tesla",
      positions: ["Mechanical Engineer", "Software Engineer"],
      referrer: "Divya Iyer (2017)",
      deadline: "April 5, 2025"
    },
    {
      id: "3",
      company: "Meta",
      positions: ["Frontend Engineer", "UX Designer"],
      referrer: "Kiran Rao (2016)",
      deadline: "March 25, 2025"
    }
  ];

  // Resume Repository
  const resumeRepository = [
    { name: "Ankit Verma", year: 2020, field: "Software Engineering", company: "Netflix" },
    { name: "Pooja Gupta", year: 2019, field: "Data Science", company: "Uber" },
    { name: "Vikash Jain", year: 2018, field: "Product Management", company: "Zomato" },
    { name: "Ravi Chandran", year: 2021, field: "DevOps Engineering", company: "Spotify" }
  ];

  // Mentorship Spotlights
  const mentorshipSpotlights = [
    {
      name: "Dr. Sanjay Mehta",
      year: "2010",
      company: "IIT Professor",
      expertise: ["Research", "Academia", "PhD Guidance"],
      mentees: 25
    },
    {
      name: "Lakshmi Narayan",
      year: "2013",
      company: "Goldman Sachs",
      expertise: ["Finance", "Trading", "Quant"],
      mentees: 12
    },
    {
      name: "Harsha Vardhan",
      year: "2014",
      company: "Founder, StartupX",
      expertise: ["Entrepreneurship", "Startups", "Funding"],
      mentees: 18
    }
  ];

  // Community Quick Stats
  const communityStats = [
    { 
      title: "Alumni Network", 
      value: 4250, 
      icon: Users, 
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500"
    },
    { 
      title: "Job Postings", 
      value: 89, 
      icon: Briefcase, 
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-500"
    },
    { 
      title: "Active Mentors", 
      value: 156, 
      icon: UserPlus, 
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500"
    },
    { 
      title: "Success Stories", 
      value: 324, 
      icon: Star, 
      gradient: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500"
    }
  ];

  // College & Alumni News
  const news = [
    {
      id: "1",
      title: "CVR College Ranks #3 in Engineering Excellence Survey 2025",
      date: "March 10, 2025",
      category: "Achievement"
    },
    {
      id: "2", 
      title: "Alumni Startup 'EcoTech' Raises $50M Series B Funding",
      date: "March 8, 2025",
      category: "Alumni News"
    },
    {
      id: "3",
      title: "New Research Lab Inaugurated with Alumni Donations",
      date: "March 5, 2025",
      category: "College News"
    },
    {
      id: "4",
      title: "CVR Alumni Association Scholarship Program Launched",
      date: "March 3, 2025",
      category: "Program"
    }
  ];

  // Announcements
  const announcements = [
    {
      id: "1",
      title: "Registration Open: Alumni Reunion 2025",
      message: "Early bird discounts available until March 20th. Don't miss this grand celebration!",
      type: "event",
      urgent: true
    },
    {
      id: "2",
      title: "New Alumni Directory Features",
      message: "Now search alumni by skills, company, and location. Update your profile today!",
      type: "feature",
      urgent: false
    },
    {
      id: "3",
      title: "Mentorship Program Applications",
      message: "Applications open for mentors and mentees. Join our growing community of learners.",
      type: "program",
      urgent: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 py-8" data-testid="page-dashboard">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-3 font-serif">
            Welcome to CVR Alumni Network
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Connect, celebrate, and contribute to our vibrant CVR alumni community
          </p>
        </div>

        {/* Community Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50/50"
                data-testid={`card-stat-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold text-gray-800" data-testid={`stat-value-${index}`}>
                        <AnimatedCounter end={stat.value} />
                      </p>
                    </div>
                    <div className={`${stat.bgColor} p-3 rounded-full shadow-md`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Alumni of the Month */}
        <div className="mb-12">
          <Card className="rounded-xl hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 text-yellow-300">
                <Star className="h-5 w-5 fill-current" />
                <CardTitle className="text-xl font-serif">Featured Alumni of the Month</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pb-8">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20 border-4 border-white/30">
                    <AvatarFallback className="text-2xl bg-white/20 text-white">
                      {featuredAlumnus.photo}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{featuredAlumnus.name}</h3>
                    <p className="text-indigo-100">Class of {featuredAlumnus.year}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Building className="h-4 w-4" />
                      <span className="text-sm">{featuredAlumnus.company}</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <Quote className="h-8 w-8 text-white/30 mb-3" />
                  <blockquote className="text-lg italic leading-relaxed">
                    "{featuredAlumnus.quote}"
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {/* Upcoming Events */}
          <Card className="rounded-xl hover:shadow-lg transition-all duration-300 border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-xl">
              <CardTitle className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Calendar className="h-5 w-5" />
                </div>
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4" data-testid="section-upcoming-events">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="mt-2">{event.attendees} attending</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Alumni Success Stories */}
          <Card className="rounded-xl hover:shadow-lg transition-all duration-300 border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-xl">
              <CardTitle className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <BookOpen className="h-5 w-5" />
                </div>
                Success Stories
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4" data-testid="section-success-stories">
                {successStories.map((story) => (
                  <div key={story.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                    <h4 className="font-semibold text-gray-900 mb-2">{story.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{story.summary}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        By {story.author} • Class of {story.year}
                      </div>
                      <div className="flex items-center gap-1 text-purple-600 text-sm">
                        <span>{story.readTime} read</span>
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Job Opportunities */}
          <Card className="rounded-xl hover:shadow-lg transition-all duration-300 border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-xl">
              <CardTitle className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Briefcase className="h-5 w-5" />
                </div>
                Job Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4" data-testid="section-job-opportunities">
                {jobOpportunities.map((job) => (
                  <div key={job.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{job.title}</h4>
                      <Badge variant="secondary" className="text-xs">{job.type}</Badge>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-600">{job.salary}</span>
                      <span className="text-xs text-gray-500">Posted by {job.postedBy}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Referral Opportunities */}
          <Card className="rounded-xl hover:shadow-lg transition-all duration-300 border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-xl">
              <CardTitle className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <UserPlus className="h-5 w-5" />
                </div>
                Referral Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4" data-testid="section-referral-opportunities">
                {referralOpportunities.map((referral) => (
                  <div key={referral.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{referral.company}</h4>
                      <span className="text-xs text-orange-600 font-medium">
                        Due: {referral.deadline}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {referral.positions.map((position, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {position}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">
                      Referrer: {referral.referrer}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Resume Repository */}
          <Card className="rounded-xl hover:shadow-lg transition-all duration-300 border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-t-xl">
              <CardTitle className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <FileText className="h-5 w-5" />
                </div>
                Resume Repository
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3" data-testid="section-resume-repository">
                {resumeRepository.map((resume, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div>
                      <h4 className="font-semibold text-gray-900">{resume.name}</h4>
                      <p className="text-sm text-gray-600">Class of {resume.year} • {resume.field}</p>
                      <p className="text-xs text-gray-500">{resume.company}</p>
                    </div>
                    <Button size="sm" variant="outline" className="text-cyan-600">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Resume
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mentorship Spotlights */}
          <Card className="rounded-xl hover:shadow-lg transition-all duration-300 border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-t-xl">
              <CardTitle className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5" />
                </div>
                Mentorship Spotlights
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4" data-testid="section-mentorship-spotlights">
                {mentorshipSpotlights.map((mentor, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{mentor.name}</h4>
                        <p className="text-sm text-gray-600">Class of {mentor.year}</p>
                        <p className="text-sm text-gray-600">{mentor.company}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {mentor.mentees} mentees
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {mentor.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Bottom Section - News and Announcements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          
          {/* College & Alumni News */}
          <Card className="rounded-xl hover:shadow-lg transition-all duration-300 border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-t-xl">
              <CardTitle className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Newspaper className="h-5 w-5" />
                </div>
                College & Alumni News
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4" data-testid="section-news">
                {news.map((item) => (
                  <div key={item.id} className="border-l-4 border-indigo-500 pl-4 hover:bg-gray-50 p-2 rounded-r transition-colors cursor-pointer">
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Announcements */}
          <Card className="rounded-xl hover:shadow-lg transition-all duration-300 border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-xl">
              <CardTitle className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bell className="h-5 w-5" />
                </div>
                Announcements
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4" data-testid="section-announcements">
                {announcements.map((announcement) => (
                  <div 
                    key={announcement.id} 
                    className={`p-4 rounded-lg border-l-4 ${
                      announcement.urgent 
                        ? 'border-red-500 bg-red-50 hover:bg-red-100' 
                        : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
                    } transition-colors`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{announcement.title}</h4>
                      {announcement.urgent && (
                        <Badge variant="destructive" className="text-xs">Urgent</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{announcement.message}</p>
                    <Badge variant="outline" className="text-xs capitalize">{announcement.type}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}