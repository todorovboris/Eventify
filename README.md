# Eventify - Event Manager Platform

## **Description**
Eventify is a web application built with React that allows users to create, manage, and participate in events. The application is divided into a public section, accessible to all users, and a private section for registered users. 

The platform supports full CRUD operations for events and includes features such as authentication, route guards, and a modern, user-friendly UI.

Hosting URL: https://eventify-455612.web.app

---

## **Features**
- **Public Section:**
  - Browse events (catalog view).
  - View detailed information for each event.
  - User login and registration.

- **Private Section:**
  - Dashboard for managing user events (created and attended).
  - Create, edit, and delete events (for event authors).
  - Sign up for events as a participant.

- **Additional Features:**
  - Full authentication and route guards.
  - Error handling and form validation.
  - Responsive design with intuitive user experience.

---

## **Technologies Used**
- **Frontend:**
  - React.js
  - React Router
  - Context API
  - CSS for styling

- **Backend:**
  - SoftUni Practice Server

- **Other:**
  - GitHub for source control
  - FE Deployment on [Firebase] 
  - BE Deployment on [Google Cloud Run]

---

## **Project Structure**
The project is divided into the following folders:
- `/api`: API logic for events, tickets purchasing and authentication.
- `/components`: Contains React components for public and private sections.
- `/contexts`: Context API for authentication.
- `/utils; /hooks; /helpers`: Utility functions and hooks which allows to modify the components easier.
- `/public`: CSS files and images for styling.

---

## **How to Run Locally**
1. Clone the repository:
   ```bash
   git clone https://github.com/todorovboris/Eventify

2. Navigate to the project directory:
   ```bash
   cd Eventify/client

3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm run dev

5. The app will run at http://localhost:5173


## Contact
For any questions or feedback, please contact:

Name: Boris Todorov;
Email: btodorovtodorov@gmail.com;
GitHub: [https://github.com/todorovboris];

