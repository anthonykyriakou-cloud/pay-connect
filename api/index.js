import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { Resend } from "resend";

// Load environment variables
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    service: "keyconnections-api",
  });
});

// Example API endpoint
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from KeyConnections API!",
    timestamp: new Date().toISOString(),
  });
});

// Example POST endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Missing required fields: name, email, message",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Invalid email format",
      });
    }

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.TO_EMAIL || "anthonykyriakou.github@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 3px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the KeyConnections contact form.
          </p>
        </div>
      `,
    });

    console.log("Contact form submission:", { name, email, message });
    console.log("Email sent successfully:", emailResult);

    res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
      emailId: emailResult.data?.id,
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
});

// Catch-all route for undefined endpoints
app.use("*", (req, res) => {
  res.status(404).json({
    error: "Endpoint not found",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    error: "Internal server error",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`KeyConnections API running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});

export default app;
