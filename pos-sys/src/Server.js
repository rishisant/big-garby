import React from 'react';
import {useNavigate} from "react-router-dom"

const Server = () => {
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
                <header id="ManagerTopText">Server</header>
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