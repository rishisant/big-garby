import React, {useState, useEffect} from 'react';//import './BaseStyle.css';
import './ManagerStyle.css';
import {raise_admin_bar} from './HomeFunctions';
import './TableStyle.css';
import { print_All_Vals, products, ingredients, prices } from './Server';
import { initVals } from './Home';
import {useNavigate} from 'react-router-dom';


function ViewOrder (){
  
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
                    newOrders.push({id: i, order_num: res[i].order_num, name: product_ids_string, price: "$" + String(res[i].total_price), data: res[i].date});
                    console.log(res[i].product_ids);
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
        return orders.map(({ id, order_num, name, price, date }) => {
        return <tr key={id}>  
            <td>{order_num}</td>
            <td >{name}</td>  
            <td >{price}</td>   
            <td >{date}</td>
        </tr>    
        });
    } 
    //function to pair the product id with the product name
    const pairProduct = () => {
        //console.log("started pairProduct", orders);
        for (var i = 0; i < IS_orders.length; i++){
            for (var k = 0; k < IS_orders.name.length; k++){
                
                for (var j = 0; j < IS_products.length; j++){
                    if (IS_orders[i].name[k] == IS_products[j].product_id){
                        IS_ids.push(IS_products[j].name);
                    }
                    //console.log("finished pairProduct");
                }
            }
        }
        //replace the product id with the product name in the IS_orders array
        for (var i = 0; i < IS_orders.length; i++){
            IS_orders[i].name = IS_ids[i];
        }
        //console.log(IS_ids);
    }
    

    const navigate = useNavigate();
    return (
        <div>
          <img id="mainlogo3" src={require('./components/img/hss_transparent.png')} style={{cursor: 'pointer'}} onClick={()=> navigate('/Server')} alt="Logo"></img>
                <div className="textbut1">
                Click on the period of time you would like to view orders for by selecting an option from the dropdown menu.
                </div>
                
                <div id="spacer" style={{marginBottom: '5px', visibility: 'hidden'}}>ss</div>


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
                
                <div className="homebutton" id="load_order_request">Submit Request</div>

                <div id="spacer" style={{marginBottom: '5px', visibility: 'hidden'}}>ss</div>

                <div id="tablediv">
                    <table className="table_s" > 
                        <thead>
                            <tr>
                            <th colSpan="4">All Orders</th>
                            </tr>
                            <tr > 
                            <th>Order ID</th> 
                            <th>Products</th>  
                            <th>Price</th>
                            <th>Date</th>
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
