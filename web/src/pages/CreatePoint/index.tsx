import React from 'react';

//Router
import {Link} from 'react-router-dom';

//Styles
import './styles.css'

//Assets
import logo from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi';


const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta"/>

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para página inicial
                </Link>
            </header>
        </div>
    )
};

export default CreatePoint;