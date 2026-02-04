import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import './index.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [cvData, setCvData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCVData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/cv`, {
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': API_KEY
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch CV data');
        }
        const data = await response.json();
        setCvData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching CV data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCVData();
  }, []);

  if (loading) {
    return <div className="loading">Loading CV data</div>;
  }

  if (error) {
    return (
      <div className="loading">
        <p>Error loading CV data: {error}</p>
        <p>Make sure the backend server is running on {API_URL}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Hero profile={cvData?.profile} />
        <Experience experiences={cvData?.experience} />
        <Skills specialties={cvData?.specialties} />
        <Education
          education={cvData?.education}
          certificates={cvData?.certificates}
        />
        <Contact profile={cvData?.profile} />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {cvData?.profile?.name}. All rights reserved.</p>
          <p className="footer-tagline">Built with React & Node.js</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
