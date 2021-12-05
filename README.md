<h1 align="center">Cinemama Project</h1>

<h4 align="center">This is semester 3 frontend project</h4>

<p align="center">
  <a href="https://github.com/F0rty-Tw0/NEXT_Cinemama"><img src="https://img.shields.io/github/package-json/v/F0rty-Tw0/NEXT_Cinemama.svg" alt="Version"></a>
</p>

We decided to use the [React](https://reactjs.org/) library for it's simplicity and performance.
And [NextJs](https://nextjs.org/) framework because the server side rendering.

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
