import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from './components/Header/Header.js';
import Example from './components/Example/Example.js';
import About from './components/About/About.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';

function App(props) {
    const laravelGlobals = JSON.parse(props.laravelGlobals);
    return (
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
            </Switch>
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    let laravelGlobals = document.getElementById('app').getAttribute('laravelGlobals');
    ReactDOM.render(<App laravelGlobals={laravelGlobals} />, document.getElementById('app'));
}
