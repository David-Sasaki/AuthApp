# React/Express Authentication Module

This project is a full-stack web application built with React for the frontend and Express for the backend, aimed at implementing an authentication module.

## Features

- **Frontend:**
  - Sign In/Sign Up page for user authentication.
  - Dashboard page to display user emails and IDs.
  - Integration of Redux for state management.
  - Axios for making HTTP requests.
  - Material-UI (MUI) for styling.

- **Backend:**
  - MongoDB integration for data storage.
  - Implementation of JWT (JSON Web Tokens) for authentication.
  - Three APIs:
    - `/auth/signup`: User registration with password encryption using bcrypt.
    - `/auth/signin`: User authentication.
    - `/users`: Endpoint to fetch user data, requiring authorization.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-express-auth.git
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd react-express-auth
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. Set up MongoDB:
   
   - Install MongoDB and start the server.
   - Update the MongoDB connection string in `backend/config.js`.

## Usage

1. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server:

   ```bash
   cd frontend
   npm start
   ```

3. Access the application at `http://localhost:3000` in your browser.

## API Endpoints

- `/auth/signup`: POST request to register a new user.
- `/auth/signin`: POST request to authenticate a user.
- `/users`: GET request to fetch user data (requires authorization).

## Contributors

- John Doe
- Jane Smith

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
