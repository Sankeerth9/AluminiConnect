import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "healthy", 
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    });
  });

  // Alumni routes
  app.get("/api/alumni", async (req, res) => {
    try {
      const alumni = await storage.getAllAlumni();
      res.json(alumni);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch alumni" });
    }
  });

  app.get("/api/alumni/:id", async (req, res) => {
    try {
      const alumni = await storage.getAlumniById(req.params.id);
      if (!alumni) {
        return res.status(404).json({ error: "Alumni not found" });
      }
      res.json(alumni);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch alumni" });
    }
  });

  app.post("/api/alumni", async (req, res) => {
    try {
      const alumni = await storage.createAlumni(req.body);
      res.status(201).json(alumni);
    } catch (error) {
      res.status(400).json({ error: "Failed to create alumni" });
    }
  });

  // Events routes
  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getAllEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch events" });
    }
  });

  app.get("/api/events/:id", async (req, res) => {
    try {
      const event = await storage.getEventById(req.params.id);
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch event" });
    }
  });

  app.post("/api/events", async (req, res) => {
    try {
      const event = await storage.createEvent(req.body);
      res.status(201).json(event);
    } catch (error) {
      res.status(400).json({ error: "Failed to create event" });
    }
  });

  // Registration routes
  app.get("/api/events/:eventId/registrations", async (req, res) => {
    try {
      const registrations = await storage.getRegistrationsByEventId(req.params.eventId);
      res.json(registrations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch registrations" });
    }
  });

  app.post("/api/events/:eventId/registrations", async (req, res) => {
    try {
      const registration = await storage.createRegistration({
        ...req.body,
        eventId: req.params.eventId
      });
      res.status(201).json(registration);
    } catch (error) {
      res.status(400).json({ error: "Failed to create registration" });
    }
  });

  // Stories routes
  app.get("/api/stories", async (req, res) => {
    try {
      const stories = await storage.getAllStories();
      res.json(stories);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch stories" });
    }
  });

  app.get("/api/stories/:id", async (req, res) => {
    try {
      const story = await storage.getStoryById(req.params.id);
      if (!story) {
        return res.status(404).json({ error: "Story not found" });
      }
      res.json(story);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch story" });
    }
  });

  app.post("/api/stories", async (req, res) => {
    try {
      const story = await storage.createStory(req.body);
      res.status(201).json(story);
    } catch (error) {
      res.status(400).json({ error: "Failed to create story" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
