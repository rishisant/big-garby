import React from 'react';
import {useNavigate} from "react-router-dom"

const Customer = () => {
    const navigate = useNavigate();
    return(
        <div>
            <div>
                Howdy this is the Customer Screen
            </div>
            <div>
                <button onClick={() => navigate(-1)}>Go Back Home</button>
            </div>
        </div>
    )
};
export default Customer;