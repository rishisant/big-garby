import React from 'react';
import {useNavigate} from "react-router-dom"

const Manager = () => {
    const navigate = useNavigate();
    return(
        <div>
            <div id="logo"><img src="./src/components/logo_mini1.png"></img></div>
            <div className = "HomeScreen-top">
                <header id="ManagerTopText">HSS Manager View</header>
            </div>
            <div>
                <button onClick={() => navigate(-1)}>Go Back Home</button>
            </div>
        </div>
    )
};
export default Manager;