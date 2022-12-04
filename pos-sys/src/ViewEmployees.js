

import React, {useState, useEffect} from 'react';//import './BaseStyle.css';
import './ManagerStyle.css';
import {raise_admin_bar} from './HomeFunctions';
import './TableStyle.css';
import { print_All_Vals, products, ingredients, prices } from './Server';
import { initVals } from './Home';
import {useNavigate} from 'react-router-dom';
import {translate} from './HomeFunctions';

const ViewEmployees = () => {
    const currentLang = localStorage.getItem('lang', 'en');
    console.log('currentLang: ' + currentLang);
    const targetLanguage = currentLang;
    const textList = [
        "This is a list of all employees and their information.",
        "All Employees",
        "Name",
        "Title",
        "Date of Hire",
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

    const navigate = useNavigate();
    return (
        <div>
          <img id="mainlogo3" src={require('./components/img/hss_transparent.png')} style={{cursor: 'pointer'}} onClick={()=> navigate('/Manager')} alt="Logo"></img>
                <div className="textbut1">
                {translatedTextList[0]}
                </div>
                
                <div id="spacer" style={{marginBottom: '5px', visibility: 'hidden'}}>ss</div>

                <div id="tablediv">
                    <table className="table_s" > 
                        <thead>
                            <tr>
                            <th colSpan="3">{translatedTextList[1]}</th>
                            </tr>
                            <tr> 
                            <th>{translatedTextList[2]}</th>  
                            <th>{translatedTextList[3]}</th> 
                            <th>{translatedTextList[4]}</th>
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
