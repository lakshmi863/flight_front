# Getting Started with Create React App
this is my project link( https://flight-booking-system-spm0.onrender.com )
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<img width="536" height="824" alt="FlyGo project" src="https://github.com/user-attachments/assets/5d31d38b-7b90-4a85-9d55-4065bfc495cc" />

Home page View

<img width="1100" height="1361" alt="flight-booking-system-spm0 onrender com_" src="https://github.com/user-attachments/assets/6e8a1820-7eb6-4ae4-8a64-f2a7065d364e" />

Home page description:

When a new user visits the FlyGo Booking website, they are first prompted to sign up or log in. After successful authentication, they are redirected to the Home Page, which acts as the main entry point for flight booking.

On the Home Page, users will see:

Navigation Bar (React Navigation)

Links to Home, My Trips, Bookings, Profile, and Logout.

Flight Search Form

Input fields for:

Departure city/airport

Destination city/airport

Travel date (and return date for round trip)

Number of passengers

Travel class (Economy, Business, First)

Once the user submits the form, the data is sent directly to the backend (Express + SQLite DB).

The backend fetches available flight details along with trip planning information.

Trip Planning Details

Estimated travel time (in hours/minutes).

Possible layovers (if any).

Distance covered between source and destination.

Available Flight Results with Filters

After applying filters (price, duration, airlines, departure time, etc.), users can view a list of flights.

Each flight card displays:

Airline name & logo

Departure & arrival times

Duration of travel

Ticket price

Book Now button

User Actions

Apply filters dynamically.

Select a flight and proceed to booking/payment page.
Details:

<img width="1900" height="2288" alt="flight-booking-system-spm0 onrender com_review" src="https://github.com/user-attachments/assets/0f51b12a-44e8-4e56-8948-495004be2482" />

Business page:

<img width="1800" height="2515" alt="flight-booking-system-spm0 onrender com_Business" src="https://github.com/user-attachments/assets/56b8d18b-5810-424d-87a9-57d4e7754d0e" />


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
