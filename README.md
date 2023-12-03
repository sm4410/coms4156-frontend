# Elderlycare

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Instructions for running end-to-end tests: 
1. Start the service [here](https://github.com/chrischang314/coms4156) on the local machine 
2. Run the GET /clients request and take note of existing clients
3. Start the client app on the local machine (using `ng serve`)
4. Access the client app via localhost:4200
5. Click on the ElderlyCare option
6. Run the GET /clients request and check if ElderlyCare client has been added
7. Click on the Sign Up button and create a new Consumer account
8. Run the GET /clients request and check if consumer was being added
9. Click on the Sign Out button. 
10. Click on the Service Provider option
11. Click on the Add Service Providers button
12. In this page, create a serviceProvider, add some availability and services and click Add Provider once finished
13. Run the GET /clients request and check if serviceProvider was added
A version of the instructions with screenshots can be found [here](https://docs.google.com/document/d/13FU8n8ozLavJvCpX823Ug_TVaf26Wcm1KLcg7UYjDoc/edit?usp=sharing)


## Testing service for multiple instances of sample client

Instructions for running:
1. Start the match service as normal on localhost (runs on port 8080)  -> https://github.com/chrischang314/coms4156)
2. Use the client here- (sample stub) Spring Boot MVC app 'eldercare' from this repo instead -> https://github.com/kamal-ark/eldercare
3. We will check only one endpoint /addAvailability of the client app here
4. You can follow the video demo of this test here -> https://youtu.be/L2KrMoNXYdo
5. This video shows how the client app "eldercare" has two run configurations - one default that runs on port 8081, and another that runs on 8083
6. You can see the webpage we test from both client instances, on localhost:8081/providerhome and localhost:8083/providerhome
7. The supported function is adding an availability as you can see in the demo. We check on both pages if the added availability is displayed correctly for the respective client instance
8. As in video, the service is indeed able to recognize both client instances as different and sends the data to the appropriate client
9. The Postman tests shown in video also verifies that the changes were in fact correctly updated on the target service provider's list of availabilities, from both instances
10. The client code is just for this demo and only has this endpoint functional. This can be run like the service on Eclipse/SpringToolSuite IDE, by clicking on run after importing the project
11. The careApplication.java is the file that has to be selected for running the client app
12. Please change the port on which you want it to run on the VM flags port settings as shown in the video, the default port the client sample app runs is on 8081
13. The service app runs on 8080 port by default. Please comment out the mysql property line, or delete it for test purposes, from src/main/resources/application.properties

https://youtu.be/L2KrMoNXYdo - Video with demo of all steps in this test suite section

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
