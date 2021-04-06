import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { AppContext } from "./libs/contextLib";

import './App.css';
import Header from './components/Header/Header.js';
import Example from './components/Example/Example.js';
import About from './components/About/About.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Dashboard from './components/Dashboard/Dashboard.js';

function App(props) {
    const laravelGlobals = JSON.parse(props.laravelGlobals);
    const [globals, setGlobals] = useState({
        'authenticated': false,
        'token': '',
        'token_exp': ''
    });

    return (
        <AppContext.Provider value={{ globals, setGlobals }}>
            <Router>
                <div>
                    <Header laravelGlobals={laravelGlobals} />
                </div>
                <Switch>
                    <Route exact path="/">
                        <main className="py-4">
                            <Example />
                        </main>
                    </Route>
                    <Route path="/about">
                        <main className="py-4">
                            <About />
                        </main>
                    </Route>
                    <Route path="/login">
                        <main className="py-4">
                            <Login />
                        </main>
                    </Route>
                    <Route path="/register">
                        <main className="py-4">
                            <Register />
                        </main>
                    </Route>
                    <Route path="/dashboard">
                        <main className="py-4">
                            <Dashboard />
                        </main>
                    </Route>
                </Switch>
            </Router>
        </AppContext.Provider>
    );
}

export default App;

if (document.getElementById('app')) {
    let laravelGlobals = document.getElementById('app').getAttribute('laravelGlobals');
    ReactDOM.render(<App laravelGlobals={laravelGlobals} />, document.getElementById('app'));
}
