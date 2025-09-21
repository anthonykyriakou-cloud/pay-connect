# KeyConnections API

Google Cloud Run function for the KeyConnections application backend services.

## Local Development

1. **Install dependencies:**
   ```bash
   cd api
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

3. **Run locally:**
   ```bash
   npm run dev
   ```

4. **Test the API:**
   ```bash
   # Health check
   curl http://localhost:8080/health
   
   # Hello endpoint
   curl http://localhost:8080/api/hello
   
   # Contact form (POST)
   curl -X POST http://localhost:8080/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"John Doe","email":"john@example.com","message":"Hello!"}'
   ```

## Deployment

### Option 1: Using Cloud Build (Recommended)

1. **Set up Artifact Registry (one-time setup):**
   ```bash
   # Run the setup script
   ./setup-artifact-registry.sh
   
   # Or manually:
   gcloud services enable artifactregistry.googleapis.com
   gcloud artifacts repositories create keyconnections-api \
       --repository-format=docker \
       --location=us-central1 \
       --description="Docker repository for KeyConnections API"
   ```

2. **Set up Cloud Build trigger:**
   - Go to Cloud Build in Google Cloud Console
   - Create a new trigger
   - Connect your repository
   - Set build configuration to use `cloudbuild.yaml` (located in repository root)

3. **Deploy automatically:**
   - Push to your main branch
   - Cloud Build will automatically build and deploy

**Note:** The `cloudbuild.yaml` file is in the repository root, not in the `api/` folder, because Cloud Build expects it there.

### Option 2: Manual Deployment

1. **Build and push image:**
   ```bash
   # Set your project ID
   export PROJECT_ID=your-project-id
   
   # Build the image
   docker build -t gcr.io/$PROJECT_ID/keyconnections-api .
   
   # Push to Container Registry
   docker push gcr.io/$PROJECT_ID/keyconnections-api
   ```

2. **Deploy to Cloud Run:**
   ```bash
   gcloud run deploy keyconnections-api \
     --image gcr.io/$PROJECT_ID/keyconnections-api \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated
   ```

### Option 3: Using npm script

```bash
cd api
npm run deploy
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

- `PORT`: Server port (default: 8080)
- `NODE_ENV`: Environment (development/production)
- `SMTP_*`: Email configuration for contact forms
- `CORS_ORIGIN`: Allowed CORS origins

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/hello` - Simple hello endpoint
- `POST /api/contact` - Contact form submission

## Project Structure

```
api/
├── index.js              # Main application entry point
├── package.json          # Dependencies and scripts
├── Dockerfile            # Container configuration
├── cloudbuild.yaml       # Cloud Build configuration
├── .env.example          # Environment variables template
├── .dockerignore         # Docker ignore file
└── README.md            # This file
```

## Troubleshooting

### Common Cloud Build Issues

1. **"dockerfile parse error line 1: unknown instruction: STEPS:"**
   - **Cause:** Cloud Build is trying to use cloudbuild.yaml as a Dockerfile
   - **Solution:** Make sure your Cloud Build trigger points to `cloudbuild.yaml` in the repository root, not in the `api/` folder

2. **"Dockerfile not found"**
   - **Cause:** Cloud Build can't find the Dockerfile
   - **Solution:** The build configuration uses `-f api/Dockerfile` to specify the correct path

3. **Permission errors**
   - **Cause:** Insufficient IAM permissions
   - **Solution:** Ensure your Cloud Build service account has the necessary roles:
     - Cloud Run Admin
     - Storage Admin
     - Service Account User

4. **"gcr.io repo does not exist"**
   - **Cause:** Using deprecated Google Container Registry (GCR)
   - **Solution:** Use Google Artifact Registry instead:
     ```bash
     ./setup-artifact-registry.sh
     ```

### Alternative Build Configuration

If you continue having issues, try the simpler configuration:
```yaml
# Use cloudbuild-simple.yaml instead
steps:
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/keyconnections-api:$COMMIT_SHA', '-f', 'api/Dockerfile', 'api']
  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'gcr.io/$PROJECT_ID/keyconnections-api:$COMMIT_SHA']
  - name: 'gcr.io/cloud-builders/gcloud'
    args: ['run', 'deploy', 'keyconnections-api', '--image', 'gcr.io/$PROJECT_ID/keyconnections-api:$COMMIT_SHA', '--region', 'us-central1', '--platform', 'managed', '--allow-unauthenticated']
```

## Monitoring

- View logs in Cloud Run console
- Monitor performance in Cloud Monitoring
- Set up alerts for errors and performance issues
