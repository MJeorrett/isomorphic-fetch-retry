# isomorphic-fetch-retry
Simple retry method wrapping isomorphic-fetch with retry capability.

Also includes a demo express server that randomly returns success or failure.

## Running
- clone repo
- `npm install`
- `npm run start:api` to start the demo api
- `npm start` to run the demo app

Run the demo app a few times and you will see it retrying a random number of times (up to 5).  If it gets 5 failures in a row it will give up.