import React from 'react';

//Router manager
import { Route, BrowserRouter } from 'react-router-dom';

//Componnents
import Home from './pages/Home';
import CreatePOint from './pages/CreatePoint'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" />
        </BrowserRouter>
    );
};

export default Routes;