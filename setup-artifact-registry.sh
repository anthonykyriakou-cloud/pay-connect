#!/bin/bash

# Setup script for Google Artifact Registry
# Run this script to create the necessary Artifact Registry repository

echo "Setting up Google Artifact Registry for KeyConnections API..."

# Get the current project ID
PROJECT_ID=$(gcloud config get-value project)
echo "Using project: $PROJECT_ID"

# Enable required APIs
echo "Enabling required APIs..."
gcloud services enable artifactregistry.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com

# Create Artifact Registry repository
echo "Creating Artifact Registry repository..."
gcloud artifacts repositories create keyconnections-api \
    --repository-format=docker \
    --location=us-central1 \
    --description="Docker repository for KeyConnections API"

# Configure Docker authentication
echo "Configuring Docker authentication..."
gcloud auth configure-docker us-central1-docker.pkg.dev

echo "✅ Artifact Registry setup complete!"
echo ""
echo "Repository URL: us-central1-docker.pkg.dev/$PROJECT_ID/keyconnections-api"
echo ""
echo "You can now run your Cloud Build trigger."
