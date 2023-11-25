import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'styles/style.scss';

import React, { render } from 'preact/compat';
import { Home } from 'components/home';
import Loader from 'components/Loader';

function App() {
    return (
        <>
            <Loader />
            <Home />
        </>
    );
}

// Inject our app into the DOM
render(<App />, document.getElementById('app'));
