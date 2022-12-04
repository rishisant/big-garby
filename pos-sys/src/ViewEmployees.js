

import React, {useState, useEffect} from 'react';//import './BaseStyle.css';
import './ManagerStyle.css';
import {raise_admin_bar} from './HomeFunctions';
import './TableStyle.css';
import { print_All_Vals, products, ingredients, prices } from './Server';
import { initVals } from './Home';
import {useNavigate} from 'react-router-dom';

const ViewEmployees = () => {
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
                This is a list of all employees and their information.
                </div>
                
                <div id="spacer" style={{marginBottom: '5px', visibility: 'hidden'}}>ss</div>

                <div id="tablediv">
                    <table className="table_s" > 
                        <thead>
                            <tr>
                            <th colSpan="3">All Employees</th>
                            </tr>
                            <tr> 
                            <th>Name</th>  
                            <th>Title</th> 
                            <th>Date of Hire</th>
                            </tr>  
                        </thead>    
                        <tbody> 
                            <tr>
                                <td>Rishi Santhanam</td>
                                <td>Manager</td>
                                <td>2021-12-11 04:20:00</td>
                            </tr>
                            <tr>
                                <td>Esben Egholm</td>
                                <td>Manager</td>
                                <td>2021-12-11 04:20:00</td>
                            </tr>
                            <tr>
                                <td>Nayab Rehmat</td>
                                <td>Manager</td>
                                <td>2021-12-11 04:20:00</td>
                            </tr>
                            <tr>
                                <td>Matt Juntunen</td>
                                <td>Manager</td>
                                <td>2021-12-11 04:20:00</td>
                            </tr>
                            <tr>
                                <td>LeBron James</td>
                                <td>Server</td>
                                <td>2021-12-11 04:20:00</td>
                            </tr>
                        
                        </tbody>  
                        
                    </table>
                    
                </div>

        </div>
    );
}

export default ViewEmployees;
