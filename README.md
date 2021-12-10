<h1 align="center">Cinemama Project</h1>

<h4 align="center">This is semester 3 frontend project</h4>

<p align="center">
  <a href="https://github.com/F0rty-Tw0/NEXT_Cinemama"><img src="https://img.shields.io/github/package-json/v/F0rty-Tw0/NEXT_Cinemama/master.svg" alt="Version"></a>
</p>

We decided to use the [React](https://reactjs.org/) library for it's simplicity and performance.
And [NextJs](https://nextjs.org/) framework because the server side rendering.

<h2 align="center">Sprint Number 2:</h2>

## Artiom Tofan

In the second sprint, I had to implement the cinema seat selection and the actual booking of the seats and display it beautifully.
I Helped the team with minor fixes and improvements, mentored them until they were ready to add and design their features.

Was guiding out how to solve state management issues and use the [Redux](https://redux.js.org/) library.
At the beginning of the sprint, we decided to use Material UI for the UI. But it ended up a bad idea because it was not easy to use.
In general, the project was an excellent experience, and we accumulated many good points. But overall, after finalizing, some of the features that we thought would be necessary were out of scope.

## Nikolai Lenander

On the second sprint, I was tasked with styling and configuring the header and the navigation bar. I had the goal of making sure that the header contained necessary social contact information such as SoMe links, the phone number to the current cinema, the address, and finally, the Cinemama logo.

On the navigation bar, four links were created to navigate around the site, starting with home and log in. Once logged in from the pop-up modal, 1-2 more links were added, depending on the user type, respectively. The styling was done in synergy with the header.

## Pawel Stepien

During the second sprint, I focused on styling the components I created during the first sprint.
My task was to style the schedules to get all the necessary information during the first interaction with the website. Information includes movie titles, genres, ratings, movie posters, schedules, and age limitations. After selecting the movie, the user is redirected to the specific movie page. That was my second task. I created a page that displays the schedule, the movie description, and the movie trailer. During styling, I learned how to utilize SCSS, which is a powerful tool. Using styles variables and nested class names made it easier to create clear and readable code.

<h2 align="center">Sprint Number 1:</h2>

## Artiom Tofan

In the first sprint, my goal was to design the website's main page. Create the basic logic and connect the components.
I also designed the login component and its logic. We had to initialize the API connection and the user authentication.
After several iterations, when the project started growing, we understood that we could utilize the Redux library to simplify the state management and not elevate the props for all the needs.
After that i created the Admin page and its validation.
Assisted our team during iterations and made the project more scalable.

## Nikolai Lenander

For the first sprint, I was tasked with fetching and showing the seats on the website, specifically when a user is making a booking. Therefore I created the endpoint to fetch the seats, queried by specific parameters. I then created a simple Seat component, which would take just a name as a parameter. Once I had this done, I made the BookingModal itself, then imported the seat. The schedule component could now create a bookingModal, with the currently selected schedule as a parameter. We could dynamically fetch the seat based on the current selection of parameters and display them.

## Pawel Stepien

During the first sprint, I learned the structure and basic functionalities of React.
I focused on creating and displaying a new React component, implementing various functions, and fetching data from the API.
My task during the first sprint was to display the schedules based on the dates. I had to fetch data from our API and pass it to the component using props in the getStaticProps method. Then the schedule had to be displayed in a specific way.
A user can click one of three buttons - today, tomorrow, and the day after tomorrow. The website displays the schedules according to the schedule for the desired date by taking the user's input.
