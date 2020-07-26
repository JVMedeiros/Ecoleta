import React from 'react';

//Styles
import './styles.css'

//Assets
import logo from '../../assets/logo.svg';


const Home = () => {
    return (
        <div id="page-home">
           <div className="content">
               <img src={logo} alt="Ecoleta"/>
            </div> 
        </div>
    )
}

export default Home;