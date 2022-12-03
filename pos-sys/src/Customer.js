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
function Customer ({par}){
    var id_order = 0;
    
    var to_add = "howdy";
    const navigate = useNavigate();
    const [x, setX] = useState(false);
    // note to matt: modify this options -> with the items in the database just as you did with the table
    const dd_options = [
        'Steamed Juntunen', 'Spicy Santhanam', 'Fried Egholm', 'Baked Rehmat'
    ];
    
    var t = "";
    useEffect(() => {
        getProduct();
        initValsTiny();

    }, []); 
    var count = 0;
    let test;
    var current_order = [];
    var INITIAL_STATE = [];
    const [order, setOrder] = useState(current_order);
    const [products, setProducts] = useState(INITIAL_STATE)
    
    const getProduct = async (t)=> {
        console.log("started getproduct");  
        fetch('http://localhost:3001')
        .then(res => res.json())
        .then(res => {   
            //console.log("About to get info from query");
                let newProducts = [ ...products];
                for (var i = 0; i < res.length; i++){
                    newProducts.push({id: i, name: res[i].description, price: res[i].price});
                }
                setProducts(newProducts);
            
            console.log("End of getProduct");

        })
        console.log("x")

    }

    const add_to_order = () => {
        
        var desc = document.getElementById("selected_item").innerHTML;
        var item_price = (document.getElementById("selected_price").innerHTML);
        var quant = parseFloat(document.getElementById("quantfield").value);
        let new_order = [ ...order];
        item_price = parseFloat(item_price.substring(1));
        // console.log("item price: " + item_price);
        // console.log("quant: " + quant);
        // console.log("total price: " + total_price);
        new_order.push({id: id_order, name: desc, quantity: quant, price: (parseFloat(item_price)*parseFloat(quant)).toFixed(2)});
        setOrder(new_order);
        id_order++;
        total_price = parseFloat(total_price) + parseFloat(quant * (item_price));
        //console.log("total price2: " + total_price);
        total_price = total_price.toFixed(2);
        document.getElementById("total_price_div").innerHTML = "$" + String(total_price);
        for (var i = 0; i < quant; i++){
            completedOrder.push({name: desc, quantity: quant, price: (parseFloat(item_price)*parseFloat(quant)).toFixed(2)});
        }
        //console.log("completed order: " + completedOrder);

    }

    const queryOrder = () => {
        console.log("started queryOrder");
        console.log(completedOrder);
    }

    const onClickAddItem = (name, price) => {
        // event.preventDefault();
        
        var div = document.getElementById("selected_item")
        div.innerHTML = name;
        var div2 = document.getElementById("selected_price")
        div2.innerHTML = "$" + String(price);
        console.log(name, price)
    }

    const renderOrders = () =>{

        
        return order.map(({ id, name, quantity, price }) => { 
        {console.log("mapped")}   

        return <tr key={id}>  
        <td >{name}</td>  
        <td>{quantity}</td>
        <td >${price}</td>   
     
        </tr>    


        }) 
    } 

    const renderProducts = () =>{
        console.log("render products");
        
        return products.map(({ id, name, price }) => { 
        {console.log("mapped")}   

        return <tr key={id} onClick={(event) => {onClickAddItem(name, price)}}>  
        <td >{name}</td>  
        <td >{price}</td>   
     
        </tr>    


        }) 
    } 
    console.log("starting html");
    // getProduct(t);
    const[state, setState] = React.useState(INITIAL_STATE);
    return (
        <div>
        <img id="mainlogo3" style={{cursor: 'pointer'}} src={require('./components/img/hss_transparent.png')} onClick={()=>navigate('/')}  alt="Logo"></img>
        <div className="textbut1">
            The Menu is displayed on the left. Please select from the dropdown menu and click
            "Add to Order" to add the item to the order. Click on the logo to return home.
        </div>
        {/* {console.log("Website creation begun")} */}
        <div style={{ margin: '50px' }}>
        </div>
        {/* The strings that we pull for query functions */}
        <div id="test_query_string" style={{visibility: 'hidden', fontSize: '0.1px' }}></div>
        <div id="test_query_string1" style={{visibility: 'hidden', fontSize: '0.1px' }}></div>
        <div className="tablecontainer">
            <div id="flexrow">
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
                    <button className="addtoorderbutton" onClick={add_to_order}>Add Item to Order</button>
                    <br></br><button className="addtoorderbutton" onClick={queryOrder}>Complete Order</button>
                </div> 
            </div>

                
        </div>

        {/* <div className="homebutton" id="add_product"  >Add to Order</div> */}

        </div>  
    );

};
export default Customer;