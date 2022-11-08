<<<<<<< HEAD
import React from 'react';
import {useNavigate} from "react-router-dom"

const Manager = () => {
    const navigate = useNavigate();
    return(
        <div>
            <div>
                Howdy this is the Manager Screen
            </div>
            <div>
                <button onClick={() => navigate(-1)}>Go Back Home</button>
            </div>
        </div>
    )
};
=======
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
>>>>>>> 188612ab273438db8646e4ba186b5cda5b8f7438
export default Manager;