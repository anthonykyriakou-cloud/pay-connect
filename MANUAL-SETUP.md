# Manual Setup for Google Artifact Registry

Since you don't have `gcloud` installed locally, follow these steps in the Google Cloud Console:

## 1. Create Artifact Registry Repository

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **Artifact Registry** → **Repositories**
3. Click **Create Repository**
4. Configure:
   - **Name**: `keyconnections-api`
   - **Format**: Docker
   - **Mode**: Standard
   - **Region**: `us-central1`
5. Click **Create**

## 2. Enable Required APIs

1. Go to **APIs & Services** → **Library**
2. Search for and enable these APIs:
   - Artifact Registry API
   - Cloud Run API
   - Cloud Build API

## 3. Update Cloud Build Trigger

1. Go to **Cloud Build** → **Triggers**
2. Find your trigger for this repository
3. Click **Edit**
4. In **Configuration**:
   - **Type**: Cloud Build configuration file (yaml or json)
   - **Location**: Repository
   - **Cloud Build configuration file location**: `cloudbuild.yaml`
5. Click **Save**

## 4. Test the Build

1. Push your changes to the repository
2. The build should now use Artifact Registry instead of GCR
3. Monitor the build in Cloud Build console

## Alternative: Use Cloud Shell

If you prefer command line:

1. Open [Cloud Shell](https://shell.cloud.google.com/)
2. Run these commands:
   ```bash
   # Enable APIs
   gcloud services enable artifactregistry.googleapis.com
   gcloud services enable run.googleapis.com
   gcloud services enable cloudbuild.googleapis.com
   
   # Create repository
   gcloud artifacts repositories create keyconnections-api \
       --repository-format=docker \
       --location=us-central1 \
       --description="Docker repository for KeyConnections API"
   
   # Configure Docker auth
   gcloud auth configure-docker us-central1-docker.pkg.dev
   ```

## Troubleshooting

If you still see GCR errors:
1. Make sure there's only ONE `cloudbuild.yaml` file (in repository root)
2. Verify the Cloud Build trigger is pointing to the correct file
3. Check that the Artifact Registry repository exists
4. Ensure the service account has proper permissions
