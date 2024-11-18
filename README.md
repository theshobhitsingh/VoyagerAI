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

