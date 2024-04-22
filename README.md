# MERN STACK  ,Book Management System📕📗

## Description
 This is a web application built with the <b> MERN stack (MongoDB, Express.js, React, Node.js) , React Icon , Axios , SnackBar </b> for managing books. It allows users to perform CRUD (Create, Read, Update, Delete) operations on books.

<br>

## Installation
```bash
git clone <https://github.com/mehmetpektass/MERN-Stack-BookStore.gitl>
```
```
cd book-management-system
```
```
cd project
```
```
npm install
```
```
npm start
```
<br>

## Features

* Browse Books: View a list of books with options to display in a table or card format.
* View Book Details: Click on a book to view its details including title, author, publish year, comments, and creation/update dates.
* Edit Book: Edit existing book details including title, author, publish year, comments, etc.
* Delete Book: Delete a book from the database.
* Create Book: Add a new book to the database with title, author, publish year, comments, etc.

<br>

## Technologies Used

* Frontend: React.js with React Router for client-side routing.
* Backend: Node.js with Express.js for RESTful API endpoints.
* Database: MongoDB for storing book data.
* State Management: React Hooks for managing state within components.
* Styling: Tailwind CSS for styling components.
*Other Libraries: Axios for HTTP requests, React Icons for icons, Notistack for displaying snackbars.

<br>

## Folder Structure

* client: Contains the frontend React application.
* server: Contains the backend Node.js application.
  * models: Contains MongoDB schema definitions.
  * routes: Contains Express.js routes for handling HTTP requests.
  * config.js: Configuration file for storing environment variables.
  * server.js: Entry point for the backend server.

<br>

## API Endpoints
* GET /books: Retrieve all books from the database.
* GET /books/:id: Retrieve a specific book by its ID.
* POST /books: Create a new book.
* PUT /books/:id: Update an existing book.
* DELETE /books/:id: Delete a book.

<br>

## Contributing 🚀
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


