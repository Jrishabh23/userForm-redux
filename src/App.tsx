import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddNote from "./component/AddUser";
import { Provider } from "react-redux";
import store from "./store";
import Router from "./router/router";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}

export default App;
