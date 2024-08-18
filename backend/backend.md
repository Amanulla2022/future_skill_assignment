# Help Center API

## Description

The Help Center API is a RESTful service built with Node.js, Express, and MongoDB. It allows users to perform CRUD operations on help center cards. This API provides endpoints to create, retrieve, and fetch help center cards by their ID.

## Prerequisites

- Node.js and npm installed
- MongoDB instance running
- `.env` file for environment variables

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Amanulla2022/future_skill_assignment.git
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory of the project with the following content:

   ```env
   MONGODB_URL=mongodb://localhost:27017/helpcenter
   PORT=7000
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### POST /api/help/cards

- **Description**: Create a new help center card.
- **Request Body**:
  ```json
  {
    "title": "Card Title",
    "description": "Card Description"
  }
  ```
- **Response**:
  - **200 OK**: `{"message": "Post a card details..."}`
  - **500 Internal Server Error**: `{"message": "Unable to posts!"}`

### GET /api/help/cards

- **Description**: Retrieve all help center cards.
- **Response**:
  - **200 OK**: Array of help center cards
  - **500 Internal Server Error**: `{"message": "Unable to fetch all the cards"}`

### GET /api/help/cards/:cardID

- **Description**: Retrieve a help center card by ID.
- **Request Parameters**:
  - `cardID`: The ID of the card to retrieve.
- **Response**:
  - **200 OK**: Help center card object
  - **404 Not Found**: `{"message": "Card not found"}`
  - **500 Internal Server Error**: `{"message": "Unable to fetch a card by id"}`

## Environment Variables

- `MONGODB_URL`: The connection URL for MongoDB.
- `PORT`: The port on which the server will run.
