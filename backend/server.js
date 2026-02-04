import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { cvData } from './data/cv-data.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const API_KEY = process.env.API_KEY;

// Middleware
app.use(cors());
app.use(express.json());

// API Key Authentication Middleware
const authenticateApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
        return res.status(401).json({
            error: 'Unauthorized',
            message: 'API key is required. Please provide X-API-Key header.'
        });
    }

    if (apiKey !== API_KEY) {
        return res.status(403).json({
            error: 'Forbidden',
            message: 'Invalid API key.'
        });
    }

    next();
};

// Health check (no authentication required)
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Protected API Routes (require authentication)
app.get('/api/profile', authenticateApiKey, (req, res) => {
    res.json(cvData.profile);
});

app.get('/api/experience', authenticateApiKey, (req, res) => {
    res.json(cvData.experience);
});

app.get('/api/education', authenticateApiKey, (req, res) => {
    res.json(cvData.education);
});

app.get('/api/skills', authenticateApiKey, (req, res) => {
    res.json(cvData.specialties);
});

app.get('/api/certificates', authenticateApiKey, (req, res) => {
    res.json(cvData.certificates);
});

app.get('/api/hobbies', authenticateApiKey, (req, res) => {
    res.json(cvData.hobbies);
});

// Get all CV data (protected)
app.get('/api/cv', authenticateApiKey, (req, res) => {
    res.json(cvData);
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 CV Backend API running on http://localhost:${PORT}`);
    console.log(`📊 API endpoints available at http://localhost:${PORT}/api/cv`);
    console.log(`🔐 API Key authentication enabled`);
    if (!API_KEY) {
        console.warn('⚠️  WARNING: No API_KEY set in environment variables!');
    }
});
