import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header.js';
import Example from './components/Example/Example.js';

function App() {
    return (
        <div>
            <Header />
            <main class="py-4">
                <Example />
            </main>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
