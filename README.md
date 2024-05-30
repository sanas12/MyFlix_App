
## FlixApp

To build the server-side component of a “movies” web application. The web
application will provide users with access to information about different
movies, directors, and genres. Users will be able to sign up, update their
personal information, and create a list of their favorite movies.

##  Table of Contents
* Features
* Installation
* Usage
* API Endpoints
* Technologies Used
* Contributing
* License

## Features
* User authentication and authorization
* Viewing a list of all movies
* Viewing details about a specific movie, genre, or director
* User registration and profile management
* Adding and removing movies from the user's list of favorite movies.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
git clone https://github.com/sanas12/MyFlix_App

cd FlixApp

2. Install dependencies:
npm install

3. Set up environment variables
MONGO_URI=your_mongodb_uri(process.env.CONNECTION_URI)
PORT=your_port(8080)
SECRET_KEY=your_secret_key

4. Start the server:
npm start

The server should now be running on the port specified in your .env file.

## Usage
Once the server is running, you can access the application via the specified port (e.g., http://localhost:8080).

## API Endpoints
## Authentication
* POST /login
* Description: Login a user.
* Request body: { "Username": "yourusername", "Password": "yourpassword" }

* Users

## POST /users

* Description: Register a new user.
* Request body: { "Username": "yourusername", "Password": "yourpassword", "Email": "youremail", "Birthday": "yourbirthday" }

## DELETE /users/

* Description: Delete an existing user.
* Authentication required.

* Movies

## GET /movies

* Description: Get a list of all movies.
* Authentication required.
* GET /movies/

* Description: Get data about a single movie by title.
* Authentication required.
## GET /movies/genres/

* Description: Get data about a genre by name.
* Authentication required.
## GET /movies/directors/

* Description: Get data about a director by name.
* Authentication required.
## POST /users/
/movies/

* Description: Add a movie to a user's list of favorites.
* Authentication required.
## DELETE /users/
/movies/

* Description: Remove a movie from a user's list of favorites.
* Authentication required.

## Technologies Used
* Node.js
* Express
* MongoDB
* Mongoose
* Passport for authentication
* JWT for secure access
* dotenv for managing environment variables




