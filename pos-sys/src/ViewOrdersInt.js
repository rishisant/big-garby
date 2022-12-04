// view orders and inventory
// @rishisant

import React, {useState, useEffect} from 'react';//import './BaseStyle.css';
import './ManagerStyle.css';
import {raise_admin_bar} from './HomeFunctions';
import './TableStyle.css';
import { print_All_Vals, products, ingredients, prices } from './Server';
import { initVals } from './Home';
import {useNavigate} from 'react-router-dom';

const ViewOrdersInt = () => {
    useEffect(() => {
        initVals();
    }, []);

    const dropdownStyle = {
        fontSize: '25px',
        fontFamily: 'Roboto Slab',
        textAlign: 'center',
        backgroundColor: 'white',
        color: 'black',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '5px',
        margin: '5px',
        marginTop: '25px',
        marginBottom: '20px',
        width: '20%',
        height: '25%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
    };
    const checkboxStyle = {
        // center the textbox and make the box bigger, font size= 25px
        fontSize: '25px',
        fontFamily: 'Roboto Slab',
        textAlign: 'center',
        backgroundColor: 'white',
        color: 'black',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '5px',
        margin: '5px',
        marginTop: '20px',
        marginBottom: '20px',
        width: '10%',
        height: '25%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
    };

    const containerStyle = {
        // center both tables and make them display next to each other (flex row)
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        marginBottom: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        height: '100%',
    };


    const navigate = useNavigate();
    return (
        <div>
          <img id="mainlogo3" src={require('./components/img/hss_transparent.png')} style={{cursor: 'pointer'}} onClick={()=> navigate('/Manager')} alt="Logo"></img>
                <div className="textbut1">
                Click on the period of time you would like to view orders for by selecting an option from the dropdown menu. You can also view the inventory
                by selecting the "View Inventory" option.
                </div>
                
                <div id="spacer" style={{marginBottom: '5px', visibility: 'hidden'}}>ss</div>

                <select id="orderorinventory" style={dropdownStyle}>
                    <option value="orders">View Orders</option>
                    <option value="inventory">View Inventory</option>
                </select>

                <select id="ordertype" style={dropdownStyle}>
                    <option value="completed">Completed Orders</option>
                    <option value="inprogress">In Progress Orders</option>
                    <option value="all">All Orders</option>
                </select>
                

                <select id="timeperiod" style={dropdownStyle} name="timeperiod">
                    <option value="today">Today</option>
                    <option value="lweek">Since Last Week</option>
                    <option value="lmonth">Since Last Month</option>
                    <option value="lyear">Since Last Year</option>
                    <option value="alltime">All Time</option>
                </select>

                <div id="spacer" style={{marginBottom: '5px', visibility: 'hidden'}}>ss</div>
                
                <div class="homebutton" id="load_order_request">Submit Request</div>

                <div id="spacer" style={{marginBottom: '5px', visibility: 'hidden'}}>ss</div>

                <div id="tablecontainers" style={containerStyle}>
                {/* orders */}
                    <div id="tablediv">
                        <table className="table_s" > 
                            <thead>
                                <tr>
                                <th colSpan="4">All Orders</th>
                                </tr>
                                <tr > 
                                <th>Products</th>  
                                <th>Progress</th> 
                                <th>Price</th>
                                <th>Date</th>
                                </tr>  
                            </thead>    
                            <tbody> 
                                <tr>
                                    <td style={{fontSize: '25px'}}>Callie Sub, Chocolate Chip Cookie, Medium Fountain Drink</td>
                                    <td>Completed</td>
                                    <td>$14.25</td>
                                    <td>2021-12-11 05:13:20</td>
                                </tr>
                            
                            </tbody>  
                            
                        </table>
                        
                    </div>
                    {/* inventory */}
                    <div id="tablediv">
                    <table className="table_s" > 
                        <thead>
                            <tr>
                            <th colSpan="2">All Inventory</th>
                            </tr>
                            <tr > 
                            <th>Items</th>  
                            <th>Stock</th> 
                            </tr>  
                        </thead>    
                        <tbody> 
                            <tr>
                                <td>Cock-meat Sandwich</td>
                                <td>3</td>
                            </tr>
                        
                        </tbody>  
                        
                    </table>
                    
                </div>
                </div>
                

        </div>
    );
}

export default ViewOrdersInt;