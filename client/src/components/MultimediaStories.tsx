import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Play, Headphones, ExternalLink, Calendar, MapPin, Building } from 'lucide-react';

interface MultimediaStory {
  id: string;
  title: string;
  alumnus: {
    name: string;
    year: string;
    company: string;
    position: string;
    avatar: string;
  };
  description: string;
  type: 'video' | 'podcast';
  embedUrl: string;
  duration: string;
  views: number;
  category: string;
  publishedDate: string;
}

export default function MultimediaStories() {
  const multimediaStories: MultimediaStory[] = [
    {
      id: '1',
      title: 'From CVR to Silicon Valley: My Journey in AI Research',
      alumnus: {
        name: 'Dr. Priya Sharma',
        year: '2015',
        company: 'Google Cloud',
        position: 'Senior AI Research Scientist',
        avatar: 'PS'
      },
      description: 'Dr. Priya shares her inspiring journey from CVR to leading breakthrough AI research at Google Cloud, including insights on quantum machine learning and career advice for aspiring researchers.',
      type: 'video',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '15:30',
      views: 2847,
      category: 'Career Journey',
      publishedDate: '2025-03-10'
    },
    {
      id: '2',
      title: 'Building India\'s Largest EdTech Platform: A Founder\'s Story',
      alumnus: {
        name: 'Sneha Reddy',
        year: '2016',
        company: 'EduTech Solutions',
        position: 'Founder & CEO',
        avatar: 'SR'
      },
      description: 'Sneha discusses the challenges and triumphs of building an edtech startup that now serves over 10 million students across India.',
      type: 'podcast',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '28:45',
      views: 1923,
      category: 'Entrepreneurship',
      publishedDate: '2025-03-08'
    },
    {
      id: '3',
      title: 'Innovation in Renewable Energy: Making Solar Accessible',
      alumnus: {
        name: 'Arjun Patel',
        year: '2019',
        company: 'SolarTech Innovations',
        position: 'CTO & Co-founder',
        avatar: 'AP'
      },
      description: 'Arjun talks about developing sustainable solar solutions for rural communities and the technical challenges of making renewable energy accessible to all.',
      type: 'video',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '22:15',
      views: 1567,
      category: 'Innovation',
      publishedDate: '2025-03-05'
    },
    {
      id: '4',
      title: 'From Engineer to Investment Banker: A Career Pivot Story',
      alumnus: {
        name: 'Meera Singh',
        year: '2013',
        company: 'Goldman Sachs',
        position: 'Investment Banker',
        avatar: 'MS'
      },
      description: 'Meera shares her unique journey from engineering to finance, discussing the skills transfer and the challenges of career transitions.',
      type: 'podcast',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '35:20',
      views: 2234,
      category: 'Career Transition',
      publishedDate: '2025-03-03'
    }
  ];

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Career Journey':
        return 'bg-blue-100 text-blue-800';
      case 'Entrepreneurship':
        return 'bg-green-100 text-green-800';
      case 'Innovation':
        return 'bg-purple-100 text-purple-800';
      case 'Career Transition':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="rounded-xl hover:shadow-lg transition-all duration-300 border-0 bg-white">
      <CardHeader className="bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-t-xl">
        <CardTitle className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Play className="h-5 w-5" />
          </div>
          Alumni Stories in Multimedia
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {multimediaStories.map((story) => (
            <div key={story.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="grid md:grid-cols-3 gap-4">
                {/* Video/Podcast Embed */}
                <div className="md:col-span-1">
                  <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src={story.embedUrl}
                      title={story.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="text-xs">
                        {story.type === 'video' ? (
                          <><Play className="h-3 w-3 mr-1" />{story.duration}</>
                        ) : (
                          <><Headphones className="h-3 w-3 mr-1" />{story.duration}</>
                        )}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2">
                  <div className="flex items-start gap-3 mb-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="text-sm font-medium">
                        {story.alumnus.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">{story.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <span className="font-medium">{story.alumnus.name}</span>
                        <span>•</span>
                        <span>Class of {story.alumnus.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <Building className="h-3 w-3" />
                        <span>{story.alumnus.position} at {story.alumnus.company}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    {story.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Play className="h-3 w-3" />
                        <span>{formatViews(story.views)} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{story.publishedDate}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={`text-xs ${getCategoryColor(story.category)}`}>
                        {story.category}
                      </Badge>
                      <Button size="sm" variant="outline" className="text-violet-600 border-violet-200 hover:bg-violet-50">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Watch
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Load More */}
          <div className="text-center pt-4">
            <Button variant="outline" className="text-violet-600 border-violet-200 hover:bg-violet-50">
              View All Stories
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Play className="h-4 w-4 text-violet-600" />
                <span className="text-sm font-medium text-gray-600">Total Stories</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">{multimediaStories.length}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Headphones className="h-4 w-4 text-violet-600" />
                <span className="text-sm font-medium text-gray-600">Total Views</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {formatViews(multimediaStories.reduce((sum, story) => sum + story.views, 0))}
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Calendar className="h-4 w-4 text-violet-600" />
                <span className="text-sm font-medium text-gray-600">Categories</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {new Set(multimediaStories.map(s => s.category)).size}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
