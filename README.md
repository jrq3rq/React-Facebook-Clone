Facebook Clone Imgaes:

![Image of Facebook-clone-dark](./src/images/facebook-clone-readme-img.png)
![Image of Facebook-clone-dark](./src/images/facebook-clone-readme-img2.png)

```shell

React + React Hooks
React context API -> REDUX pattern
MATERIAL UI
FLEXBOX
Firebase's Firestore realtime DB
Firebase Hosting
Firebase Google Authentication (FULL LOGIN!)

```

```shell
npm install @material-ui/icons
npm install @material-ui/core

```

```shell

npm i firebase

on your firebase.js
    import firebase from "firebase";
on firebase start firestore DB
    initialize Auth signin from GoogleAuth
on you firebase.js
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

To access outside of the file:
    export {auth, provider};
    export default db;
```

## Sample `firebase.js`

```shell

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBEe6uT3PUbj-9txu5Wek8Yut9fOYrSloQ",
  authDomain: "facebook-clone-ec66a.firebaseapp.com",
  databaseURL: "https://facebook-clone-ec66a.firebaseio.com",
  projectId: "facebook-clone-ec66a",
  storageBucket: "facebook-clone-ec66a.appspot.com",
  messagingSenderId: "211357161970",
  appId: "1:211357161970:web:0a5f7874c25544c63bb36b",
  measurementId: "G-M3SF6671L8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;


```

## Import onto Login `commponent`

```shell

import {auth, provider} from "./firebase";

  const signIn = () => {
    //Sign In...
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };
```

## `reducer.js` use sample:

```shell

export const initialState = {
    user: null,
}

export const actionTypes = {
    SET_USER: "SET_USER"
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
}

export default reducer;
```

## `Index.js` wrap <App /> using `<StateProvider>`

```shell

import { StateProvider } from "./StateProvider";
import reducer, {initialState} from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
