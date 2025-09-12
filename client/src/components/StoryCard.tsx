import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { format } from "date-fns";
import type { Story } from "@shared/schema";

interface StoryCardProps {
  story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  const initials = story.authorName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const truncatedContent = story.content.length > 200 
    ? story.content.substring(0, 200) + "..."
    : story.content;

  return (
    <Card className="lift-shadow border border-gray-200" data-testid={`card-story-${story.id}`}>
      <CardHeader>
        <CardTitle data-testid={`text-title-${story.id}`}>{story.title}</CardTitle>
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium" data-testid={`text-author-${story.id}`}>
              {story.authorName}
            </p>
            <p className="text-xs text-muted-foreground">
              {story.authorGradYear && `Class of ${story.authorGradYear} • `}
              {story.createdAt && format(new Date(story.createdAt), "MMM d, yyyy")}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground" data-testid={`text-content-${story.id}`}>
          {truncatedContent}
        </p>
      </CardContent>
    </Card>
  );
}