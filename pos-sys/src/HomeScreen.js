import {useNavigate} from 'react-router-dom';
import React from 'react';
import './Screen.css';


const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div className = "HomeScreen">
            <div id="prelogo">
                <img id="logo" alt="Click Here to Return Home" onClick={() => navigate(-1)} src={"https://i.imgur.com/Y2jdLdx.png"}></img>
            </div>
            <br></br>

            {/* Manager Div */}
            <div className = "HomeScreen-top">
                <header id="ManagerTopText">Houston Street Subs</header>
            </div>
            <div id="disc1">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Welcome to the server screen! Here you can view the current inventory, as well as view the current orders. You can also
                view the current orders, and mark them as complete. Click on the logo in the top-right to return to the home screen.
            </div>

            <div className='navigation-buttons'>
                <button className='manager-button' onClick={() => navigate('/Manager')}>Manager Screen</button>
                <button className='server-button' onClick={() => navigate('/Server')}>Server Screen</button>
                <button className='customer-button' onClick={() => navigate('/Customer')}>Customer Screen</button>
                <button className='querytest-button' onClick={() => navigate('/QueryTest')}>Query Screen</button>
            </div>
            
            
        </div>
    )
    
};
export default Home;