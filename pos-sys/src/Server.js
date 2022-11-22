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
    var test = "Test Query1";
    let query_string = "";
    const [product, setProduct] = useState(false);
    useEffect(() => {
        getProduct();
    }, []);
    function getProduct() {
        fetch('http://localhost:3001')
        .then(res => res.json())
        .then(res => 
            // grab the description value of the first object in the array
            
            // console.log(res[0].description)
            document.getElementById("to_test").innerHTML = res[0].description
        )
       

    }


    // const Server = () => {
    const navigate = useNavigate();
    

    return (
        <div id="homecontainer">
            <img id="mainlogo" src={require('./components/img/hss_transparent.png')} alt="Logo"></img>
            <div class="homebutton" id="to_order" onClick={() => navigate('/createOrder')}>Enter Order</div>
            <div class="homebutton" id="to_order" onClick={() => navigate('/ViewOrders')}>View Orders/Inventory</div>
            <div class="homebutton" id="to_order" onClick={() => navigate('/ContactManager')}>Contact Manager</div>
            <div class="homebutton" id="admin_panel" onClick={raise_admin_bar}>Admin Panel</div>
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