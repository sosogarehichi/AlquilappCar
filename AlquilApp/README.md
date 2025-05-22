# AlquilApp

AlquilApp is a full-stack application built with TypeScript, React for the frontend, and Node.js with Express for the backend. This project aims to provide a robust platform for managing rental applications.

## Project Structure

The project is organized into two main directories: `frontend` and `backend`.

### Frontend

The frontend is built using React and TypeScript. It includes:

- **src/**: Contains the source code for the React application.
  - **index.tsx**: Entry point of the React application.
  - **App.tsx**: Main application component.
  - **components/**: Reusable components.
  - **pages/**: Different pages of the application.
  - **styles/**: CSS styles, including Tailwind CSS.
  - **types/**: Type definitions for the frontend.

- **public/**: Contains static files, including the main HTML file.
- **package.json**: Lists dependencies and scripts for the frontend.
- **tsconfig.json**: TypeScript configuration for the frontend.
- **README.md**: Documentation specific to the frontend.

### Backend

The backend is built using Node.js, Express, and TypeScript. It includes:

- **src/**: Contains the source code for the backend application.
  - **app.ts**: Entry point of the backend application.
  - **controllers/**: Contains controllers for handling API requests.
  - **routes/**: Defines the routes for the application.
  - **models/**: Data models for interacting with the database.
  - **types/**: Type definitions for the backend.

- **package.json**: Lists dependencies and scripts for the backend.
- **tsconfig.json**: TypeScript configuration for the backend.
- **README.md**: Documentation specific to the backend.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the `frontend` directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

3. Navigate to the `backend` directory and install dependencies:
   ```
   cd ../backend
   npm install
   ```

4. Start the backend server:
   ```
   npm start
   ```

5. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.