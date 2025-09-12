import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Alumni profiles table
export const alumni = pgTable("alumni", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  graduationYear: integer("graduation_year").notNull(),
  company: text("company"),
  location: text("location"),
  skills: text("skills").array(),
  email: text("email"),
});

// Events table
export const events = pgTable("events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description"),
  date: timestamp("date").notNull(),
  location: text("location"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Event registrations table
export const registrations = pgTable("registrations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  eventId: varchar("event_id").notNull(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Success stories table
export const stories = pgTable("stories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  content: text("content").notNull(),
  authorName: text("author_name").notNull(),
  authorGradYear: integer("author_grad_year"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Insert schemas
export const insertAlumniSchema = createInsertSchema(alumni).omit({ id: true });
export const insertEventSchema = createInsertSchema(events).omit({ id: true, createdAt: true });
export const insertRegistrationSchema = createInsertSchema(registrations).omit({ id: true, createdAt: true });
export const insertStorySchema = createInsertSchema(stories).omit({ id: true, createdAt: true });

// Types
export type Alumni = typeof alumni.$inferSelect;
export type Event = typeof events.$inferSelect;
export type Registration = typeof registrations.$inferSelect;
export type Story = typeof stories.$inferSelect;

export type InsertAlumni = z.infer<typeof insertAlumniSchema>;
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type InsertStory = z.infer<typeof insertStorySchema>;
