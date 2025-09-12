# AlumniConnect Deployment Guide

## Prerequisites

- Node.js 20 or higher
- PostgreSQL database (for production)
- Docker (optional, for containerized deployment)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/alumniconnect

# Server Configuration
NODE_ENV=production
PORT=5000

# Session Configuration (for production, use a secure secret)
SESSION_SECRET=your-super-secret-session-key-here
```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

## Production Deployment

### Option 1: Direct Node.js Deployment

1. Install dependencies:
   ```bash
   npm ci --only=production
   ```

2. Build the application:
   ```bash
   npm run build
   ```

3. Start the production server:
   ```bash
   npm start
   ```

### Option 2: Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t alumniconnect .
   ```

2. Run the container:
   ```bash
   docker run -p 5000:5000 -e DATABASE_URL=your_database_url alumniconnect
   ```

### Option 3: Platform Deployment (Heroku, Railway, etc.)

1. Ensure your platform supports Node.js 20+
2. Set the environment variables in your platform's dashboard
3. Deploy using your platform's deployment method

## Database Setup

For production, you'll need a PostgreSQL database. The application uses Drizzle ORM with the following tables:

- `alumni` - Alumni profiles
- `events` - Events and gatherings
- `registrations` - Event registrations
- `stories` - Success stories

To set up the database schema:

```bash
npm run db:push
```

## Security Considerations

1. **Environment Variables**: Never commit `.env` files to version control
2. **Session Secret**: Use a strong, random session secret in production
3. **Database Security**: Use connection pooling and secure database credentials
4. **HTTPS**: Always use HTTPS in production
5. **CORS**: Configure CORS appropriately for your domain

## Performance Optimization

1. **Static Assets**: The build process optimizes and minifies all static assets
2. **Database Indexing**: Consider adding indexes for frequently queried fields
3. **Caching**: Implement Redis or similar for session storage in production
4. **CDN**: Use a CDN for static asset delivery

## Monitoring

- Monitor application logs for errors
- Set up health checks on `/api/health` endpoint
- Monitor database performance and connections
- Track user engagement metrics

## Troubleshooting

### Common Issues

1. **Port Already in Use**: Change the PORT environment variable
2. **Database Connection**: Verify DATABASE_URL is correct and database is accessible
3. **Build Failures**: Ensure all dependencies are installed and TypeScript compiles without errors

### Logs

The application logs API requests with timing information. Check the console output for debugging information.

## Support

For deployment issues, check:
1. Environment variables are set correctly
2. Database is accessible and schema is up to date
3. All dependencies are installed
4. Port is available and not blocked by firewall
