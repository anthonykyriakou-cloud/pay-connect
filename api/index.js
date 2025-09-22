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
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Business Inquiry - KeyConnections</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f8fafc; min-height: 100vh;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table cellpadding="0" cellspacing="0" border="0" style="max-width: 650px; width: 100%; background-color: #ffffff; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); overflow: hidden;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                        🔑 KeyConnections
                      </h1>
                      <p style="margin: 8px 0 0 0; color: #e2e8f0; font-size: 16px; font-weight: 400;">
                        New Business Inquiry Received
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <div style="background-color: #f1f5f9; padding: 24px; border-radius: 12px; border-left: 6px solid #667eea; margin-bottom: 30px;">
                        <h2 style="margin: 0 0 16px 0; color: #1e293b; font-size: 20px; font-weight: 600;">
                          📋 Contact Information
                        </h2>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">
                              <strong style="color: #475569; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Name:</strong>
                              <span style="color: #1e293b; font-size: 16px; margin-left: 12px;">${name}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">
                              <strong style="color: #475569; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email:</strong>
                              <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-size: 16px; margin-left: 12px;">${email}</a>
                            </td>
                          </tr>
                        </table>
                      </div>
                      
                      <!-- Message Content -->
                      <div style="background-color: #ffffff; border: 2px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
                        <h3 style="margin: 0 0 16px 0; color: #1e293b; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                          💼 Business Details
                        </h3>
                        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; line-height: 1.6; color: #374151; font-size: 15px; white-space: pre-line;">
${message}
                        </div>
                      </div>
                      
                      <!-- Action Buttons -->
                      <div style="text-align: center; margin: 30px 0;">
                        <a href="mailto:${email}?subject=Re: Payment Solutions Inquiry" 
                           style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 0 8px; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);">
                          📧 Reply to Client
                        </a>
                        <a href="https://keyconnections.io" 
                           style="display: inline-block; background-color: #f1f5f9; color: #475569; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 0 8px; border: 2px solid #e2e8f0;">
                          🌐 Visit Website
                        </a>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #1e293b; padding: 30px; text-align: center;">
                      <div style="margin-bottom: 20px;">
                        <h3 style="margin: 0 0 12px 0; color: #ffffff; font-size: 18px; font-weight: 600;">
                          KeyConnections
                        </h3>
                        <p style="margin: 0; color: #94a3b8; font-size: 14px; line-height: 1.5;">
                          Connecting merchants with trusted payment providers worldwide
                        </p>
                      </div>
                      
                      <div style="border-top: 1px solid #334155; padding-top: 20px;">
                        <p style="margin: 0; color: #64748b; font-size: 12px;">
                          This email was automatically generated from your KeyConnections contact form.<br>
                          Received on ${new Date().toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            timeZone: 'UTC'
                          })} UTC
                        </p>
                        <div style="margin-top: 16px;">
                          <a href="mailto:support@keyconnections.io" style="color: #94a3b8; text-decoration: none; font-size: 12px;">
                            support@keyconnections.io
                          </a>
                          <span style="color: #475569; margin: 0 8px;">•</span>
                          <a href="https://keyconnections.io" style="color: #94a3b8; text-decoration: none; font-size: 12px;">
                            keyconnections.io
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
