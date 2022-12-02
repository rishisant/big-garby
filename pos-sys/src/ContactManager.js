import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './BaseStyle.css';
import { initVals } from "./Home";
import { useEffect } from "react";
import { raise_admin_bar } from "./HomeFunctions";
import {useNavigate} from 'react-router-dom';

const ContactManager = () => {
    useEffect(() => {
        initVals();
    }, []);

    const txtstyle = {
      width: "22%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxSizing: "border-box",
      fontSize: "16px",
      marginTop: "30px",
      marginBottom: "35px",
      resize: "vertical",
      // center
      marginLeft: "auto",
      marginRight: "auto",
      display: "block",
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
          <img id="mainlogo3" src={require('./components/img/hss_transparent.png')} style={{cursor: 'pointer'}} onClick={()=> navigate('/Server')} alt="Logo"></img>
                <div className="textbut1">
                Leave a message for the manager, and we will get back to you as soon as possible! Note that each time you press send, a new message will be sent.
                Click the logo to return back to the Server menu page.
                </div>
                <textarea id="contmanager" style={txtstyle} name="message" rows="10" cols="30" placeholder="Enter your message here."></textarea>
                
                <div class="homebutton" id="submitmnrequest" onClick={send_To_Manager}>Submit Request</div>

        </div>
    );
}

export default ContactManager;
