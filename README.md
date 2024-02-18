## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`

### `npm run eject`

## Learn More

Test task. Trip-app. Introducing a user-friendly Trip app built using React.js where travelers can effortlessly plan their journeys with ease. With a sleek interface, users can scroll through their trips, each accompanied by a countdown timer to the start date and today's weather forecast. Additionally, selecting a trip unveils a detailed weather forecast for each day of the journey. Adding a new trip is a breeze with a modal window, allowing users to select a city from a predefined list, set start and end dates within the next 15 days, and seamlessly integrate it into their itinerary. The app further enhances user experience with features like trip sorting, intuitive navigation buttons, and seamless login via third-party providers for a personalized experience. Powered by the Visual Crossing Weather API, this app ensures travelers are equipped with accurate weather insights to make the most of their adventures.

Teclology stack [typescript, css3, reactjs, openapi, axios, hmtl5, nanoid]

Main page
![Main page](https://github.com/darynakarmazin/trip-app/raw/main/src/img/img-1.png)
![Main page](https://github.com/darynakarmazin/trip-app/raw/main/src/img/img-2.png)

Notes:

1.  Available 1000 recored/day for free

API for getting forecast from - to for the city
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[city]/[date1]/[date2]?unitGroup=metric&include=days&key=YOUR_API_KEY&contentType=json

API for getting today’s weather for the city
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[city]/today?unitGroup=metric&include=days&key=YOUR_API_KEY&contentType=json
