import {useNavigate} from 'react-router-dom';
import React from 'react';
import './Screen.css';


const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div className = "HomeScreen">
            <div className = "HomeScreen-top">
                <header className="HomeScreen-header">Welcome to Houston Street Subs!</header>
            </div>
            <div className='navigation-buttons'>
                <button className='manager-button' onClick={() => navigate('/Manager')}>Manager Screen</button>
                <button className='server-button' onClick={() => navigate('/Server')}>Server Screen</button>
                <button className='customer-button' onClick={() => navigate('/Customer')}>Customer Screen</button>
            </div>
            
            
        </div>
    )
    
};
export default Home;