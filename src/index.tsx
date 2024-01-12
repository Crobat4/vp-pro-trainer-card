import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'styles/style.scss';

import React, { render } from 'preact/compat';
import { Home } from 'components/home';
import Loader from 'components/Loader';
import MenuSidebar from 'components/menu-sidebar';
import { fetchMoveList } from 'modules/FetchLists';

function App() {
    // Use these to get the data for database files (one at time)
    // Then copy the console.log result into the database files (src/modules/databases)
    //fetchPokemonList();
    //fetchMoveList();
    //fetchPokemonFormsList();

    return (
        <>
            <Loader />
            <div className={'d-flex p-3'}>
                <MenuSidebar />
                <Home />
            </div>
        </>
    );
}

// Inject our app into the DOM
render(<App />, document.getElementById('app'));
