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
export default Manager;