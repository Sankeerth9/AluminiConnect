import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Building } from "lucide-react";
import type { Alumni } from "@shared/schema";

interface AlumniCardProps {
  alumni: Alumni;
}

export default function AlumniCard({ alumni }: AlumniCardProps) {
  const initials = alumni.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="hover-elevate" data-testid={`card-alumni-${alumni.id}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg" data-testid={`text-name-${alumni.id}`}>
              {alumni.name}
            </h3>
            <p className="text-muted-foreground text-sm">
              Class of {alumni.graduationYear}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {alumni.company && (
          <div className="flex items-center space-x-2 text-sm">
            <Building className="h-4 w-4 text-muted-foreground" />
            <span data-testid={`text-company-${alumni.id}`}>{alumni.company}</span>
          </div>
        )}
        {alumni.location && (
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span data-testid={`text-location-${alumni.id}`}>{alumni.location}</span>
          </div>
        )}
        {alumni.skills && alumni.skills.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {alumni.skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {alumni.skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{alumni.skills.length - 3} more
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}