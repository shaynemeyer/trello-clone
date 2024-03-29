# Trello Clone

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

```ascii
.
├── public
│   ├──index.html
│   ├── manifest.json   # This provides application metadata for Progressive Web Apps
│   └── robots.txt
├── src
│   │
│   ├──app.tsx         # first component of the application
│   └──index.tsx       # App entry point
│
├── .gitignore
├── package.json
├── yarn.lock
├── tsconfig.json      # Typescript compiler configuration
└── yarn.lock
```

## Todos

- Create a datastore to back the board
- Create user accounts and Teams
- Associate boards with Teams
- Associate tasks with users
