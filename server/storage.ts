import { type Alumni, type Event, type Registration, type Story, type InsertAlumni, type InsertEvent, type InsertRegistration, type InsertStory } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Alumni methods
  getAllAlumni(): Promise<Alumni[]>;
  getAlumniById(id: string): Promise<Alumni | undefined>;
  createAlumni(alumni: InsertAlumni): Promise<Alumni>;

  // Event methods
  getAllEvents(): Promise<Event[]>;
  getEventById(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;

  // Registration methods
  getRegistrationsByEventId(eventId: string): Promise<Registration[]>;
  createRegistration(registration: InsertRegistration): Promise<Registration>;

  // Story methods
  getAllStories(): Promise<Story[]>;
  getStoryById(id: string): Promise<Story | undefined>;
  createStory(story: InsertStory): Promise<Story>;
}

export class MemStorage implements IStorage {
  private alumni: Map<string, Alumni> = new Map();
  private events: Map<string, Event> = new Map();
  private registrations: Map<string, Registration> = new Map();
  private stories: Map<string, Story> = new Map();

  constructor() {
    this.seedData();
  }

  // Alumni methods
  async getAllAlumni(): Promise<Alumni[]> {
    return Array.from(this.alumni.values());
  }

  async getAlumniById(id: string): Promise<Alumni | undefined> {
    return this.alumni.get(id);
  }

  async createAlumni(insertAlumni: InsertAlumni): Promise<Alumni> {
    const id = randomUUID();
    const alumni: Alumni = { ...insertAlumni, id };
    this.alumni.set(id, alumni);
    return alumni;
  }

  // Event methods
  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.events.values()).sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  async getEventById(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const event: Event = { 
      ...insertEvent, 
      id, 
      createdAt: new Date() 
    };
    this.events.set(id, event);
    return event;
  }

  // Registration methods
  async getRegistrationsByEventId(eventId: string): Promise<Registration[]> {
    return Array.from(this.registrations.values()).filter(
      reg => reg.eventId === eventId
    );
  }

  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = randomUUID();
    const registration: Registration = { 
      ...insertRegistration, 
      id, 
      createdAt: new Date() 
    };
    this.registrations.set(id, registration);
    return registration;
  }

  // Story methods
  async getAllStories(): Promise<Story[]> {
    return Array.from(this.stories.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async getStoryById(id: string): Promise<Story | undefined> {
    return this.stories.get(id);
  }

  async createStory(insertStory: InsertStory): Promise<Story> {
    const id = randomUUID();
    const story: Story = { 
      ...insertStory, 
      id, 
      createdAt: new Date() 
    };
    this.stories.set(id, story);
    return story;
  }

  private seedData() {
    // Seed alumni data
    const alumniData = [
      {
        id: randomUUID(),
        name: "Sarah Johnson",
        graduationYear: 2018,
        company: "Google",
        location: "San Francisco, CA",
        skills: ["Software Engineering", "Machine Learning", "Python"],
        email: "sarah.johnson@example.com"
      },
      {
        id: randomUUID(),
        name: "Michael Chen",
        graduationYear: 2019,
        company: "Microsoft",
        location: "Seattle, WA", 
        skills: ["Cloud Computing", "Azure", "DevOps"],
        email: "michael.chen@example.com"
      },
      {
        id: randomUUID(),
        name: "Emily Rodriguez",
        graduationYear: 2020,
        company: "Tesla",
        location: "Austin, TX",
        skills: ["Electrical Engineering", "Automotive", "IoT"],
        email: "emily.rodriguez@example.com"
      }
    ];

    alumniData.forEach(alumni => this.alumni.set(alumni.id, alumni));

    // Seed events data
    const eventsData = [
      {
        id: randomUUID(),
        title: "Annual Alumni Reunion 2025",
        description: "Join us for our annual reunion celebration with networking, dinner, and campus tours.",
        date: new Date("2025-06-15T18:00:00"),
        location: "Engineering Campus Auditorium",
        createdAt: new Date()
      },
      {
        id: randomUUID(),
        title: "Tech Career Fair",
        description: "Connect with leading tech companies and explore new career opportunities.",
        date: new Date("2025-03-20T10:00:00"),
        location: "Student Center Hall",
        createdAt: new Date()
      }
    ];

    eventsData.forEach(event => this.events.set(event.id, event));

    // Seed stories data
    const storiesData = [
      {
        id: randomUUID(),
        title: "From Student to CTO: My Journey at Google",
        content: "After graduating in 2018, I joined Google as a software engineer. Through hard work and mentorship, I've grown to lead a team of 50+ engineers working on cutting-edge AI projects.",
        authorName: "Sarah Johnson",
        authorGradYear: 2018,
        createdAt: new Date("2025-01-10")
      },
      {
        id: randomUUID(),
        title: "Building the Future of Electric Vehicles",
        content: "My engineering background gave me the foundation to contribute to Tesla's mission of sustainable transportation. I'm proud to be part of the team developing next-generation battery technology.",
        authorName: "Emily Rodriguez", 
        authorGradYear: 2020,
        createdAt: new Date("2025-01-05")
      }
    ];

    storiesData.forEach(story => this.stories.set(story.id, story));
  }
}

export const storage = new MemStorage();
