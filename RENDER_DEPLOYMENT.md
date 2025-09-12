# AlumniConnect - Render Deployment Guide

## 🚀 Quick Deploy to Render

### Option 1: One-Click Deploy (Recommended)
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository: `Sankeerth9/AluminiConnect`
4. Use these settings:

**Basic Settings:**
- **Name**: `alumniconnect`
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `main`

**Build & Deploy:**
- **Build Command**: `npm ci && npm run build`
- **Start Command**: `npm start`
- **Node Version**: `20`

**Environment Variables:**
```
NODE_ENV=production
PORT=10000
SESSION_SECRET=your-super-secret-session-key-here
```

**Database Setup:**
1. In Render Dashboard, click "New +" → "PostgreSQL"
2. Name: `alumniconnect-db`
3. Plan: Free (or paid for production)
4. Copy the connection string
5. Add to your web service environment variables:
   ```
   DATABASE_URL=postgresql://username:password@host:port/database
   ```

### Option 2: Using render.yaml (Infrastructure as Code)
1. The `render.yaml` file is already configured
2. In Render Dashboard, click "New +" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect and use the `render.yaml` configuration

## 🔧 Render-Specific Optimizations

### Build Process
- **Multi-stage build**: Install all deps → Build → Remove dev deps
- **Caching**: Render caches `node_modules` between builds
- **Environment detection**: Automatically detects Node.js version

### Performance Optimizations
- **Static file serving**: Vite builds optimized static assets
- **Health checks**: `/api/health` endpoint for monitoring
- **Error handling**: Comprehensive error middleware

### Database Setup
After deployment, run database migrations:
```bash
# Connect to your Render service shell and run:
npm run db:push
```

## 📊 Monitoring & Logs

### Health Check
- **Endpoint**: `https://your-app.onrender.com/api/health`
- **Expected Response**: `{"status":"healthy","timestamp":"...","uptime":...}`

### Logs
- View real-time logs in Render Dashboard
- API requests are logged with timing information
- Error logs are automatically captured

## 🔒 Security Considerations

### Environment Variables
- **SESSION_SECRET**: Generate a strong random string
- **DATABASE_URL**: Automatically provided by Render PostgreSQL
- **NODE_ENV**: Set to `production`

### HTTPS
- Render automatically provides HTTPS
- All traffic is encrypted by default

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails - "vite: not found"**
   - ✅ **Fixed**: Updated Dockerfile to install all dependencies before build

2. **Database Connection Issues**
   - Ensure `DATABASE_URL` is set correctly
   - Check PostgreSQL service is running
   - Run `npm run db:push` to set up schema

3. **Port Issues**
   - Render uses port 10000 by default
   - Application automatically detects `PORT` environment variable

4. **Memory Issues**
   - Free tier has 512MB RAM limit
   - Consider upgrading to paid plan for production

### Performance Tips
- **Enable auto-deploy**: Automatic deployments on git push
- **Use CDN**: Render provides global CDN for static assets
- **Monitor usage**: Watch memory and CPU usage in dashboard

## 📈 Scaling

### Free Tier Limits
- 750 hours/month
- 512MB RAM
- Sleeps after 15 minutes of inactivity

### Paid Plans
- Always-on service
- More memory and CPU
- Custom domains
- SSL certificates

## 🎯 Post-Deployment Checklist

- [ ] Health check endpoint responding
- [ ] Database schema created (`npm run db:push`)
- [ ] Environment variables configured
- [ ] Custom domain configured (if needed)
- [ ] SSL certificate active
- [ ] Monitoring alerts set up

## 🔗 Useful Links

- [Render Documentation](https://render.com/docs)
- [Node.js on Render](https://render.com/docs/node)
- [PostgreSQL on Render](https://render.com/docs/databases)
- [Environment Variables](https://render.com/docs/environment-variables)
