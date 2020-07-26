import React from 'react';

//Styles
import './styles.css'

//Assets
import logo from '../../assets/logo.svg';


const Home = () => {
    return (
        <div id="page-home">
           <div className="content">
               <header>
                    <img src={logo} alt="Ecoleta"/>
                </header>
            </div> 
        </div>
    )
}

export default Home;