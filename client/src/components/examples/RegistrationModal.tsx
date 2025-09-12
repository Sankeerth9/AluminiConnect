import RegistrationModal from '../RegistrationModal';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

export default function RegistrationModalExample() {
  const [open, setOpen] = useState(false);

  const mockEvent = {
    id: "1",
    title: "Annual Alumni Reunion 2025",
    description: "Join us for our annual reunion celebration with networking, dinner, and campus tours.",
    date: new Date("2025-06-15T18:00:00"),
    location: "Engineering Campus Auditorium",
    createdAt: new Date()
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Registration Modal</Button>
      <RegistrationModal
        event={mockEvent}
        open={open}
        onOpenChange={setOpen}
        onSubmit={(name) => console.log(`Registered ${name} for event`)}
      />
    </div>
  );
}