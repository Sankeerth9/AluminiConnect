#!/bin/bash

# AlumniConnect Deployment Script
echo "🚀 Starting AlumniConnect deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 20 or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
    echo "❌ Node.js version 20 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Run TypeScript check
echo "🔍 Running TypeScript check..."
npm run check

if [ $? -ne 0 ]; then
    echo "❌ TypeScript check failed"
    exit 1
fi

# Build the application
echo "🏗️  Building application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully!"

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚠️  Warning: .env file not found. Make sure to set environment variables."
    echo "   Required variables:"
    echo "   - DATABASE_URL"
    echo "   - NODE_ENV"
    echo "   - PORT"
    echo "   - SESSION_SECRET"
fi

echo "🎉 Deployment preparation complete!"
echo "📋 Next steps:"
echo "   1. Set up your environment variables in .env file"
echo "   2. Configure your database"
echo "   3. Run 'npm start' to start the production server"
echo "   4. Or use 'npm run docker:build && npm run docker:run' for Docker deployment"
