# RoboCall AI Frontend

A beautiful and modern frontend for AI-powered robot calling platform. Built with React, Vite, and Tailwind CSS.

## Features

- Modern and responsive design
- AI agent creation interface
- Campaign management dashboard
- Real-time analytics and reporting
- Contact management system
- Mobile-friendly interface

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React Icons
- React Router DOM
- Recharts for data visualization

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd robocall-ai-frontend
```

2. Install dependencies
```bash
npm install
# or
pnpm install
```

3. Start development server
```bash
npm run dev
# or
pnpm run dev
```

4. Open http://localhost:5173 in your browser

### Build for Production

```bash
npm run build
# or
pnpm run build
```

## Deployment

### Deploy to Render

1. Connect your GitHub repository to Render
2. Create a new Static Site
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy

### Environment Variables

No environment variables required for basic setup.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # shadcn/ui components
├── pages/              # Page components
│   ├── LandingPage.jsx # Homepage
│   ├── Dashboard.jsx   # Main dashboard
│   ├── Campaigns.jsx   # Campaign management
│   ├── Contacts.jsx    # Contact management
│   ├── Analytics.jsx   # Analytics page
│   └── Settings.jsx    # Settings page
├── App.jsx             # Main app component
├── App.css             # Global styles
└── main.jsx            # Entry point
```

## Integration with Backend

This frontend is designed to work with the robo_calling_agent backend. To integrate:

1. Update API endpoints in the components
2. Configure CORS settings in your backend
3. Set up authentication if required

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License

