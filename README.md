Installation

Clone the repo:

git clone <your-repo-url>
cd RBAC


Install dependencies:

npm install


Create a .env file:

DB_NAME=rbac
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=your_jwt_secret
PORT=5000

Database Setup

Start PostgreSQL.

Create the database:

CREATE DATABASE rbac;


Sequelize will sync the models automatically (alter: true updates tables).

Running the App

Development mode:

npm run dev


Production mode:

npm start


Server runs at:

http://localhost:5000

API Endpoints
Auth

POST /api/auth/register - Register user

POST /api/auth/login - Login & get JWT

Users

GET /api/users - List users

GET /api/users/:id - Get user

POST /api/users - Create user

PUT /api/users/:id - Update user

DELETE /api/users/:id - Delete user

Roles

GET /api/roles - List roles

POST /api/roles - Create role

PUT /api/roles/:id - Update role

DELETE /api/roles/:id - Delete role

Permissions

GET /api/permissions - List permissions

POST /api/permissions - Create permission

PUT /api/permissions/:id - Update permission

DELETE /api/permissions/:id - Delete permission

Posts

GET /api/posts - List posts

POST /api/posts - Create post

PUT /api/posts/:id - Update post

DELETE /api/posts/:id - Delete post

All protected routes require JWT token in Authorization header.

Contributing

Fork the repository

Create a new branch

Make changes

Submit a pull request