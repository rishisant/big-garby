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
            <div className="container">
                <h1>Simple Inventory Table</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Unit Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td/>
                            <td/>
                            <td/>
                            <td/>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};
export default Server;