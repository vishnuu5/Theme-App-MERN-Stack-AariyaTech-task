# Theme App - MERN Stack

A full-stack web application built with **MERN** (MongoDB, Express, React/Next.js, Node.js) that demonstrates advanced light/dark mode implementation with persistent user preferences and theme customization.

## Features

- **Light & Dark Mode**: Seamless theme switching with system detection
- **Persistent Preferences**: Theme choice saved using localStorage
- **Custom Themes**: Preset themes and custom color picker
- **Server-Side Rendering**: Next.js 16 with App Router
- **TypeScript**: Full type safety throughout the frontend
- **ShadCN UI**: Beautiful, accessible components
- **Responsive Design**: Mobile-first approach
- **MongoDB Integration**: Backend data persistence
- **RESTful API**: Express-based API endpoints

## Tech Stack

### Frontend

- **Next.js 16** - React framework with SSR and App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS v4** - Utility-first CSS framework
- **ShadCN UI** - Radix UI + Tailwind components
- **next-themes** - Theme management library
- **Lucide React** - Modern icon library

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing

## Getting Started

### Prerequisites

- Node.js 18+ and npm 9+
- MongoDB (local or MongoDB Atlas)
- Git

### Local Development Setup

**1. Clone the Repository**

```bash
git clone https://github.com/vishnuu5/Theme-App-MERN-Stack-AariyaTech-task.git
cd theme-app
```

**2. Frontend Setup**

```bash
cd frontend
npm install
```

Create `frontend/.env`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Start frontend:

```bash
npm run dev
```

Frontend runs on: `http://localhost:3000`

**3. Backend Setup**

```bash
cd ../backend
npm install
```

Create `backend/.env`:

```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/theme-app
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

Start backend:

```bash
npm run dev
```

Backend runs on: `http://localhost:5000`

## Requirements Checklist

### Core Requirements

- **Light Mode & Dark Mode Toggling** - Implemented with next-themes
- **Theme Persistence** - Uses localStorage via next-themes library
- **ShadCN UI Components** - All UI uses ShadCN components
- **MERN Stack**:
  - Frontend: React (Next.js 16 with SSR)
  - Backend: Node.js + Express with JavaScript
  - Database: MongoDB with Mongoose ODM

### Bonus Features Implemented

- **Custom Theme Customization** - 4 preset themes + color picker for primary/accent
- **TypeScript Integration** - Full frontend TypeScript support
- **Server-Side Rendering** - Next.js with proper SSG/CSR split

### Implementation Notes Met

- **API Routes** - Express backend handles all database operations
- **SSR Optimization** - Only layout uses SSR, pages use SSG for performance
- **Performance** - Most pages prefer SSG (home, about) over CSR

### Deployment & Documentation

- **Vercel Hosting** - Frontend deployment guide included
- **Render Hosting** - Backend deployment guide included
- **GitHub Repository** - Complete source code structure
- **README.md** - Comprehensive setup and deployment instructions

## Key Implementation Details

### Theme Management

- Uses **next-themes** for robust theme handling
- Detects system preference automatically
- Stores preference in localStorage with key `theme-preference`
- Supports three modes: light, dark, system

### Custom Themes

- Four preset themes: Blue, Purple, Green, Rose
- Color picker for primary and accent colors
- Custom theme stored in localStorage as JSON
- CSS variables dynamically applied to document root

### Backend API

**Themes Endpoints:**

- `GET /api/themes` - Get all themes
- `GET /api/themes/:id` - Get theme by ID
- `POST /api/themes` - Create new theme
- `PUT /api/themes/:id` - Update theme
- `DELETE /api/themes/:id` - Delete theme

**Users Endpoints:**

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

**Health Check:**

- `GET /api/health` - Backend status

## Deployment Guide

### Frontend Deployment (Vercel)

**Step 1: Push to GitHub**

```bash
git init
git add .
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/vishnuu5/Theme-App-MERN-Stack-AariyaTech-task.git
git push -u origin master
```

**Step 2: Connect to Vercel**

