import React from 'react';

//Router
import {Link} from 'react-router-dom';

//Styles
import 'styles.css';

//Assets
import logo from '../../assets/logo.svg'

const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta"/>
            </header>
        </div>
    )
};

export default CreatePoint;