import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MessageCircle, Send, Clock, Users, ThumbsUp, Reply } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface ForumPost {
  id: string;
  author: string;
  role: 'alumni' | 'student' | 'admin';
  content: string;
  timestamp: string;
  likes: number;
  replies: number;
  avatar: string;
}

export default function Forum() {
  const { user } = useAuth();
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState<ForumPost[]>([
    {
      id: '1',
      author: 'Dr. Priya Sharma',
      role: 'alumni',
      content: 'Excited to share that our AI research team at Google Cloud just published a breakthrough paper on quantum machine learning! Happy to mentor any students interested in this field.',
      timestamp: '2 hours ago',
      likes: 24,
      replies: 8,
      avatar: 'PS'
    },
    {
      id: '2',
      author: 'Rahul Kumar',
      role: 'student',
      content: 'Looking for advice on choosing between a startup offer and a big tech company. Any alumni who have been in similar situations?',
      timestamp: '4 hours ago',
      likes: 12,
      replies: 15,
      avatar: 'RK'
    },
    {
      id: '3',
      author: 'Sneha Reddy',
      role: 'alumni',
      content: 'Our edtech startup just crossed 1M users! Grateful for the foundation CVR provided. Happy to share our journey with current students.',
      timestamp: '6 hours ago',
      likes: 31,
      replies: 12,
      avatar: 'SR'
    },
    {
      id: '4',
      author: 'Arjun Patel',
      role: 'alumni',
      content: 'Anyone interested in renewable energy startups? We\'re looking for talented engineers to join our mission of bringing clean energy to rural India.',
      timestamp: '1 day ago',
      likes: 18,
      replies: 6,
      avatar: 'AP'
    },
    {
      id: '5',
      author: 'Meera Singh',
      role: 'student',
      content: 'Thank you to all the alumni who participated in yesterday\'s career guidance session. The insights were incredibly valuable!',
      timestamp: '2 days ago',
      likes: 28,
      replies: 4,
      avatar: 'MS'
    }
  ]);

  const handleSubmitPost = () => {
    if (newPost.trim() && user) {
      const post: ForumPost = {
        id: Date.now().toString(),
        author: user.name,
        role: user.role,
        content: newPost.trim(),
        timestamp: 'Just now',
        likes: 0,
        replies: 0,
        avatar: user.name.split(' ').map(n => n[0]).join('').toUpperCase()
      };
      
      setPosts(prev => [post, ...prev]);
      setNewPost('');
    }
  };

  const handleLike = (postId: string) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'alumni':
        return 'bg-blue-100 text-blue-800';
      case 'student':
        return 'bg-green-100 text-green-800';
      case 'admin':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="rounded-xl hover:shadow-lg transition-all duration-300 border-0 bg-white">
      <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-xl">
        <CardTitle className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <MessageCircle className="h-5 w-5" />
          </div>
          Alumni-Student Forum
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Post Creation Form */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Share something with the community</h3>
            <div className="space-y-3">
              <Textarea
                placeholder="What's on your mind? Share updates, ask questions, or start a discussion..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="min-h-[80px] resize-none border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                maxLength={500}
              />
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {newPost.length}/500 characters
                </span>
                <Button 
                  onClick={handleSubmitPost}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
                  disabled={!newPost.trim()}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Post
                </Button>
              </div>
            </div>
          </div>

          {/* Community Stats */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{posts.length} posts</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>{posts.reduce((sum, post) => sum + post.replies, 0)} replies</span>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {posts.map((post) => (
              <div key={post.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="text-sm font-medium">
                      {post.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-800">{post.author}</h4>
                      <Badge variant="secondary" className={`text-xs ${getRoleColor(post.role)}`}>
                        {post.role}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{post.timestamp}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-3 leading-relaxed">{post.content}</p>
                    
                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLike(post.id)}
                        className="text-gray-600 hover:text-red-600"
                      >
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        {post.likes}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        <Reply className="h-4 w-4 mr-1" />
                        {post.replies}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center pt-4">
            <Button variant="outline" className="text-indigo-600 border-indigo-200 hover:bg-indigo-50">
              Load More Posts
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
