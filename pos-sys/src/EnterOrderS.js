import {useNavigate} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './BaseStyle.css';
// import {raise_admin_bar} from './HomeFunctions';
import {raise_admin_bar} from './HomeFunctions';
import Dropdown from 'react-dropdown';
import {products, prices, ingredients, print_All_Vals} from './Home';
import {initValsTiny} from './Home';
var total_price = 0.0;
var completedOrder = [];
function EnterOrderS ({par}){
    var id_order = 0;
    
    var to_add = "howdy";
    const navigate = useNavigate();
    const [x, setX] = useState(false);
    // note to matt: modify this options -> with the items in the database just as you did with the table
    const dd_options = [
        'Steamed Juntunen', 'Spicy Santhanam', 'Fried Egholm', 'Baked Rehmat'
    ];
    
    var t = "";
    var mounted = false;
    useEffect(() => {
        if (mounted == false){
            getProduct();
            initValsTiny();
        }
        mounted = true;
    
    }, []); 
    var count = 0;
    let test;
    var current_order = [];
    var INITIAL_STATE = [];
    const [order, setOrder] = useState(current_order);
    const [products, setProducts] = useState(INITIAL_STATE)
    
    const getProduct = async (t)=> {
        console.log("started getproduct");  
        fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then(res => {   
            //console.log("About to get info from query");
                let newProducts = [ ...products];
                for (var i = 0; i < res.length; i++){
                    newProducts.push({id: i, name: res[i].description, price: "$" + String(res[i].price)});
                }
                setProducts(newProducts);
            
            //console.log("End of getProduct");

        })
        //console.log("x")

    }

    const add_to_order = () => {
        
        var desc = document.getElementById("selected_item").innerHTML;
        var item_price = (document.getElementById("selected_price").innerHTML);
        var quant = parseFloat(document.getElementById("quantfield").value);
        if (quant == 0){
            alert("Please enter a quantity.");
            return;
        }
        else if (quant < 0){
            alert("Please enter a positive quantity.");
            return;
        }
        else if (isNaN(quant)){
            alert("Please enter a valid quantity.");
            return;
        }
        let new_order = [ ...order];
        //get just the number from the price
        console.log("item_price1: " + item_price);
        item_price = parseFloat(item_price.substring(1));
        console.log("item_price: " + item_price);
        new_order.push({id: id_order, name: desc, quantity: quant, price: (parseFloat(item_price)*parseFloat(quant)).toFixed(2)});
        setOrder(new_order);
        id_order++;
        total_price = parseFloat(total_price) + parseFloat(quant * (item_price));
        total_price = total_price.toFixed(2);
        document.getElementById("total_price_div").innerHTML = "$" + String(total_price);
        
        completedOrder.push({name: desc, quantity: quant, price: (parseFloat(item_price)*parseFloat(quant)).toFixed(2)});
        
    }

    const queryOrder = () => {
        fetch ('http://localhost:3001/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(completedOrder)
        })
        .then(res => {
            return res.text();
        })
        .then(data => {
            //alert(data);
            getProduct();
        });
        //clear current order table
        let new_order = [ ...order];
        new_order = [];
        setOrder(new_order);
        total_price = 0.00;
        document.getElementById("total_price_div").innerHTML = "$" + "0.00";
        completedOrder = [];

    }

    const onClickAddItem = (name, price) => {
        // event.preventDefault();
        
        var div = document.getElementById("selected_item")
        div.innerHTML = name;
        var div2 = document.getElementById("selected_price")
        div2.innerHTML = String(price);
        //clear the quantity field
        

        //console.log(name, price)
    }

    const renderOrders = () =>{

        
        return order.map(({ id, name, quantity, price }) => { 
        

        return <tr key={id}>  
        <td >{name}</td>  
        <td>{quantity}</td>
        <td >${price}</td>   
     
        </tr>    


        }) 
    } 

    const renderProducts = () =>{
        
        
        return products.map(({ id, name, price }) => { 
        

        return <tr key={id} onClick={(event) => {onClickAddItem(name, price)}}>  
        <td >{name}</td>  
        <td >{price}</td>   
     
        </tr>    


        }) 
    } 

    const containerStyle = {
        // center both tables and make them display next to each other (flex row)
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '20px',
        marginBottom: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        height: '100%',
    };

    //console.log("starting html");
    // getProduct(t);
    const[state, setState] = React.useState(INITIAL_STATE);
    return (
        <div>
        <img id="mainlogo3" style={{cursor: 'pointer'}} src={require('./components/img/hss_transparent.png')} onClick={()=>navigate('/Server')}  alt="Logo"></img>
        <div className="textbut1">
            Enter any orders here that you would like to send to the kitchen. Note that each time you press send, a new order will be sent.
                
                Click on the logo to return back to the Server menu page.
        </div>
        {/* {console.log("Website creation begun")} */}
        <div style={{ margin: '50px' }}>
        </div>
        {/* The strings that we pull for query functions */}
        <div id="test_query_string" style={{visibility: 'hidden', fontSize: '0.1px' }}></div>
        <div id="test_query_string1" style={{visibility: 'hidden', fontSize: '0.1px' }}></div>
        <div className="tablecontainer" style={containerStyle}>
                <div id="tablediv">
                    <table className="table_s" > 
                        <thead>
                            <tr>
                            <th colSpan="2">Menu Items</th>
                            </tr>
                            <tr > 
                            <th>Product</th>  
                            <th>Price</th> 
                            </tr>  
                        </thead>    
                        <tbody> 
                        

                        {renderProducts()}    
                        </tbody>  
                    </table>
                </div>

                <div id="tablediv">
                    <table className="table_s" > 
                        <thead>
                            <tr>
                            <th colSpan="3">Current Order</th>
                            </tr>
                            <tr > 
                            <th>Product</th>  
                            <th>Quantity</th> 
                            <th> Price </th>
                            </tr>  
                        </thead>    
                        <tbody> 
                        {renderOrders()}
                        </tbody>  
                        <td colSpan="2" style={{fontWeight: 'bold', textAlign: 'center'}}>Total Price</td>
                        <td id="total_price_div">$0.00</td>
                    </table>
                </div>

                <div className="addtoorder">
                    {/* <Dropdown className="dropdown" options={dd_options} placeholder="Select an option" /> */}
                    <text id="order" className="order"> Selected Item: </text>
                    <div id="selected_item" className="order">{}</div>
                    <div id="selected_price" className="order">{}</div>
                    <input id="quantfield" placeholder="Quantity"></input>
                    <button className="addtoorderbutton" style={{fontSize: '15px'}} onClick={add_to_order}>Add Item to Order</button>
                    <br></br><button className="addtoorderbutton" style={{fontSize: '15px'}} onClick={queryOrder}>Send Order</button>
                </div> 

                
        </div>

        {/* <div className="homebutton" id="add_product"  >Add to Order</div> */}

        </div>  
    );

};
export default EnterOrderS;