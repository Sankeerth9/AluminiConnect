import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

export default function AdminForms() {
  const { toast } = useToast();
  
  // Alumni form state
  const [alumniForm, setAlumniForm] = useState({
    name: "",
    graduationYear: "",
    company: "",
    location: "",
    skills: "",
    email: "",
  });

  // Event form state
  const [eventForm, setEventForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  // Story form state
  const [storyForm, setStoryForm] = useState({
    title: "",
    content: "",
    authorName: "",
    authorGradYear: "",
  });

  const handleAlumniSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding alumni:", alumniForm);
    toast({
      title: "Alumni Added",
      description: `${alumniForm.name} has been added to the directory.`,
    });
    setAlumniForm({
      name: "",
      graduationYear: "",
      company: "",
      location: "",
      skills: "",
      email: "",
    });
  };

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding event:", eventForm);
    toast({
      title: "Event Created",
      description: `${eventForm.title} has been added to the events.`,
    });
    setEventForm({
      title: "",
      description: "",
      date: "",
      location: "",
    });
  };

  const handleStorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding story:", storyForm);
    toast({
      title: "Story Published",
      description: `${storyForm.title} has been published.`,
    });
    setStoryForm({
      title: "",
      content: "",
      authorName: "",
      authorGradYear: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto" data-testid="admin-forms">
      <Tabs defaultValue="alumni" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="alumni" data-testid="tab-alumni">Add Alumni</TabsTrigger>
          <TabsTrigger value="events" data-testid="tab-events">Add Event</TabsTrigger>
          <TabsTrigger value="stories" data-testid="tab-stories">Add Story</TabsTrigger>
        </TabsList>
        
        <TabsContent value="alumni">
          <Card>
            <CardHeader>
              <CardTitle>Add New Alumni</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAlumniSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="alumni-name">Full Name *</Label>
                    <Input
                      id="alumni-name"
                      value={alumniForm.name}
                      onChange={(e) => setAlumniForm({...alumniForm, name: e.target.value})}
                      required
                      data-testid="input-alumni-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="alumni-year">Graduation Year *</Label>
                    <Input
                      id="alumni-year"
                      type="number"
                      value={alumniForm.graduationYear}
                      onChange={(e) => setAlumniForm({...alumniForm, graduationYear: e.target.value})}
                      required
                      data-testid="input-alumni-year"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="alumni-company">Company</Label>
                    <Input
                      id="alumni-company"
                      value={alumniForm.company}
                      onChange={(e) => setAlumniForm({...alumniForm, company: e.target.value})}
                      data-testid="input-alumni-company"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="alumni-location">Location</Label>
                    <Input
                      id="alumni-location"
                      value={alumniForm.location}
                      onChange={(e) => setAlumniForm({...alumniForm, location: e.target.value})}
                      data-testid="input-alumni-location"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alumni-email">Email</Label>
                  <Input
                    id="alumni-email"
                    type="email"
                    value={alumniForm.email}
                    onChange={(e) => setAlumniForm({...alumniForm, email: e.target.value})}
                    data-testid="input-alumni-email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alumni-skills">Skills (comma-separated)</Label>
                  <Input
                    id="alumni-skills"
                    value={alumniForm.skills}
                    onChange={(e) => setAlumniForm({...alumniForm, skills: e.target.value})}
                    placeholder="e.g., Software Engineering, Machine Learning, Python"
                    data-testid="input-alumni-skills"
                  />
                </div>
                <Button type="submit" data-testid="button-submit-alumni">
                  Add Alumni
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Create New Event</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEventSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="event-title">Event Title *</Label>
                  <Input
                    id="event-title"
                    value={eventForm.title}
                    onChange={(e) => setEventForm({...eventForm, title: e.target.value})}
                    required
                    data-testid="input-event-title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-description">Description</Label>
                  <Textarea
                    id="event-description"
                    value={eventForm.description}
                    onChange={(e) => setEventForm({...eventForm, description: e.target.value})}
                    rows={3}
                    data-testid="input-event-description"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="event-date">Date & Time *</Label>
                    <Input
                      id="event-date"
                      type="datetime-local"
                      value={eventForm.date}
                      onChange={(e) => setEventForm({...eventForm, date: e.target.value})}
                      required
                      data-testid="input-event-date"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-location">Location</Label>
                    <Input
                      id="event-location"
                      value={eventForm.location}
                      onChange={(e) => setEventForm({...eventForm, location: e.target.value})}
                      data-testid="input-event-location"
                    />
                  </div>
                </div>
                <Button type="submit" data-testid="button-submit-event">
                  Create Event
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stories">
          <Card>
            <CardHeader>
              <CardTitle>Publish Success Story</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleStorySubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="story-title">Story Title *</Label>
                  <Input
                    id="story-title"
                    value={storyForm.title}
                    onChange={(e) => setStoryForm({...storyForm, title: e.target.value})}
                    required
                    data-testid="input-story-title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="story-content">Story Content *</Label>
                  <Textarea
                    id="story-content"
                    value={storyForm.content}
                    onChange={(e) => setStoryForm({...storyForm, content: e.target.value})}
                    rows={6}
                    required
                    data-testid="input-story-content"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="story-author">Author Name *</Label>
                    <Input
                      id="story-author"
                      value={storyForm.authorName}
                      onChange={(e) => setStoryForm({...storyForm, authorName: e.target.value})}
                      required
                      data-testid="input-story-author"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="story-grad-year">Graduation Year</Label>
                    <Input
                      id="story-grad-year"
                      type="number"
                      value={storyForm.authorGradYear}
                      onChange={(e) => setStoryForm({...storyForm, authorGradYear: e.target.value})}
                      data-testid="input-story-grad-year"
                    />
                  </div>
                </div>
                <Button type="submit" data-testid="button-submit-story">
                  Publish Story
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}