// view orders and inventory
// @rishisant

import React, {useState, useEffect} from 'react';//import './BaseStyle.css';
import './ManagerStyle.css';
import {raise_admin_bar} from './HomeFunctions';
import './TableStyle.css';
import { print_All_Vals, products, ingredients, prices } from './Server';
import { initVals } from './Home';
import {useNavigate} from 'react-router-dom';
import {translate} from './HomeFunctions';

const ViewOrdersInt = () => {
    const currentLang = localStorage.getItem('lang', 'en');
    console.log('currentLang: ' + currentLang);
    const targetLanguage = currentLang;
    const textList = [
        "Click on the period of time you would like to view orders for by selecting an option from the dropdown menu. The inventory can be viewed by clicking on the inventory button.",
        "View Orders",
        "View Inventory",
        "Today",
        "Since Last Week",
        "Since Last Month",
        "Since Last Year",
        "All Time",
        "Submit Request",
        "All Orders",
        "Products",
        "Progress",
        "Price",
        "Date",
        "All Inventory",
        "Items",
        "Stock",
    ];

    const [translatedTextList, setTranslatedTextList] = React.useState([]);

    useEffect(() => {
        async function trans() {
            const transList = [];
            for (let i = 0; i < textList.length; i++) {
                let translatedText = await translate(textList[i], targetLanguage);
                transList.push(translatedText);
            }
            setTranslatedTextList(transList);
        }
        trans();
    }, []);

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
                {translatedTextList[0]}
                </div>
                
                <div id="spacer" style={{marginBottom: '5px', visibility: 'hidden'}}>ss</div>

                <select id="orderorinventory" style={dropdownStyle}>
                    <option value="orders">{translatedTextList[1]}</option>
                    <option value="inventory">{translatedTextList[2]}</option>
                </select>

                <select id="timeperiod" style={dropdownStyle} name="timeperiod">
                    <option value="today">{translatedTextList[3]}</option>
                    <option value="lweek">{translatedTextList[4]}</option>
                    <option value="lmonth">{translatedTextList[5]}</option>
                    <option value="lyear">{translatedTextList[6]}</option>
                    <option value="alltime">{translatedTextList[7]}</option>
                </select>

                <div id="spacer" style={{marginBottom: '5px', visibility: 'hidden'}}>ss</div>
                
                <div class="homebutton" id="load_order_request">{translatedTextList[8]}</div>

                <div id="spacer" style={{marginBottom: '5px', visibility: 'hidden'}}>ss</div>

                <div id="tablecontainers" style={containerStyle}>
                {/* orders */}
                    <div id="tablediv">
                        <table className="table_s" > 
                            <thead>
                                <tr>
                                <th colSpan="4">{translatedTextList[9]}</th>
                                </tr>
                                <tr > 
                                <th>{translatedTextList[10]}</th>  
                                <th>{translatedTextList[11]}</th> 
                                <th>{translatedTextList[12]}</th>
                                <th>{translatedTextList[13]}</th>
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
                            <th colSpan="2">{translatedTextList[14]}</th>
                            </tr>
                            <tr > 
                            <th>{translatedTextList[15]}</th>  
                            <th>{translatedTextList[16]}</th> 
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