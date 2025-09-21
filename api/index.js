import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'keyconnections-api'
  });
});

// Example API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ 
    message: 'Hello from KeyConnections API!',
    timestamp: new Date().toISOString()
  });
});

// Example POST endpoint
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, message' 
      });
    }
    
    // Here you would typically:
    // 1. Validate email format
    // 2. Send email using nodemailer
    // 3. Store in database
    // 4. Send confirmation
    
    console.log('Contact form submission:', { name, email, message });
    
    res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
});

// Catch-all route for undefined endpoints
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Endpoint not found' 
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`KeyConnections API running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});

export default app;
