# Hawassa Reformed Baptist Church (HRBC) Website

Welcome to the official repository for the Hawassa Reformed Baptist Church (HRBC) website. This project is a modern, responsive web application built to serve the church community by providing information about sermons, ministries, donations, and more.

##  About The Project

This website serves as a digital hub for the HRBC community. It is designed to be accessible, user-friendly, and visually appealing, offering content in both English and Amharic.

### Key Features
- **Bilingual Support**: Seamless integration of English and Amharic languages using `i18next`.
- **Sermons Library**: Access to sermon archives and featured messages.
- **Online Giving**: Dedicated page for donations and tithing information.
- **Ministries**: Information about various church ministries and activities.
- **Responsive Design**: precise layout and styling for desktop and mobile devices using a custom CSS design system.
- **Modern UI**: Clean aesthetics with smooth animations and interactive elements.

##  Technology Stack

The project is built using the following technologies:

- **[React](https://react.dev/)**: Frontend library for building the user interface.
- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling for fast development and building.
- **[React Router](https://reactrouter.com/)**: For handling client-side navigation and routing.
- **[i18next](https://www.i18next.com/)**: For internationalization (i18n) and language switching.
- **[Lucide React](https://lucide.dev/)**: For beautiful and consistent iconography.
- **Vanilla CSS**: Custom-built design system with utility classes for flexible styling without external CSS framework dependencies.

##  Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (usually comes with Node.js)

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory:
    ```bash
    cd HRBC
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Running the Application

To start the development server:
```bash
npm run dev
```
The application will be available at your local machine.

### Building for Production

To create a production-ready build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

##  Project Structure

```
src/
├── assets/         # Static assets like images and icons
├── components/     # Reusable UI components (Layout, Header, Footer, etc.)
├── locales/        # Translation files (en, am)
├── pages/          # Application pages (Home, About, Sermons, etc.)
├── App.jsx         # Main application component with routing
├── i18n.js         # Internationalization configuration
├── index.css       # Global styles and custom design system
└── main.jsx        # Entry point
```

##  License

Hawassa Reformed Baptist Church. All rights reserved
