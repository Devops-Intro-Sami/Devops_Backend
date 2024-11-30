# Devops_Backend
Overview
This project serves is the backend for a flight booking system, designed with scalability, modularity, and maintainability in mind. It includes a RESTful API for managing flight bookings, integrated database configuration, and test cases to ensure reliability.

Features
- Flight management (add, update, delete, search)
- Database seeding for initial data population
- Error handling middleware
- Modular architecture with MVC pattern
- End-to-end Cypress tests

In order to run this project in production settings run:
``restart-docker.bat``
This will pull the images required and run them with the proper settings via the `docker-compose.yml`
The containers are:
- db - the database container uses a psql image to host the database
- app - the app container uses a node.js image and connects to the above db

In order to run this project in test settings run:
``restart-docker-test.bat``
This will pull the images required and run them with the proper settings via the `docker-compose_test.yml`
The containers are:
- test_db - the database container uses a psql image to host the test database.this database is booting up fresh everytime(no data persistence)
- test_app - the test_app container uses a node.js image and connects to the above test_db to run the tests.
- test - the test container uses a cypress image and connects to the backend(test_app) to run the tests.

