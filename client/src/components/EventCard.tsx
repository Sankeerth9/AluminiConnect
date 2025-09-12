import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";
import type { Event } from "@shared/schema";

interface EventCardProps {
  event: Event;
  onRegister?: (eventId: string) => void;
}

export default function EventCard({ event, onRegister }: EventCardProps) {
  const handleRegister = () => {
    console.log(`Register for event: ${event.title}`);
    onRegister?.(event.id);
  };

  return (
    <Card className="lift-shadow border border-gray-200" data-testid={`card-event-${event.id}`}>
      <CardHeader>
        <CardTitle data-testid={`text-title-${event.id}`}>{event.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground" data-testid={`text-description-${event.id}`}>
          {event.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span data-testid={`text-date-${event.id}`}>
              {format(new Date(event.date), "PPP 'at' p")}
            </span>
          </div>
          
          {event.location && (
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span data-testid={`text-location-${event.id}`}>{event.location}</span>
            </div>
          )}
        </div>
        
        <Button 
          onClick={handleRegister}
          className="w-full"
          data-testid={`button-register-${event.id}`}
        >
          Register for Event
        </Button>
      </CardContent>
    </Card>
  );
}