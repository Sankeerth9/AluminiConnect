# CVR Alumni Network Platform

## Overview
A comprehensive alumni association platform for Government Engineering College (CVR) built with React, TypeScript, and Node.js. The platform enables alumni networking, event management, success story sharing, and administrative oversight through a modern, responsive web interface. The system features a clean dashboard-driven architecture with role-based functionality for alumni, administrators, and current students.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system and CSS variables
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API with `/api` prefix routing
- **Development**: Hot reload with Vite middleware integration
- **Error Handling**: Centralized error middleware with status codes

### Database and Data Layer
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Definition**: Type-safe schema definitions with automatic TypeScript generation
- **Migrations**: Drizzle Kit for schema management and migrations
- **Data Access**: Repository pattern with in-memory fallback for development

### Authentication and Authorization
- **Pattern**: Role-based access control (RBAC) system
- **User Roles**: Alumni (primary), College Administrators, Current Students, Mentors
- **Session Management**: Express sessions with PostgreSQL session store

### Component Architecture
- **Design System**: Consistent component library with variant-based styling
- **Layout System**: Responsive grid system with mobile-first approach
- **Navigation**: Sticky navigation with active state management
- **Cards**: Reusable card components for alumni, events, and stories
- **Forms**: Unified form components with validation states

### Development Patterns
- **Code Organization**: Shared schema between client and server
- **Type Safety**: End-to-end TypeScript with strict configuration
- **Path Mapping**: Organized imports with @ aliases for clean code structure
- **Development Tools**: Runtime error overlay and development banners

## External Dependencies

### Core Infrastructure
- **Database**: PostgreSQL via Neon serverless
- **Hosting**: Replit environment with development tooling
- **Build System**: Vite with React plugins and development middleware

### UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Icon System**: Lucide React for consistent iconography
- **Typography**: Inter and Playfair Display fonts from Google Fonts
- **Animations**: Class Variance Authority for component variants

### Development and Tooling
- **Validation**: Zod for runtime type checking and form validation
- **Date Handling**: date-fns for date formatting and manipulation
- **Utilities**: clsx and tailwind-merge for conditional styling
- **Code Quality**: TypeScript strict mode with comprehensive type checking

### Optional Integrations
- **Analytics**: Ready for analytics integration
- **Email Services**: Prepared for notification systems
- **Payment Processing**: Architecture supports donation portal integration
- **Social Authentication**: Framework ready for OAuth providers