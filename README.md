# System-Login Supervision System

The System-Login Supervision System project aims to transform the conventional college laboratory handwritten login register process into an efficient and automated digital system.

## Technologies Used

- Front-End: HTML, CSS, JavaScript
- Back-End: Java (Servlets)
- Database: SQL (MySQL)
- Deployment: Apache Tomcat (Servlet container)

## Project Structure

- **Front-End:**
  - `login.html`: Login page HTML.
  - `register.html`: Registration page HTML.
  - `styles.css`: Stylesheet for the HTML pages.
  - `script.js`: JavaScript for form handling and AJAX requests.

- **Back-End:**
  - `LoginServlet.java`: Java Servlet for handling login requests.
  - `RegisterServlet.java`: Java Servlet for handling registration requests.

- **Database:**
  - `CreateTable.sql`: SQL script to create necessary tables (`users` and `login_records`).

## Getting Started

1. **Database Setup:**
   - Set up a MySQL database server.
   - Run the SQL script in `CreateTable.sql` to create the required tables.

2. **Deployment:**
   - Deploy your Java Servlets on Apache Tomcat.

3. **Front-End:**
   - Place the HTML, CSS, and JavaScript files in a web server directory.

4. **Configure Endpoints:**
   - Update AJAX requests in `script.js` to point to your servlet endpoints.

## Features

- User Registration: Allows users to create accounts with usernames, emails, and passwords.
- User Login: Provides a secure login mechanism with hashed passwords.
- Login Records: Keeps a record of successful and failed login attempts.

## Note

Remember, this is my experience. steps are slightly vary for your system configurations, software versions, and your coding styles.
