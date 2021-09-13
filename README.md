# usMovie Ticket Booking Web Application

We aim to develop and host a single webpage application that allows users to book movie tickets on our platform. All users will be able to view all seats in the theatre and able to book the available seats.

You can visit our websit via - https://usmovie-my.netlify.app/

## Running the project on local device
This project might not run as expected under local device as the CORS has been set to the live web application. 
### Java Backend - server folder
#### `.\mvnw spring-boot:run`
Input the following to terminal to start the spring boot application.

* server -> src -> main -> resources -> application.properties where not included in the git repository as it contains the connection string to MongoDB Atlas.

You can find the api via -https://ticketbookingapi-my.herokuapp.com/movies

### React Frontend - client folder
#### `npm install`
Install all the required packages needed for this project.

#### `npm start`
Runs the app in the development mode.

* client -> .env file where not included in the git repository as it contains the ID for emailjs.

## Project Overview
We have been practicing the agile methodology throughtout this project where two sprints were involved to produce this web application. The frontend of this web application was implemented using React.js while the backend was implemented using Spring Boot and MongoDB Atlas for the database. Below will be a few overview diagrams of this project. For more information regarding the project's design specifications and other documentations, you can visit the "Technical Report" folder in this repository.

### Overview of project 
![image](https://user-images.githubusercontent.com/49915438/132973497-5e77e2c0-3ad3-4c67-8dff-53969b9fec05.png)

### Use Case Diagram
![image](https://user-images.githubusercontent.com/49915438/132973318-95385719-172d-4481-80af-aae94e3097e1.png)

### Architecture Diagram
![image](https://user-images.githubusercontent.com/49915438/132973472-853881ea-a77c-4559-a3d5-cc87efdd2981.png)
