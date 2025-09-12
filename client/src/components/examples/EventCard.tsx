import EventCard from '../EventCard';

export default function EventCardExample() {
  const mockEvent = {
    id: "1",
    title: "Annual Alumni Reunion 2025",
    description: "Join us for our annual reunion celebration with networking, dinner, and campus tours.",
    date: new Date("2025-06-15T18:00:00"),
    location: "Engineering Campus Auditorium",
    createdAt: new Date()
  };

  return <EventCard event={mockEvent} onRegister={(id) => console.log(`Registered for event: ${id}`)} />;
}