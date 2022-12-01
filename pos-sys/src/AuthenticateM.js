// Authentication Page
// @author: @rishisant
// @date: 2022-12-11

import {useNavigate} from 'react-router-dom';
import React from 'react';
import './AuthenticateStyle.css';
// import {raise_admin_bar} from './HomeFunctions';
// import {raise_admin_bar} from './HomeFunctions';

import {raise_admin_bar} from './HomeFunctions';
// import { isValidManager } from './AuthentScript';

const AuthenticateM = () => {
    const navigate = useNavigate();
    var validusers = ["rishisanthanam", "mattjuntunen", "esbenegholm", "nayabrehmat"];
    var validpass = ["529009921", "630007600", "228007063", "528000730"];   

    // create a function to check if the user is valid using validusers[i] and validpass[i]
    // if the user is valid, then navigate to the manager page
    // if the user is not valid, then print "Invalid Manager" to the console
    function isValidManager() {
        var isvalid = false;
        var user_input = document.getElementById("username_field").value;
        var pass_input = document.getElementById("password_field").value;
        for (let i=0; i < validusers.length; ++i) {
            if (user_input === validusers[i] && pass_input === validpass[i]) {
                isvalid = true;
            }
        }
        if (isvalid) {
            console.log("Valid Manager");
            // navigate to manager
            navigate('/Manager');
        }
        else {
            console.log("Invalid Manager");
        }
    }
    
    return (
        <div id="homecontainer">
            <img id="mainlogo" src={require('./components/img/hss_transparent.png')} alt="Logo"></img>
            <div id="authcontainer">
                <input type="text" class="authfield" id="username_field" defaultValue="Input Username" name="fname"></input>
                <input type="text" class="authfield" id="password_field" defaultValue="Input Password" name="fname"></input>
            </div>
            <div id="authspacer"></div>
            <div class="homebutton" id="check_auth" onClick={isValidManager}>Authenticate</div>
            <div id="authspacer"></div>
            <div class="homebutton" id="admin_panel" onClick={raise_admin_bar}>Admin Panel</div>

            <div id="adminpanel">
                <panelbig>ADMIN PANEL</panelbig>
                <img class="admin_button" id="serverlogo" src={require('./components/img/home_transparent.png')} onClick={() => navigate('/')} alt="Home Logo"></img>
                <paneltext>RETURN HOME</paneltext>
                {/* <img class="admin_button" id="reportslogo" src={require('./components/img/reports_transparent.png')}></img> */}
            </div>
        </div>
        
    )
    
};
export default AuthenticateM;