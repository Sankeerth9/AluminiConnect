import StoryCard from "@/components/StoryCard";

export default function Stories() {
  // TODO: Remove mock data - replace with API calls
  const stories = [
    {
      id: "1",
      title: "From Student to CTO: My Journey at Google",
      content: "After graduating in 2018, I joined Google as a software engineer. Through hard work and mentorship, I've grown to lead a team of 50+ engineers working on cutting-edge AI projects. The engineering foundation I received at GEC was instrumental in my career growth, particularly the emphasis on problem-solving and collaborative teamwork.",
      authorName: "Sarah Johnson",
      authorGradYear: 2018,
      createdAt: new Date("2025-01-10")
    },
    {
      id: "2",
      title: "Building the Future of Electric Vehicles",
      content: "My engineering background gave me the foundation to contribute to Tesla's mission of sustainable transportation. I'm proud to be part of the team developing next-generation battery technology. The hands-on laboratory experience and strong mathematical foundation from GEC prepared me for the complex challenges in automotive engineering.",
      authorName: "Emily Rodriguez",
      authorGradYear: 2020,
      createdAt: new Date("2025-01-05")
    },
    {
      id: "3",
      title: "Entrepreneurship Journey: From Dorm Room to Unicorn",
      content: "What started as a class project in my senior year has now grown into a billion-dollar startup. The entrepreneurial mindset and technical skills I developed at GEC were crucial in building our AI-powered healthcare platform. We're now helping millions of patients worldwide get better diagnoses faster.",
      authorName: "Michael Chen",
      authorGradYear: 2019,
      createdAt: new Date("2024-12-28")
    },
    {
      id: "4",
      title: "Leading Innovation in Renewable Energy",
      content: "After completing my masters, I joined a clean energy startup that's revolutionizing solar panel efficiency. Our breakthrough technology has increased solar energy conversion by 35%. The research methodology and experimental design skills I learned during my undergraduate projects were invaluable in this achievement.",
      authorName: "David Kim",
      authorGradYear: 2017,
      createdAt: new Date("2024-12-20")
    },
    {
      id: "5",
      title: "Breaking Barriers in Aerospace Engineering",
      content: "As one of the lead engineers on NASA's Mars exploration project, I'm living my childhood dream. The rigorous engineering curriculum and emphasis on precision that GEC provided prepared me for the exacting standards required in space exploration. We're currently working on technologies that will enable human settlement on Mars.",
      authorName: "Lisa Thompson",
      authorGradYear: 2016,
      createdAt: new Date("2024-12-15")
    },
    {
      id: "6",
      title: "Transforming Healthcare Through Technology",
      content: "My journey from a computer engineering student to a leading healthcare technology innovator has been incredible. I've developed AI diagnostic tools that are now used in over 500 hospitals worldwide. The interdisciplinary approach and strong technical foundation from GEC enabled me to bridge the gap between technology and healthcare.",
      authorName: "James Wilson",
      authorGradYear: 2021,
      createdAt: new Date("2024-12-10")
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" data-testid="page-stories">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Success Stories</h1>
        <p className="text-muted-foreground">
          Inspiring achievements and career journeys from our accomplished alumni
        </p>
      </div>

      {/* Featured Story (First Story) */}
      {stories.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            Featured Story
          </h2>
          <div className="max-w-4xl" data-testid="featured-story">
            <StoryCard story={stories[0]} />
          </div>
        </div>
      )}

      {/* Other Stories Grid */}
      {stories.length > 1 && (
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            More Success Stories
          </h2>
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-testid="stories-grid"
          >
            {stories.slice(1).map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      )}

      {stories.length === 0 && (
        <div className="text-center py-12" data-testid="no-stories">
          <p className="text-muted-foreground text-lg">
            No success stories available at this time. Check back soon for inspiring stories from our alumni!
          </p>
        </div>
      )}
    </div>
  );
}