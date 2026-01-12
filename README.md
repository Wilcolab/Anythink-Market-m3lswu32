# Anythink Market

This project is a full-stack application with a Node.js backend, React frontend, MongoDB database, and an additional Node.js Express server for task management.

## Project Structure

The project has the following files and directories:

- `backend/`: Node.js backend server (port 3000) using Express and MongoDB.
- `frontend/`: React frontend application (port 3001).
- `node-server/express-server/`: Express server for task management (port 8001).
- `python-server/`: Legacy Python server (no longer used).
- `docker-compose.yml`: Defines and runs the multi-container Docker application.

## Getting Started

To run the application using Docker, follow these steps:

1. Build and start the Docker containers:

   ```shell
   docker-compose up
   ```

   This will start all services: backend, frontend, MongoDB, and the task management server.

2. Access the applications:
   - Frontend: http://localhost:3001
   - Backend API: http://localhost:3000
   - Task Management API: http://localhost:8001
   - MongoDB: localhost:27017

## Task Management API (Node Server)

The Express server on port 8001 provides the following API routes:

- `GET /`: Returns "Hello World"
- `POST /tasks`: Adds a task to the task list. Request body: `{"text": "task description"}`
- `GET /tasks`: Retrieves the task list as JSON.

Example usage:

```bash
# Get tasks
curl http://localhost:8001/tasks

# Add a task
curl -X POST http://localhost:8001/tasks -H "Content-Type: application/json" -d '{"text": "New task"}'
```
