import React, {useState, useEffect} from 'react';//import './BaseStyle.css';
import './ManagerStyle.css';
import {raise_admin_bar} from './HomeFunctions';
import './TableStyle.css';
import { print_All_Vals, products, ingredients, prices } from './Server';
import { initVals } from './Home';
import {useNavigate} from 'react-router-dom';

const ViewReports = () => {
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
        width: '10%',
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


    const send_To_Manager = () => {
      // get the text from the text box
      var text = document.getElementById("contmanager").value;
      // empty the text box
      document.getElementById("contmanager").value = "Message sent!";
    }

    const navigate = useNavigate();
    return (
        <div>
          <img id="mainlogo3" src={require('./components/img/hss_transparent.png')} style={{cursor: 'pointer'}} onClick={()=> navigate('/Manager')} alt="Logo"></img>
                <div className="textbut1">
                Click on the type of report you would like to view and then click the button to view the report. Excess reports return a list of items that sold less
                than 10% of their inventory, restock reports return a list of items that need to be restocked, and sales reports return the sales by item from
                the order history.
                </div>
                
                <div id="spacer" style={{marginBottom: '5px', visibility: 'hidden'}}>ss</div>


                <select id="reporttype" style={dropdownStyle}>
                    <option value="excess">Excess Report</option>
                    <option value="restock">Restock Report</option>
                    <option value="sales">Sales Report</option>
                </select>
                

                <div id="spacer" style={{marginBottom: '5px', visibility: 'hidden'}}>ss</div>
                
                <div class="homebutton" id="load_order_request">Submit Request</div>

                <div id="spacer" style={{marginBottom: '5px', visibility: 'hidden'}}>ss</div>

                <div id="tablediv">
                    <table className="table_s" > 
                        <thead>
                            <tr>
                            <th colSpan="3">Report</th>
                            </tr>
                            <tr > 
                            <th>Items</th>  
                            <th>Stock</th> 
                            <th>Sales</th>
                            </tr>  
                        </thead>    
                        <tbody> 
                            <tr>
                                <td>Steamed Juntunen</td>
                                <td>140</td>
                                <td>52</td>
                            </tr>
                        
                        </tbody>  
                        
                    </table>
                    
                </div>

        </div>
    );
}

export default ViewReports;