- Go to [vercel.com](https://vercel.com)
- Click "Add New" → "Project"
- Import your GitHub repository
- Select `frontend` folder as root directory

**Step 3: Set Environment Variables**

- In Vercel project settings → Environment Variables
- Add: `NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com/api`

**Step 4: Deploy**

- Click "Deploy"
- Vercel automatically deploys on every push

### Backend Deployment (Render)

**Step 1: Push Backend to GitHub**

```bash
cd backend
git init
git add .
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/vishnuu5/Theme-App-MERN-Stack-AariyaTech-task.git
git push -u origin master
```

**Step 2: Create Render Web Service**

- Go to [render.com](https://render.com)
- Click "New" → "Web Service"
- Connect your GitHub repository
- Select `backend` folder as root directory
- Choose Node as environment

**Step 3: Configure Build & Start Commands**

- Build Command: `npm install`
- Start Command: `npm start`

**Step 4: Set Environment Variables**
In Render dashboard, add:

```bash
NODE_ENV=production
PORT=10000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/theme-app
CORS_ORIGIN=https://your-frontend-url.vercel.app
```

**Step 5: Deploy**

- Click "Create Web Service"
- Render auto-deploys on GitHub push

### MongoDB Setup

**MongoDB Atlas**

1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create free account and cluster
3. Get connection string
4. Add to backend `.env`:

```bash
MONGODB_URI=
```

## Build Commands

**Frontend:**

```bash
npm run dev        # Development server with hot reload
npm run build      # Production build
npm start          # Start production server
npm run lint       # ESLint check
npm run type-check # TypeScript type checking
```

**Backend:**

```bash
npm run dev        # Development start
npm start          # Production start
```

## Customization Guide

### Adding New Preset Themes

Edit `frontend/components/theme-customizer.tsx`:

```javascript
const PRESET_THEMES = [
  {
    name: "Your Theme",
    primary: "#yourcolor",
    accent: "#accentcolor",
  },
];
```

### Modifying Color Tokens

Edit `frontend/app/globals.css`:

```css
:root {
  --color-primary-custom: #yourcolor;
  --color-accent-custom: #accentcolor;
}
```

### Adding New Pages

Create new file: `frontend/app/new-page/page.tsx`:

```typescript
export default function NewPage() {
  return <div>Your content</div>;
}
```

## Environment Variables Reference

### Frontend `.env` (Development)

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Frontend `.env.production` (Vercel)

```bash
NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com/api
```

### Backend `.env` (Development)

```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/theme-app
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### Backend `.env` (Render)

```bash
PORT=10000
MONGODB_URI=your_mongodb_atlas_connection_string
NODE_ENV=production
CORS_ORIGIN=https://your-vercel-frontend-url.app
```

## Database Models

### Theme Model

```javascript
{
  userId: ObjectId (optional),
  name: String,
  primary: String (hex color),
  accent: String (hex color),
  mode: String (light/dark/system),
  isDefault: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### User Model

```javascript
{
  email: String (unique),
  name: String,
  preferredTheme: ObjectId (Theme reference),
  createdAt: Date,
  updatedAt: Date
}
```

## Testing

### Theme Switching

1. Load app at `http://localhost:3000`
2. Click theme toggle in navbar
3. Choose Light, Dark, or System
4. Refresh page - preference persists
5. Open customizer (palette icon)
6. Try preset themes or custom colors

### API Testing

```bash
# Health check
curl http://localhost:5000/api/health

# Get all themes
curl http://localhost:5000/api/themes

# Create theme
curl -X POST http://localhost:5000/api/themes \
  -H "Content-Type: application/json" \
  -d '{"name":"MyTheme","primary":"#000000","accent":"#ffffff"}'
```

## Troubleshooting & Common Issues

### Issue 1: "Cannot find module '@/hooks/use-toast'"

**Problem**: Missing hook files in the `frontend/hooks` directory.
**Solution**:

- Ensure `frontend/hooks/use-toast.ts` and `frontend/hooks/use-mobile.ts` exist
- Run `npm install` in frontend directory to ensure all dependencies are installed
- Clear node_modules and reinstall if issue persists: `rm -rf node_modules && npm install`

### Issue 2: "Failed to resolve package babel-plugin-react-compiler"

**Problem**: React Compiler not needed and causing build errors.
**Solution**:

- Check `frontend/next.config.mjs`
- Remove or comment out `experimental.reactCompiler` flag
- The updated config uses Turbopack (default in Next.js 16) instead
- Run `npm run dev` again after fixing

### Issue 3: "Hydration mismatch" or "Text content did not match"

**Problem**: Server-rendered HTML doesn't match client-rendered HTML.
**Solution**:

- This is often caused by browser extensions (Grammarly, etc.)
- Confirmed fixed in `frontend/app/layout.tsx` with `suppressHydrationWarning` on body
- If still occurring, check for dynamic content without proper client-side handling
- Add `'use client'` directive to components that use browser APIs

### Issue 4: "Theme Customizer not working / Colors not changing"

**Problem**: Custom theme colors not applying to the app.
**Solution**:

- Verify CSS variables in `frontend/app/globals.css`
- Check custom properties are named `--color-primary-custom` and `--color-accent-custom`
- Ensure `localStorage` is enabled in browser
- Open DevTools → Application → Local Storage and verify `theme-preference` is saved
- Try clearing localStorage and refreshing: Press F12 → Console → `localStorage.clear()` → Refresh
- Verify theme-customizer component has proper CSS variable application logic

### Issue 5: "Frontend won't connect to backend"

**Problem**: Network error when calling backend API.
**Solution**:

- Check backend is running: `npm run dev` in backend directory
- Verify backend runs on port 5000 or check `backend/.env` for PORT setting
- Check `NEXT_PUBLIC_API_URL` in `frontend/.env.local` points to correct backend
- For local dev: `NEXT_PUBLIC_API_URL=http://localhost:5000/api`
- Check CORS settings in `backend/server.js`:
  ```javascript
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN || "http://localhost:3000",
      credentials: true,
    })
  );
  ```
- Test API directly: `curl http://localhost:5000/api/health`
- Check browser console for CORS errors (blue warning)

### Issue 6: "MongoDB connection fails"

**Problem**: Backend can't connect to MongoDB.
**Solution**:

- For local MongoDB: Ensure `mongod` service is running
- Check connection string in `backend/.env`:
  - Local: `mongodb://localhost:27017/theme-app`
  - Atlas: `mongodb+srv://username:password@cluster.mongodb.net/theme-app`
- Verify MongoDB is accessible on the network
- For MongoDB Atlas:
  - Whitelist your IP address in Network Access
  - Use correct username/password (not email)
  - Ensure connection string has database name at end
- Test connection: `mongosh "your_connection_string"`
- Check backend logs for specific error messages

### Issue 7: "Theme not persisting after refresh"

**Problem**: Theme preference resets on page reload.
**Solution**:

- Verify `localStorage` is enabled in browser settings
- Check DevTools → Application → Local Storage → `http://localhost:3000`
- Look for key: `theme-preference`
- If empty: next-themes might need initialization time
- Hard refresh page (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache and cookies, then refresh
- Ensure browser isn't in private/incognito mode (localStorage disabled)

### Issue 8: "Deployment fails on Vercel"

**Problem**: Build fails during Vercel deployment.
**Solution**:

- Check Vercel build logs for specific error
- Common causes:
  - Missing environment variables: Add `NEXT_PUBLIC_API_URL` in Vercel Settings
  - TypeScript errors: Run `npm run type-check` locally to verify
  - Wrong root directory: Ensure `frontend` folder is selected as root
- Ensure GitHub branch is correctly connected
- Try redeploying from Vercel dashboard

### Issue 9: "Backend deployment fails on Render"

**Problem**: Backend won't start on Render.
**Solution**:

- Check Render deployment logs
- Verify all environment variables are set:
  - `NODE_ENV=production`
  - `MONGODB_URI` (valid connection string)
  - `CORS_ORIGIN` (your Vercel frontend URL)
  - `PORT` (should be 10000 for Render, or leave unset)
- Ensure `backend/package.json` has correct `start` script
- Test locally: `npm run build && npm start`
- Check MongoDB connection from Render's server (IP whitelist)

### Issue 10: "Colors look different on mobile"

**Problem**: Responsive design not working properly.
**Solution**:

- App uses mobile-first Tailwind CSS approach
- Add `<meta name="viewport" content="width=device-width, initial-scale=1">` to layout (already included)
- Test in DevTools device mode (F12 → Toggle device toolbar)
- Check for hardcoded widths instead of responsive classes
- Responsive breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)

## Performance Optimization

- **Next.js**: Image optimization, code splitting, SSR where needed
- **Frontend**: Lazy loading components, memoization
- **Backend**: MongoDB indexing, connection pooling
- **Caching**: LocalStorage for theme persistence

## Technologies Deep Dive

### next-themes

- Handles theme persistence and system detection
- Prevents hydration mismatch
- Supports SSR rendering
- localStorage integration

### ShadCN UI Components

- Button, Card, Dialog
- Dropdown Menu, Label
- Toast notifications
- Fully customizable with Tailwind

### Tailwind CSS v4

- Improved performance with Turbopack
- Enhanced color system
- Built-in CSS nesting
- Design tokens in globals.css

### SSR vs SSG Strategy

- **layout.tsx**: Rendered on server (RSC) for theme provider setup
- **page.tsx**: Static generation (SSG) for home page
- **about/page.tsx**: Static generation (SSG) for about page
- **theme-customizer.tsx**: Client-side rendering (CSR) for interactivity
- Balances performance with interactivity requirements

## License

MIT License - See LICENSE file for details

## Live Demo & Links

- **Frontend URL**: https://your-vercel-url.vercel.app
- **Backend URL**: https://your-render-url.onrender.com
- **GitHub Repository**: https://github.com/vishnuu5/Theme-App-MERN-Stack-AariyaTech-task.git
- **API Documentation**: See Backend API section

## Bonus Features Implemented

- **TypeScript** throughout frontend
- **Server-Side Rendering** ready with Next.js App Router (optimized)
- **Theme Customization** with preset + custom colors
- **Responsive Design** for all devices
- **Production Deployment** guides for Vercel & Render
- **Complete Documentation** with troubleshooting examples
- **Missing Hooks** (use-toast, use-mobile) implemented
- **Hydration Error Fix** with suppressHydrationWarning
- **Next.js 16 Config** optimized (Turbopack, no React Compiler)
