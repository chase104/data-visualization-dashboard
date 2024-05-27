# Project Overview

## Dashboard

![Website Dashboard](./markdown_images/app_dashboard.jpg)

## Modal View

![Website Modal](./markdown_images/app_modal_image.jpg)

## Purpose

The goal of this project is to create a responsive dashboard using React and Chart.js that displays data in various formats.

## Requirements

- Integrate Chart.js with React to display at least three different types of charts.
- Ensure the dashboard is responsive and works well on both desktop and mobile devices.
- The design should be clean and user-friendly.

## Approach

### Initial Setup

#### Tools and Libraries:

- **React** for building the user interface.
- **Chart.js** for creating charts.
- **Vite** for project setup and build tool.
- **Babel** for transpiling JavaScript for older browsers.
- **Bootstrap** and **SASS** for modern CSS practices.
- **Redux Toolkit** for modern state management.

#### Wireframe Creation

Utilized design tools to create mockups of web-app layout prior to implementing code solutions.

#### Project Initialization:

- Used `npm create vite@latest` to initialize the client folder of the project.
- Configured Vite to use Babel when compiling React code into vanilla JavaScript.
- Created `server` directory for simple Node.js Express server for hosting and API integration.
- Configured Vite frontend to proxy requests to localhost server port during development.
- Configured server to serve static frontend files and handle single frontend request for API information.
- Configured server to use `helmet.js` for automatic essential security header setting.
- Setup `dotenv` for secure storage of API key so as to not expose it in source code or repository.
- Used `npm install` to install bootstrap, chart.js, react-chartjs-2, react-redux, @reduxjs/toolkit, fontawesome (icons), sass (modern CSS practice), axios, express, and dotenv.
- Setup and imported Sass files to import bootstrap and override key values such as primary and secondary theme colors.

### Design and Layout

#### Wireframe:

![Website Dashboard Wireframe](./markdown_images/dashboard.jpg)

![Website modal Wireframe](./markdown_images/modal_image.jpg)

The layout includes a header, a “filter” section for searching and future filtering options, a main content area for displaying charts, and a modal for larger chart viewing.

#### Responsive Design:

- Utilized Bootstrap Container and Grid tools along with Flexbox for layout and responsiveness.
- Utilized Bootstrap component display control to remove less-essential content on smaller screens.

### Implementation

#### Data Integration:

- Initially used static data when setting up site layout and chart placement.
- Integrated NREL API to pull live energy data on 10 cities and parse to fit Chart.js schemas.

#### Chart Types:

- Line Chart for city-specific solar energy capture trends over a 12-month period.
- Bar Chart for comparison of annual capture rates between various cities.
- Bar Chart for city-specific solar energy capture rate trends over a 12-month period.
- Pie Chart for displaying city-specific portions of captured solar energy potential vs. loss due to soiling (dust, dirt, etc.).

#### State Management:

- Managed state using the more modern Redux Toolkit and React’s useState hook.
- Passed state props as needed due to smaller codebase size.

#### Interactivity:

- Added expand and tooltip options for higher-resolution understanding of chart data.
- Added search functionality that filters based on chart title and cities used in a given graph.
- Added option to refresh the data pulled from the API (with a simple caching layer to limit the number of API calls).

### Testing and Deployment

#### Testing:

- Performed manual testing on various devices (desktop, tablet, mobile).
- Plans to implement Jest or Vitest for unit testing.

#### Deployment:

- Configured the application and deployed to Render.com as a web-service.

## Challenges and Solutions

### Challenge: Chart Responsiveness

- **Problem**: Ensuring charts were responsive on all devices.
- **Solution**: Used Bootstrap responsive grid to control charts-per-row at a given viewport width.

### Challenge: Implementing Unique Data Set from API

- **Problem**: The schema that Chart.js expects and the data supplied by the API were vastly different.
- **Solution**: Created a parsing function (`convertData`) that pulls relevant data from the returned API data and produces a Chart.js-friendly object structure.

### Challenge: Implementing DRY Programming for Various Charts

- **Problem**: Different chart types expect and require different inputs and configuration.
- **Solution**: Implement ternary and conditional measures to produce correct data and structure for different chart types.

## Future Improvements

### Interactivity

- More manual filters other than searching.
- Chart-specific tools for changing city, metrics, etc. on a specific chart.
- Implement logic to support multi-word city names. For timeline purposes, the app currently handles one-word city names.
- Add a “pinning” feature to allow specific graphs to always be displayed first.
- Add additional API integration to increase the number of chart types. The data from the single API serves for Line, Bar, and Pie charts only. Other API data would be needed to justify usage of other chart types.

### Move to TypeScript

- Given this is a small app, JavaScript was the quick and easy option here. Complex schema management would be easier to handle with TypeScript.

### Implement Vitest Unit Testing

- Switch from current design tool to a more powerful and standard design tool like Figma.

## Conclusion

This project demonstrates the ability to create a responsive dashboard using React, Chart.js, real-world data, and a handful of modern frontend technologies. Future improvements could include integrating more interactive features and views of data.
