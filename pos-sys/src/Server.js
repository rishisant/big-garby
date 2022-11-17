// Server Screen
// @author: @rishisant
// @date: 2022-12-11

import {useNavigate} from 'react-router-dom';
//import React from 'react';
import './ManagerStyle.css';
// import {raise_admin_bar} from './HomeFunctions';
import {raise_admin_bar} from './HomeFunctions';
import React, {useState, useEffect} from 'react';
function App() {
    const [product, setProduct] = useState(false);
    useEffect(() => {
        getProduct();
    }, []);
    function getProduct() {
        fetch('http://localhost:3001')
        .then(response => {
            console.log("this is the respose");
            console.log(response.rows[0]);
            return response.text();
        })
        .then(data => {
            setProduct(data);
        });
    }


    // const Server = () => {
    const navigate = useNavigate();
    var test = "Test Query1";
    let query_string = "";

    return (
        <div id="homecontainer">
            <img id="mainlogo" src={require('./components/img/hss_transparent.png')} alt="Logo"></img>
            <div class="homebutton" id="to_order" onClick={() => navigate('/InDevelopment')}>Enter Order</div>
            <div class="homebutton" id="to_order" onClick={() => navigate('/InDevelopment')}>View Orders/Inventory</div>
            <div class="homebutton" id="to_order" onClick={() => navigate('/InDevelopment')}>Contact Manager</div>
            <div class="homebutton" id="admin_panel" onClick={raise_admin_bar}>Admin Panel</div>
            <div class="homebutton" id="to_test" onClick={getProduct}>{test}</div>
            {/* <p class="backtest">;{this.state.apiResponse}</p> */}
            <div id="adminpanel">
                <panelbig>ADMIN PANEL</panelbig>
                <img class="admin_button" id="serverlogo" src={require('./components/img/query_transparent.png')} onClick={() => navigate('/QueryTest')} alt="Query Logo"></img>
                <paneltext>QUERY</paneltext>
                <img class="admin_button" id="serverlogo" src={require('./components/img/home_transparent.png')} onClick={() => navigate('/')} alt="Home Logo"></img>
                <paneltext>RETURN HOME</paneltext>
                {/* <img class="admin_button" id="reportslogo" src={require('./components/img/reports_transparent.png')}></img> */}
            </div>
        </div>
        
    )
        
    //}
}
//export default Server;
export default App;