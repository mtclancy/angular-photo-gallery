# Angular Photo Gallery

## About

This project is a simple photo gallery that demonstrates Angular capabilities. The photo gallery utilizes the following tools and libraries:

- Tailwind (for styles)
- Material Icons and Google Fonts
- Angular 16
- NGRX (a state management tool)
- My-Schematics (an angular schematics package that I built to create custom elements)

When looking through this project users should be able to do the following:

- View photo thumbnail lists and their titles by album ID.
- Download full resolution versions of photos utilizing a proxy server.
- View content on different screen sizes.
- Copy and past url and query to another tab to see the same results.

Next steps:

- To improve browser load time, only load images that are in the viewport using intersection observer.

## Running the project

This project utilizes docker. In order to run this project you will need to make sure you first have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed. Docker Desktop will need to be running when you launch the app.

From the root of the project, the following Docker commands can be used:

- Start the app: `docker compose up`
- Stop the app: `docker compose down`

Once the containers are up, and the Angular app is done compiling, launch the app in your browser at [localhost:4200](http://localhost:4200).

## Local Development

### Unit Tests

Unit tests can be found at `browser/app/unit-tests`. These unit tests do not cover all code in this application, but provide a number of different test cases and examples (see search-bar.component.spec.ts and albums.component.spec.ts).

To run unit tests, navigate to the `browser` directory inside a terminal, and run `ng test`.
