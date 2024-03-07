# Cleankoding Product Showcase

Cleankoding is a Single Page Application (SPA) built with React that utilizes the Fake Store API to fetch and display products. The core functionality of this application is to enable users to filter the displayed products based on their categories through a dropdown menu.

## Key Features

1. **Fetching Data**: Products data is fetched from the [Fake Store API](https://fakestoreapi.com/), including details such as name, image, description, and category.

2. **Category Dropdown**: A dropdown menu in the UI lists all the unique categories obtained from the API data, allowing users to filter products by category.

3. **Filter Functionality**: Upon selecting a category from the dropdown or using the search box, the application dynamically updates to show the filtered results.

4. **Display Products**: Products are displayed in a user-friendly manner, including images, names, and descriptions.

5. **Error Handling and Loading States**: The application includes error handling for API requests and displays a loading indicator or message while data is being fetched.

6. **Responsive Design**: The application is designed to provide a seamless experience across different devices and screen sizes.

7. **Dark Mode/Light Mode**: Users can switch between dark and light modes for a personalized experience.

## Technical Requirements

- **Framework**: React
- **State Management**: Utilizes the `useState` hook for effective state management.
- **API Integration**: Fetches products data from the [Fake Store API](https://fakestoreapi.com/) and handles asynchronous requests using `axios`.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/anurag0x/cleankoding.git

Certainly! Here's a simple README.md file for your React application along with some basic documentation:

markdown
Copy code
# Cleankoding Product Showcase

Cleankoding is a Single Page Application (SPA) built with React that utilizes the Fake Store API to fetch and display products. The core functionality of this application is to enable users to filter the displayed products based on their categories through a dropdown menu.

## Key Features

1. **Fetching Data**: Products data is fetched from the [Fake Store API](https://fakestoreapi.com/), including details such as name, image, description, and category.

2. **Category Dropdown**: A dropdown menu in the UI lists all the unique categories obtained from the API data, allowing users to filter products by category.

3. **Filter Functionality**: Upon selecting a category from the dropdown or using the search box, the application dynamically updates to show the filtered results.

4. **Display Products**: Products are displayed in a user-friendly manner, including images, names, and descriptions.

5. **Error Handling and Loading States**: The application includes error handling for API requests and displays a loading indicator or message while data is being fetched.

6. **Responsive Design**: The application is designed to provide a seamless experience across different devices and screen sizes.

7. **Dark Mode/Light Mode**: Users can switch between dark and light modes for a personalized experience.

## Technical Requirements

- **Framework**: React
- **State Management**: Utilizes the `useState` hook for effective state management.
- **API Integration**: Fetches products data from the [Fake Store API](https://fakestoreapi.com/) and handles asynchronous requests using `axios`.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/cleankoding-product-showcase.git
Install dependencies:

bash
Copy code
cd cleankoding-product-showcase
npm install
Run the application:

bash

npm start
The application will be accessible at http://localhost:3000.
OR you can directly visit "https://cleankoding.vercel.app/"
Folder Structure
The project has the following folder structure:

public: Contains the HTML template and static assets.
src: Contains the React application source code.
components: Reusable React components.
styles: Styling for the application.
App.js: Main application component.
index.js: Entry point of the application.
Styling
The application uses a simple and clean styling approach. Styling is done using inline styles for components.

Contributions
Contributions are welcome! If you find any issues or want to add new features, please submit a pull request.
