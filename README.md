# STREAM SEEKER

This web application, built using React (create-react-app), React Router, CSS, and end-to-end tested with Cypress, allows users to explore links to songs or albums across various streaming platforms.

## Getting Started

To run this app locally, follow these steps:

1. Clone this repository to your local machine.

    `git clone <repository-url>` 

2. **Change into the project directory.**

    `cd stream-seeker`

3. **Install dependencies.**

    `npm install`

4. **Run the app locally.**

    `npm start`

The app should now be accessible at [http://localhost:3000/](http://localhost:3000/).

## Features

- **User Input:** Users can input a song or album URL or provide an ID and the platform it is from. 

- **User Interaction:** Users can save cards of stream links to a personal collection held in local storage. If A user no longer wants to save a song or album card it can easily be removed. 

- **API Integration:** The app makes fetch requests to an external API (`https://api.song.link/v1-alpha.1/links`) to retrieve data for other streaming platforms hosting the specified song or album.

- **React Router:** The app uses React Router for navigation, providing a seamless single-page application experience.

- **CSS Styling:** Custom styling using CSS for an appealing and user-friendly interface.

- **End-to-End Testing with Cypress:** The application is end-to-end tested using Cypress to ensure robustness and correctness.

## Usage

1. **Home Page:** Upon accessing the app, users are presented with a landing page featuring a form to input song or album details.

2. **Input Form:** Users can input either a song/album URL or an ID along with the platform it is from. Clicking the "SEARCH" button triggers the data retrieval process.

3. **Results Page:** The app navigates to a results page displaying data from various streaming platforms for the specified song or album.

4. **Error Handling:** The app provides informative error messages in case of invalid inputs or unsuccessful API requests.
