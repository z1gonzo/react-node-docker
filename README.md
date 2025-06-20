# React-Node-Docker Project

This project demonstrates a full-stack application with:
- Frontend: React
- Backend: Node.js with Express
- Web server: Nginx
- Containerization: Docker and Docker Compose

## Project Structure

```
react-node-docker/
├── backend/          # Node.js backend code
│   ├── Dockerfile    # Docker configuration for backend
│   ├── package.json  # Backend dependencies
│   └── server.js     # Main backend file
├── frontend/         # React frontend code
│   └── Dockerfile    # Docker configuration for frontend
├── nginx/            # Nginx configuration files (to be created)
└── docker-compose.yml # Docker Compose configuration
```

## Features

- Simple API endpoints in the backend
- React frontend that can communicate with the backend
- Nginx as a reverse proxy to serve both frontend and backend
- Everything containerized using Docker

## Setup Instructions

### Prerequisites

- Docker
- Docker Compose

### Running the Project

1. Navigate to the project directory:
   ```bash
   cd react-node-docker
   ```

2. Build and start all services:
   ```bash
   docker-compose up --build
   ```

3. Access the application in your browser at `http://localhost`

## Backend API Endpoints

- GET `/api`: Returns a simple message from the backend
- POST `/api/data`: Accepts JSON with a `name` field and returns a personalized greeting

## Nginx Configuration

The nginx directory should contain an Nginx configuration file that acts as a reverse proxy for both the frontend and backend services.

## Docker Compose Services

- `frontend`: React application served on port 3000
- `backend`: Node.js/Express API served on port 5000
- `nginx`: Reverse proxy server

## Future Improvements

1. Add proper Nginx configuration files in the nginx directory
2. Create a React app in the frontend directory
3. Update Dockerfiles as needed for both frontend and backend
4. Implement more API endpoints in the backend
5. Add environment variable support for configuration
