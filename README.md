# Todo App (Full Stack)

A full stack todo list application with authentication. Users can sign up or log in, receive a JWT token, and manage their personal tasks stored in a database.

---

## Features

- User signup and login
- JWT based authentication and authorization
- User specific task management
- RESTful API
- Persistent storage with MongoDB
- Full test coverage for frontend and backend

---
## Live Demo
## Live Demo

https://todo-website-1-gqno.onrender.com

You can use:
- username: test123
- password: test123

Or you can simply sign up.

## Tech Stack

### Frontend
- React
- JavaScript
- Axios
- Vite

### Backend
- Node.js
- Express
- JavaScript
- MongoDB (Mongoose)
- JWT (authentication)
- bcrypt (password hashing)

### Testing
- Vitest + Testing Library (frontend)
- Supertest + Node test (backend)

---

## Architecture Overview

The application follows a client server architecture:

- The frontend communicates with the backend using REST APIs
- Authentication is handled using JSON Web Tokens (JWT)
- After login or signup, the backend generates a token
- The frontend stores the token and includes it in requests
- Protected routes verify the token before returning data
- Each user only accesses their own tasks
- Data is stored in MongoDB using Mongoose models

---


