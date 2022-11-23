import {useNavigate} from 'react-router-dom';
import React, { useEffect } from 'react';
import './BaseStyle.css';
// import {raise_admin_bar} from './HomeFunctions';
import {raise_admin_bar} from './HomeFunctions';

const Customer = () => {
    const navigate = useNavigate();
    return (
        <div id="homecontainer">
            <img id="mainlogo" src={require('./components/img/hss_transparent.png')} alt="Logo"></img>
            
        </div>
        
    )
    
};
export default Customer;