# WIL-Project
RealHome - Real Estate Property Listings
Project Overview
RealHome is an online platform where real estate agents and homeowners can list properties for sale or rent. The platform allows users to search for properties, filter results based on location, price range, and type, and view property details. Additional interactive features include a map integration for property locations and a contact form with email functionality for inquiries.

Features
Property Listings: Detailed listings with descriptions, prices, and images.
Search and Filter: Search properties by location, price range, and type (e.g., rent or sale).
Google Maps Integration: View the exact location of properties on an interactive map.
Responsive Design: User-friendly across desktops, tablets, and mobile devices.
Contact Form with Email API: Allows users to reach out for inquiries via an integrated email API.

Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: PHP (for database interaction with MySQL through XAMPP)
Database: MySQL (managed through XAMPP)
APIs:
Google Maps API: For interactive map views of properties.
Email API: For handling inquiries via the contact form.

Getting Started
Prerequisites
Install XAMPP for a local server environment with PHP and MySQL.
Get a Google Maps API Key for the maps integration.
Optional: Set up an email API (e.g., Nodemailer with SMTP or a service like SendGrid) for the contact form functionality.

Installation
Clone or download the repository.
Place the project folder in your XAMPP htdocs directory.
Start Apache and MySQL in the XAMPP Control Panel.
Create a MySQL database (e.g., realhome_db) and import the database.sql file (if provided) to set up the tables.

Configuration
Database: Update the db.php file with your MySQL credentials.
Google Maps API: Replace YOUR_API_KEY in index.html with your actual API key.
Email API: Configure the email API in main.js or PHP files for contact form submissions.

Usage
Home Page: View featured property listings.
Filter Properties: Use the filter form to narrow down properties based on location, price range, and property type.
Map View: Click on "Show Map" in each property listing to view its location on Google Maps.
Contact Form: Fill out and submit the form to reach out with inquiries about properties.

Project Structure
index.html: Main HTML file for the UI and structure.
styles.css: CSS file for styling.
main.js: JavaScript file for interactivity and filtering logic.
db.php: PHP file to connect to the MySQL database.
getProperties.php & addProperty.php: PHP files for fetching and adding property data.

Known Issues
Filter options may not load if database connectivity is not configured correctly.
Google Maps may not display if the API key is missing or incorrect.

Future Improvements
Add user authentication for agents and property owners.
Expand filtering options (e.g., by number of bedrooms, bathrooms, etc.).
Enable property CRUD functionality for logged-in users.

License
This project is licensed under the MIT License.
