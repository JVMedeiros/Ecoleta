import React from 'react';

//Map
import {Map, TileLayer, Marker} from 'react-leaflet';

//Router
import {Link} from 'react-router-dom';
import api from '../../services/api';

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

            <form>
                <h1>Cadastro do <br/> ponto de coelta</h1>
                {/* Collection point info containter*/}
                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>
                    <div className="field">
                        <label htmlFor="name">Nome da entidade</label>
                        <input 
                        type="text"
                        name="name"
                        id="name"
                        />
                    </div>
                    <div className="field-group">
                    <div className="field">
                        <label htmlFor="email">E-mail</label>
                        <input 
                        type="email"
                        name="email"
                        id="email"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="whatsapp">WhatsApp</label>
                        <input 
                        type="text"
                        name="whatsapp"
                        id="whatsapp"
                        /> 
                    </div>
                    </div>
                </fieldset>
                
                {/* Location of Collection point container*/}
                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>

                    <Map center={[-27.2092052, -49.64001092]} zoom={15}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={[-27.2092052, -49.64001092]}/>
                    </Map>
                    {/* City and State containter*/}
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select name="uf" id="uf">
                                <option value="0">Selecione uma UF</option>
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city">
                                <option value="0">Selecione uma cidade</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                {/* Collection point itens collect container*/}
                <fieldset>
                    <legend>
                        <h2>Itens de coleta</h2>
                        <span>Selecione um ou mais itens de coleta</span>
                    </legend>
                    <ul className="items-grid">
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="teste"/>
                            <span>Oleo de cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="teste"/>
                            <span>Oleo de cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="teste"/>
                            <span>Oleo de cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="teste"/>
                            <span>Oleo de cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="teste"/>
                            <span>Oleo de cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="teste"/>
                            <span>Oleo de cozinha</span>
                        </li>
                    </ul>
                </fieldset>

                <button type="submit">
                    Cadastrar ponto de coleta
                </button>
            </form>
        </div>
    )
};

export default CreatePoint;