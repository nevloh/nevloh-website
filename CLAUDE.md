# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Runs Next.js development server on http://localhost:3000
- `npm run build` - Creates production build with Next.js optimization
- `npm start` - Starts production server (requires build first)
- `npm run lint` - Runs Next.js ESLint configuration
- `npm test` - Runs Jest tests
- `npm run test:watch` - Runs tests in watch mode
- `npm run test:coverage` - Runs tests with coverage report
- `npm run export` - Exports static files for deployment
- `npm run analyze` - Analyzes bundle size
- `npm run type-check` - TypeScript type checking
- `npm run format` - Formats code with Prettier

## Architecture Overview

### Tech Stack
- **Frontend**: Next.js 14.2.5 with React 18.3.1 (file-based routing)
- **Styling**: Tailwind CSS with custom configuration  
- **Backend**: Firebase (Firestore for database, Firebase Auth for authentication)
- **State Management**: localStorage for simple auth state, React context patterns ready for expansion
- **Build System**: Next.js with automatic code splitting and optimization

### Project Structure
```
pages/                  # Next.js file-based routing
├── _app.js            # Next.js app wrapper (global layout/providers)
├── _document.js       # Custom HTML document structure
├── index.js           # Home page (/)
├── about.js           # About page (/about)
├── services.js        # Services page (/services)
├── contact.js         # Contact page (/contact)
├── login.js           # Login page (/login)
└── [other pages]      # Additional route pages

src/
├── components/          # Reusable UI components
│   ├── Layout.js       # Main layout wrapper with Navbar/Footer
│   ├── ProtectedRoute.js # Route guard for authenticated pages
│   └── [other UI components]
├── dashboard/          # Role-based dashboard components
│   ├── admin/         # Admin-specific components
│   ├── customer/      # Customer portal (planned)
│   └── driver/        # Driver dashboard (planned)
├── utils/             # Utility functions
├── firebase.js        # Firebase configuration and initialization
└── firebaseServices.js # Firestore CRUD operations

styles/                 # Global styles
├── globals.css        # Global CSS imports
└── [component styles] # Component-specific styles

public/                 # Static assets
├── images/            # Images and media
├── favicon.ico        # Site favicon
└── [other static files]
```

### Authentication & Authorization
- **Authentication**: Simple localStorage-based system (temporary solution)
- **Authorization**: Role-based access control with three roles: admin, customer, driver
- **Protected Routes**: Uses ProtectedRoute component with requiredRole prop in _app.js
- **Current Implementation**: Basic localStorage auth (should migrate to Firebase Auth)
- **Next.js Integration**: Auth logic handled in _app.js for global route protection

### Firebase Integration
- **Database**: Firestore with collections for customers, newsletter_subscribers
- **Services**: Comprehensive CRUD operations in firebaseServices.js
- **Environment**: Uses environment variables for Firebase config (REACT_APP_FIREBASE_*)

### Key Components
- **Layout**: Wraps public pages with consistent navbar/footer (uses Next.js Head, Link, Image)
- **ProtectedRoute**: Handles authentication and role-based access
- **CustomerDashboard**: Admin interface for managing customer data
- **firebaseServices**: Complete set of database operations
- **_app.js**: Global app wrapper with conditional layouts and route protection
- **_document.js**: Custom HTML document for SEO and performance optimization

### Current State & Future Development
- **Completed**: Public website, basic admin dashboard, customer form submission, Next.js conversion
- **In Progress**: File structure reorganization (moving pages to root directory)
- **Planned**: Customer portal, driver dashboard, proper Firebase Auth integration

### Important Notes
- Environment variables required for Firebase (check .env.example if available) 
- Authentication system is temporary - migrate to Firebase Auth for production
- Customer and driver dashboards are placeholder components
- Uses Next.js 14.2.5 with React 18.3.1 for better stability and performance
- File-based routing: pages in `/pages` directory map to routes automatically
- SEO optimized with Next.js Head component and structured data
- Images optimized with Next.js Image component for better performance

### Next.js Specific Features Used
- **File-based Routing**: Automatic routing based on file structure in `pages/`
- **API Routes**: Can be added in `pages/api/` for backend functionality
- **Image Optimization**: Using `next/image` for automatic image optimization
- **Head Management**: Using `next/head` for SEO and meta tags
- **Script Optimization**: Using `next/script` for third-party scripts
- **CSS Support**: Global CSS in `styles/globals.css` and CSS modules support
- **Bundle Optimization**: Automatic code splitting and tree shaking