### HERO.IO - A Modern App Marketplace

Welcome to HERO.IO! This is a modern, performance-focused web application I built to showcase mobile apps. My main goal for this project was to leverage modern React features to create a clean, snappy, and dynamic user experience.

### Features & Philosophy

I focused on incorporating features that make the application fast, reliable, and user-friendly.

Seamless Navigation: Explore individual apps with unique, dynamic pages, all handled smoothly by react-router. The experience is designed to be fluid and intuitive.

Centralized State Management: To keep the application's data flow clean and predictable, I used React's built-in Context API along with the useReducer Hook for robust global state management.

Stunning Data Visualization: App ratings are brought to life with beautiful, interactive bar charts powered by Recharts, making data both informative and visually appealing.

Peak Performance:

Code splitting with React.lazy and Suspense ensures a lightning-fast initial page load.

Unnecessary re-renders are prevented using React.memo and useMemo to keep the UI snappy.

The UI remains responsive even during heavy operations (like live search) thanks to the useTransition Hook.

Data Persistence: A user's list of installed apps is saved to localStorage, so their data persists across sessions.

Fully Responsive: Built with Tailwind CSS, the entire application is fully responsive and looks great on all devices, from small mobile screens to large desktops.

Interactive Feedback: Users receive clear and pleasant feedback on their actions through notifications from React Toastify.

### Tech Stack & Tools

I chose a modern, performance-oriented stack to bring this project to life:

Core Framework: React

Build Tool: Vite

Styling: Tailwind CSS

Routing: React Router (v7+)

State Management: React Context API with useReducer

Icons: Lucide React

Data Visualization: Recharts

Notifications: React Toastify

Asynchronous Operations: Native fetch API

### Getting Started

Want to get the project running on your local machine? Just follow these simple steps.

Prerequisites
Make sure you have Node.js (version 16 or later) and npm installed on your system.

Installation
Clone the repository:

Bash

```
git clone https://github.com/CodeWithArafat1/hero-apps.git
```

Navigate to the project directory:

Bash

cd hero-apps
Install the necessary dependencies:

Bash

### npm install

Running the Development Server
To start the development server, run the following command:

Bash

### npm run dev

Now, open your browser and navigate to http://localhost:5173 (or the port shown in your terminal).

### Available Scripts

npm run dev: Starts the development server.

npm run build: Builds the app for production.

npm run lint: Lints the code for potential errors.

npm run preview: Previews the production build locally.

© 2025 HERO.IO. All Rights Reserved.
