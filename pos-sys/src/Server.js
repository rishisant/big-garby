import React from 'react';
import {useNavigate} from "react-router-dom"

const Server = () => {
    const navigate = useNavigate();
    return(
        <div>
            <div>
                Howdy this is the Server Screen, needs to be edited 
            </div>
            <div>
                <button onClick={() => navigate(-1)}>Go Back Home</button>
            </div>
        </div>
    )
};
export default Server;