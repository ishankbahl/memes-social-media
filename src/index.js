import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux"; 
import createHistory from "history/createBrowserHistory";

import { App } from "./Components";
import reducer from "./reducers";
import { firebaseApp } from "./firebase";
import { logUser, unlogUser } from "./actions";

const store = createStore (reducer);

const history = createHistory();

firebaseApp.auth().onAuthStateChanged((user) => {
    if (user) {
        history.push("/posts/fresh");
        const { email } = user;
        store.dispatch(logUser(email));
    }
    else {
        history.push("/signin");
        store.dispatch(unlogUser());
    }
});

render(<Provider store= { store } >
        <App />
       </Provider>, document.getElementById("root"));