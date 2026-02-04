# Personal CV Website

A modern, full-stack personal website showcasing professional experience as a Senior Cloud Architect. Built with React frontend and Node.js backend API.

## Features

- 🎨 Modern design with dark theme and glassmorphism effects
- 📱 Fully responsive for all devices
- ⚡ Fast and lightweight
- 🔄 Real-time data from REST API
- ✨ Smooth animations and transitions
- 🎯 SEO optimized
- 🔒 Secure API Key Authentication

## Security

The backend is protected by API Key authentication to prevent unauthorized access to CV data.
- **Backend**: Requires `X-API-Key` header in all requests
- **Frontend**: Automatically configured to send the key via environment variables

## Tech Stack

### Backend
- Node.js
- Express
- CORS enabled

### Frontend
- React 18
- Vite
- CSS3 with custom properties
- Google Fonts (Inter)

## Project Structure

```
cv-website/
├── backend/
│   ├── data/
│   │   └── cv-data.js       # CV data structure
│   ├── server.js            # Express server
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/      # React components
    │   ├── App.jsx          # Main app component
    │   ├── index.css        # Design system
    │   └── main.jsx         # Entry point
    ├── index.html
    └── package.json
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation & Running

### Installation & Running

1. **Start the Backend API**
   ```bash
   cd backend
   npm install
   
   # Create .env file with API Key
   echo "API_KEY=your-secret-key-here" > .env
   
   npm start
   ```
   Backend will run on http://localhost:3001

2. **Start the Frontend** (in a new terminal)
   ```bash
   cd frontend
   npm install
   
   # Create .env file with API Key
   echo "VITE_API_URL=http://localhost:3001" > .env
   echo "VITE_API_KEY=your-secret-key-here" >> .env
   
   npm run dev
   ```
   Frontend will run on http://localhost:5173

3. **Open your browser**
   Navigate to http://localhost:5173

## API Endpoints

- `GET /api/cv` - Complete CV data
- `GET /api/profile` - Personal information
- `GET /api/experience` - Work experience
- `GET /api/skills` - Technical skills
- `GET /api/certificates` - Certifications
- `GET /api/education` - Education history
- `GET /health` - Health check

## Customization

To update CV content, edit `/backend/data/cv-data.js` with your information.

## Building for Production

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm run preview
```

## License

MIT

---

Built with ❤️ using React and Node.js
