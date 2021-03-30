import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header.js';
import Example from './components/Example/Example.js';

function App(props) {
    const laravelGlobals = JSON.parse(props.laravelGlobals);
    return (
        <div>
            <Header laravelGlobals={laravelGlobals}/>
            <main className="py-4">
                <Example />
            </main>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    let laravelGlobals = document.getElementById('app').getAttribute('laravelGlobals');
    ReactDOM.render(<App laravelGlobals={laravelGlobals} />, document.getElementById('app'));
}
