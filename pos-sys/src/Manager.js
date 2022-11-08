import React from 'react';
import {useNavigate} from "react-router-dom"

const Manager = () => {
    const navigate = useNavigate();
    return(
        <div>
            {/* Logo in Top Right */}
            <div id="prelogo">
                <img id="logo" alt="Click Here to Return Home" onClick={() => navigate(-1)} src={"https://i.imgur.com/Y2jdLdx.png"}></img>
            </div>
            <br></br>

            {/* Manager Div */}
            <div className = "HomeScreen-top">
                <header id="ManagerTopText">Manager</header>
            </div>

            {/* Return Home Screen */}
            <div>
                <button onClick={() => navigate(-1)}>Go Back Home</button>
            </div>
        </div>
    )
};
export default Manager;