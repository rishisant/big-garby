import React, {useState, useEffect} from 'react';//import './BaseStyle.css';
import './ManagerStyle.css';
import {raise_admin_bar} from './HomeFunctions';
import './TableStyle.css';
import { print_All_Vals, products, ingredients, prices } from './Server';
import { initVals } from './Home';
import {useNavigate} from 'react-router-dom';
// import { getProduct } from '../../node-postgres/test';
import {translate} from './HomeFunctions';

function ViewOrder (){
    const currentLang = localStorage.getItem('lang', 'en');
    console.log('currentLang: ' + currentLang);
    const targetLanguage = currentLang;
    const textList = [
        "Click on the period of time you would like to view orders for by selecting an option from the dropdown menu.",
        "Today",
        "Since Last Week",
        "Since Last Month",
        "Since Last Year",
        "All Time",
        "Submit Request",
        "All Orders",
        "Order ID",
        "Products",
        "Price",
        "Date",
        "Quantity",
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
    var mounted = false;
    useEffect(() => {
        if (mounted == false){
            getOrders();
            initVals();
        }
        mounted = true;
        
    }, []);
    var IS_orders = [];
    var IS_products = [];
    var IS_ids = [];
    const [orders, setOrders] = useState(IS_orders);
    const [products, setProducts] = useState(IS_products);
    //fetch the getorders function from the server
    const getOrders = async () => {
        //console.log("started getOrders");
        
       
        //await new Promise(resolve => setTimeout(resolve, 2000));
        fetch('http://localhost:3001/get_orders')
        .then(res => res.json())
        .then(res => {
            let newOrders = [ ...orders];
                for (var i = 0; i < res.length; i++){
                    //split the product id array into a string with commas
                    var product_ids = res[i].product_ids;
                    var product_ids_string = "";
                    for (var j = 0; j < product_ids.length; j++){
                        product_ids_string += product_ids[j];
                        if (j != product_ids.length - 1){
                            product_ids_string += ", ";
                        }
                    }
                    //split the product quantity array into a string with commas
                    var product_quantities = res[i].quantity;
                    var product_quantities_string = "";
                    if (product_quantities!= null){
                        for (var j = 0; j < product_quantities.length; j++){
                            product_quantities_string += product_quantities[j];
                            if (j != product_quantities.length - 1){
                                product_quantities_string += ", ";
                            }
                        }
                    }
                    //remove t and z from date
                    var date = res[i].date;
                    date = date.replace("T", " ");
                    date = date.replace("Z", "");
                    //remove the last 4 characters from the date
                    date = date.substring(0, date.length - 4);
                    console.log(res[i].date);
                    newOrders.push({id: i, order_num: res[i].order_num, name: product_ids_string, quant: product_quantities_string, price: "$" + String(res[i].total_price), date: date});
                    console.log(res[i].quantity);
                }
                setOrders(newOrders);

        })
        
    }
    

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
    //render orders function
    const renderOrders = () =>{
        return orders.map(({ id, order_num, name, quant, price, date }) => {
        return <tr key={id}>  
            <td>{order_num}</td>
            <td >{name}</td> 
            <td>{quant}</td> 
            <td >{price}</td>   
            <td >{date}</td>
        </tr>    
        });
    } 
    

    const navigate = useNavigate();
    return (
        <div>
          <img id="mainlogo3" src={require('./components/img/hss_transparent.png')} style={{cursor: 'pointer'}} onClick={()=> navigate('/Server')} alt="Logo"></img>
                <div className="textbut1">
                {translatedTextList[0]}
                </div>
                
                <div id="spacer" style={{marginBottom: '5px', visibility: 'hidden'}}>ss</div>
                

                <select id="timeperiod" style={dropdownStyle} name="timeperiod">
                    <option value="today">{translatedTextList[1]}</option>
                    <option value="lweek">{translatedTextList[2]}</option>
                    <option value="lmonth">{translatedTextList[3]}</option>
                    <option value="lyear">{translatedTextList[4]}</option>
                    <option value="alltime">{translatedTextList[5]}</option>
                </select>

                <div id="spacer" style={{marginBottom: '5px', visibility: 'hidden'}}>ss</div>
                
                <div className="homebutton" id="load_order_request">Submit Request</div>

                <div id="spacer" style={{marginBottom: '5px', visibility: 'hidden'}}>ss</div>

                <div id="tablediv">
                    <table className="table_s" width="1000" > 
                        <thead>
                            <tr>
                            <th colSpan="5">{translatedTextList[7]}</th>
                            </tr>
                            <tr > 
                            <th width="100">{translatedTextList[8]}</th> 
                            <th>{translatedTextList[9]}</th> 
                            <th>{translatedTextList[12]}</th> 
                            <th>{translatedTextList[10]}</th>
                            <th>{translatedTextList[11]}</th>
                            </tr>  
                        </thead>    
                        <tbody> 
                            {/* <tr>
                                <td>Completed</td>
                                <td style={{fontSize: '25px'}}>Callie Sub, Chocolate Chip Cookie, Medium Fountain Drink</td>
                                <td>$14.25</td>
                                <td>2021-12-11 05:13:20</td>
                            </tr> */}
                            {renderOrders()}
                        
                        </tbody>  
                        
                    </table>
                    
                </div>

        </div>
    );
}

export default ViewOrder;
