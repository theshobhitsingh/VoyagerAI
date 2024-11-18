# VoyagerAI - Chat Application

**VoyagerAI** is an AI-powered chat application built with the goal of providing users with intelligent conversations, powered by Google Generative AI. The application is designed to help users interact with an AI, save chat history, and maintain a personalized conversation history.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Backend](#backend)
  - [API Endpoints](#api-endpoints)
  - [MongoDB Models](#mongodb-models)
- [Frontend](#frontend)
  - [Components](#components)
  - [Libraries Used](#libraries-used)
- [Authentication](#authentication)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [License](#license)

## Overview

VoyagerAI is designed to provide users with seamless and interactive experiences using a chat interface. It leverages **Google Generative AI** to power the AI's responses and **MongoDB** to store the user chats and interactions. The application also features a login/signup mechanism powered by **Clerk** for secure user authentication.

## Features
- **AI-Powered Conversations**: Engage with the AI and receive dynamic, intelligent responses.
- **User Authentication**: Sign up, log in, and manage user sessions with **Clerk**.
- **Chat History**: Save and retrieve past conversations with the AI.
- **Image Support**: Attach images to chats (powered by **ImageKit**).
- **Mobile-Friendly**: Optimized for use on desktop and mobile devices.
  
## Tech Stack

### Backend
- **Node.js**: JavaScript runtime to handle API requests.
- **Express.js**: Web framework for building the RESTful API.
- **MongoDB**: NoSQL database to store user chats and interaction history.
- **Clerk**: Authentication system to manage user sign-ins and sign-ups.
- **ImageKit**: Image upload and delivery service.

### Frontend
- **React.js**: Frontend framework for building the user interface.
- **React Router**: Navigation between different pages of the application.
- **TypeAnimation**: For smooth typing animations in the chat interface.
  
## Backend

### API Endpoints

#### `GET /api/userchats`
Fetches all the user's saved chats.

- **Authentication**: Requires the user to be logged in via Clerk.
- **Response**: 
  - A list of the user's saved chats, including the chat's ID and title.
  
- **Example Request**:
  ```bash
  GET /api/userchats
**Example Response**:
[
  {
    "_id": "60d21b4667d0d8992e610c85",
    "title": "First Chat",
    "createdAt": "2022-06-01T12:00:00Z"
  },
  {
    "_id": "60d21b4667d0d8992e610c86",
    "title": "Second Chat",
    "createdAt": "2022-06-10T14:30:00Z"
  }
]
GET /api/chats/:id
Fetches a specific chat by its ID for the logged-in user.

Authentication: Requires the user to be logged in via Clerk.

Parameters:

id: The ID of the chat to fetch.

GET /api/userchats
Fetches all the user's saved chats.

Authentication: Requires the user to be logged in via Clerk.
GET /api/chats/:id
Fetches a specific chat by its ID for the logged-in user.

Authentication: Requires the user to be logged in via Clerk.
PUT /api/chats/:id
Updates a specific chat with new information (like question, answer, or image).

Authentication: Requires the user to be logged in via Clerk.
Body:
json
Copy code
{
  "question": "User's new question",
  "answer": "AI's response",
  "img": "URL of the attached image"
}
MongoDB Models
Chat Model
The Chat model stores the user's chat history, including the role of the sender (user or model) and the content of the conversation.

javascript
Copy code
const chatSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    history: [
      {
        role: { type: String, enum: ["user", "model"], required: true },
        parts: [{ text: { type: String, required: true } }],
        img: { type: String, required: false }
      }
    ]
  },
  { timestamps: true }
);
UserChats Model
The UserChats model stores a list of chats for each user, along with the chat's title and creation timestamp.

javascript
Copy code
const userChatsSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    chats: [
      {
        _id: { type: String, required: true },
        title: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true }
);
Frontend
Components
Homepage
The landing page of the application, featuring a dynamic chat animation with the bot and human, and a "Get Started" button to navigate to the dashboard.

DashboardPage
The main page where users can interact with the AI. The chat history is displayed, and new chats can be initiated.

SignInPage
A page that allows users to sign in to the application via Clerk.

SignUpPage
A page where users can sign up for an account.

Libraries Used
React: The primary library for building the user interface.
React Router: For routing between different pages in the application.
TypeAnimation: Provides smooth typing effects for simulating chat interactions.
@tanstack/react-query: For managing and caching API requests.
Authentication
User authentication is powered by Clerk. Users can sign up and sign in using the Clerk API, which is integrated into the frontend. Clerk handles user sessions securely.

Authentication Flow:
User signs up or logs in via Clerk.
The user is authenticated and redirected to the dashboard page.
API calls to the backend are authenticated using the Clerk JWT token.
Installation
To run this application locally, follow these steps:

Clone the Repository:

bash
Copy code
git clone https://github.com/your-repo/voyagerai.git
cd voyagerai
Backend Setup:

Navigate to the backend directory.
Install dependencies:
bash
Copy code
npm install
Set up environment variables: Create a .env file and add the following variables:
env
Copy code
IMAGE_KIT_ENDPOINT=your-image-kit-endpoint
IMAGE_KIT_PUBLIC_KEY=your-public-key
IMAGE_KIT_PRIVATE_KEY=your-private-key
CLIENT_URL=http://localhost:5173
MONGO=your-mongo-db-connection-string
CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
Frontend Setup:

Navigate to the frontend directory.
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
Start the Backend:

In the backend directory, run:
bash
Copy code
npm run start
Now, the application should be running on http://localhost:3000 for the backend and http://localhost:5173 for the frontend.

Environment Variables
IMAGE_KIT_ENDPOINT: Endpoint for ImageKit service.
IMAGE_KIT_PUBLIC_KEY: Public key for ImageKit.
IMAGE_KIT_PRIVATE_KEY: Private key for ImageKit.
CLIENT_URL: URL of the frontend application.
MONGO: MongoDB connection string for connecting to the database.
CLERK_PUBLISHABLE_KEY: Clerk publishable API key.
CLERK_SECRET_KEY: Clerk secret API key.
License
This project is licensed under the MIT License - see the LICENSE file for details.
