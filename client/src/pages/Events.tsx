import { useState } from "react";
import EventCard from "@/components/EventCard";
import RegistrationModal from "@/components/RegistrationModal";
import { useToast } from "@/hooks/use-toast";
import type { Event } from "@shared/schema";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { toast } = useToast();

  // TODO: Remove mock data - replace with API calls
  const events = [
    {
      id: "1",
      title: "Annual Alumni Reunion 2025",
      description: "Join us for our annual reunion celebration with networking, dinner, and campus tours. Reconnect with classmates and faculty while enjoying an evening of celebration.",
      date: new Date("2025-06-15T18:00:00"),
      location: "Engineering Campus Auditorium",
      createdAt: new Date()
    },
    {
      id: "2",
      title: "Tech Career Fair",
      description: "Connect with leading tech companies and explore new career opportunities. Meet recruiters from top tech firms and learn about exciting job openings.",
      date: new Date("2025-03-20T10:00:00"),
      location: "Student Center Hall",
      createdAt: new Date()
    },
    {
      id: "3",
      title: "Alumni Mentorship Program Launch",
      description: "Join our new mentorship program where experienced alumni guide recent graduates and current students in their career journey.",
      date: new Date("2025-04-10T14:00:00"),
      location: "Virtual Event",
      createdAt: new Date()
    },
    {
      id: "4",
      title: "Engineering Innovation Summit",
      description: "Showcase of cutting-edge engineering projects by alumni entrepreneurs. Network with innovators and learn about the latest industry trends.",
      date: new Date("2025-05-05T09:00:00"),
      location: "Innovation Center",
      createdAt: new Date()
    },
    {
      id: "5",
      title: "Alumni Golf Tournament",
      description: "Annual charity golf tournament to raise funds for student scholarships. Enjoy a day of golf while supporting the next generation of engineers.",
      date: new Date("2025-07-12T08:00:00"),
      location: "Riverside Golf Club",
      createdAt: new Date()
    }
  ];

  const handleRegister = (eventId: string) => {
    const event = events.find(e => e.id === eventId);
    if (event) {
      setSelectedEvent(event);
      setModalOpen(true);
    }
  };

  const handleRegistrationSubmit = (name: string) => {
    console.log(`Registering ${name} for event: ${selectedEvent?.title}`);
    toast({
      title: "Registration Successful!",
      description: `You've been registered for ${selectedEvent?.title}. A confirmation email will be sent shortly.`,
    });
  };

  // Separate upcoming and past events
  const now = new Date();
  const upcomingEvents = events.filter(event => new Date(event.date) > now);
  const pastEvents = events.filter(event => new Date(event.date) <= now);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" data-testid="page-events">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Events</h1>
        <p className="text-muted-foreground">
          Stay connected through our alumni events, reunions, and networking opportunities
        </p>
      </div>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            Upcoming Events
          </h2>
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-testid="upcoming-events-grid"
          >
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onRegister={handleRegister}
              />
            ))}
          </div>
        </div>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            Past Events
          </h2>
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-75"
            data-testid="past-events-grid"
          >
            {pastEvents.map((event) => (
              <div key={event.id} className="relative">
                <EventCard event={event} />
                <div className="absolute inset-0 bg-muted/20 rounded-lg pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      )}

      {events.length === 0 && (
        <div className="text-center py-12" data-testid="no-events">
          <p className="text-muted-foreground text-lg">
            No events scheduled at this time. Check back soon for upcoming events!
          </p>
        </div>
      )}

      {/* Registration Modal */}
      <RegistrationModal
        event={selectedEvent}
        open={modalOpen}
        onOpenChange={setModalOpen}
        onSubmit={handleRegistrationSubmit}
      />
    </div>
  );
}