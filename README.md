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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
