import React from 'react';

//Router manager
import { Route, BrowserRouter } from 'react-router-dom';

//Componnents
import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreatePoint} path="/cadastro-ponto" />
        </BrowserRouter>
    );
};

export default Routes;